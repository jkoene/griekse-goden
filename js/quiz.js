// Quiz: vragen tonen, antwoorden bijhouden en de uitslag laten zien.
(function () {
  const LETTERS = ["Α", "Β", "Γ", "Δ"];
  const schermen = {
    start: document.getElementById("scherm-start"),
    vraag: document.getElementById("scherm-vraag"),
    uitslag: document.getElementById("scherm-uitslag"),
  };

  let naam = "";
  let huidige = 0;
  let keuzes = [];
  // per vraag een geschudde volgorde van de antwoorden
  let volgordes = [];

  function toon(scherm) {
    for (const [key, el] of Object.entries(schermen)) {
      el.hidden = key !== scherm;
    }
    window.scrollTo(0, 0);
  }

  function schud(lijst) {
    const kopie = [...lijst];
    for (let i = kopie.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
    }
    return kopie;
  }

  function start() {
    naam = document.getElementById("naam").value.trim();
    huidige = 0;
    keuzes = VRAGEN.map(() => null);
    volgordes = VRAGEN.map(v => schud(v.antwoorden.map((_, i) => i)));
    toonVraag();
    toon("vraag");
  }

  function toonVraag() {
    const v = VRAGEN[huidige];
    document.getElementById("teller").textContent = `Vraag ${huidige + 1} van ${VRAGEN.length}`;
    document.getElementById("voortgang").style.width = `${(huidige / VRAGEN.length) * 100}%`;
    document.getElementById("vraag").textContent = v.vraag;
    document.getElementById("terug").disabled = huidige === 0;

    const lijst = document.getElementById("antwoorden");
    lijst.innerHTML = "";
    volgordes[huidige].forEach((index, plek) => {
      const knop = document.createElement("button");
      knop.className = "antwoord" + (keuzes[huidige] === index ? " gekozen" : "");
      knop.innerHTML = `<span class="letter">${LETTERS[plek]}</span><span></span>`;
      knop.lastChild.textContent = v.antwoorden[index].tekst;
      knop.addEventListener("click", () => kies(index, knop));
      lijst.appendChild(knop);
    });
  }

  function kies(index, knop) {
    keuzes[huidige] = index;
    for (const b of document.querySelectorAll(".antwoord")) {
      b.classList.remove("gekozen");
      b.disabled = true;
    }
    knop.classList.add("gekozen");
    setTimeout(() => {
      if (huidige < VRAGEN.length - 1) {
        huidige++;
        toonVraag();
      } else {
        toonUitslag();
      }
    }, 300);
  }

  function terug() {
    if (huidige > 0) {
      huidige--;
      toonVraag();
    }
  }

  function gedeeldeTekst(r) {
    if (!r.gedeeld.length) {
      return "";
    }
    return "Jullie delen: " + r.gedeeld.map(id => KENMERKEN[id].naam.toLowerCase()).join(" en ");
  }

  function toonUitslag() {
    const { ranking, kenmerkScore, topKenmerken } = berekenUitslag(keuzes);
    const top = ranking.slice(0, 3);
    const volgorde = [top[1], top[0], top[2]]; // podium: 2 - 1 - 3

    const podium = volgorde.map(r => {
      const plek = ranking.indexOf(r) + 1;
      return `
        <button class="plek ${plek === 1 ? "eerste" : ""}" data-id="${r.god.id}">
          <img src="${r.god.afbeelding}" alt="${r.god.naam}">
          <div class="info">
            <div class="nr">${["", "I", "II", "III"][plek]}</div>
            <div class="naam">${r.god.naam}</div>
            <div class="pct blok"><strong>${r.match}% match</strong></div>
            <div class="deelt">${gedeeldeTekst(r)}</div>
          </div>
        </button>`;
    }).join("");

    const overige = ranking.slice(3).map((r, i) => `
      <li>
        <span class="nr">${i + 4}.</span>
        <span><a href="#" class="wie" data-id="${r.god.id}">${r.god.naam}</a></span>
        <span class="pct"><span class="balk"><span style="width:${r.match}%"></span></span> ${r.match}%</span>
      </li>`).join("");

    const jouwKenmerken = Object.keys(KENMERKEN)
      .sort((a, b) => kenmerkScore[b] - kenmerkScore[a])
      .map(id => `
        <div class="kenmerk-rij">
          <div class="boven"><span>${KENMERKEN[id].icoon} ${KENMERKEN[id].naam}</span><span>${Math.round(kenmerkScore[id] * 100)}%</span></div>
          <div class="balk"><span style="width:${kenmerkScore[id] * 100}%"></span></div>
        </div>`).join("");

    const winnaar = top[0].god.naam;
    schermen.uitslag.innerHTML = `
      <div class="resultaat-kop">
        <h2>Het orakel heeft gesproken${naam ? ", " + escape(naam) : ""}!</h2>
        <p>Deze goden lijken het meest op jou. Klik op een god om meer te lezen.</p>
      </div>
      <div class="podium">${podium}</div>

      <div class="top-kenmerken">
        <h3>Jouw sterkste kenmerken</h3>
        ${topKenmerken.map(kenmerkLabel).join("")}
      </div>

      <h3>De rest van de goden</h3>
      <ol class="overige">${overige}</ol>

      <div class="pct blok kenmerkscores" style="margin-top:2rem">
        <h3>Kenmerkscores (alleen docent)</h3>
        ${jouwKenmerken}
      </div>

      <div class="presentatie">
        <h3>Op naar je presentatie!</h3>
        <p>Je mag zelf kiezen welke god je wordt. Dat hoeft niet <strong>${winnaar}</strong> te zijn! Gebruik deze zinnen om je keuze uit te leggen:</p>
        <ul>
          <li>Ik kies <em>…</em>, omdat ik net als hij/zij <em>…</em> ben.</li>
          <li>Een voorbeeld uit mijn eigen leven is: <em>…</em></li>
          <li>Het symbool van mijn god dat bij mij past is <em>…</em>, want <em>…</em></li>
          <li>Waar ik <strong>niet</strong> op mijn god lijk, is <em>…</em></li>
          <li>De Romeinen noemden mijn god <em>…</em>. Dat woord kennen we nog van <em>…</em></li>
        </ul>
      </div>

      <div class="resultaat-knoppen">
        <button class="knop" id="print">🖨️ Print mijn uitslag</button>
        <button class="knop licht" id="opnieuw">Opnieuw</button>
        <a class="knop licht" href="goden.html">Bekijk alle goden</a>
      </div>`;

    for (const el of schermen.uitslag.querySelectorAll("[data-id]")) {
      el.addEventListener("click", e => {
        e.preventDefault();
        toonDetail(el.dataset.id);
      });
    }
    document.getElementById("print").addEventListener("click", () => window.print());
    document.getElementById("opnieuw").addEventListener("click", () => toon("start"));
    toon("uitslag");
  }

  function escape(tekst) {
    const div = document.createElement("div");
    div.textContent = tekst;
    return div.innerHTML;
  }

  document.getElementById("start").addEventListener("click", start);
  document.getElementById("naam").addEventListener("keydown", e => {
    if (e.key === "Enter") {
      start();
    }
  });
  document.getElementById("terug").addEventListener("click", terug);
})();
