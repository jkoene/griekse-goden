// Overzichtspagina van alle goden.
(function () {
  function maakKaart(god) {
    const kaart = document.createElement("button");
    kaart.className = "kaart";
    kaart.dataset.id = god.id;
    kaart.innerHTML = `
      <img src="${god.afbeelding}" alt="${god.naam}" loading="lazy">
      <div class="naam">${god.naam}</div>
      <div class="grieks">${god.grieks} · ${god.romeins}</div>
      <div class="iconen" title="${god.kenmerken.map(k => KENMERKEN[k.id].naam).join(", ")}">
        ${god.kenmerken.map(k => KENMERKEN[k.id].icoon).join("")}
      </div>`;
    kaart.addEventListener("click", () => toonDetail(god.id));
    return kaart;
  }

  const olympiers = document.getElementById("olympiers");
  const anderen = document.getElementById("anderen");
  for (const god of GODEN) {
    (god.olympier ? olympiers : anderen).appendChild(maakKaart(god));
  }

  // Filter op kenmerk
  const filter = document.getElementById("filter");
  let actief = null;
  for (const [id, k] of Object.entries(KENMERKEN)) {
    const knop = document.createElement("button");
    knop.className = "label";
    knop.setAttribute("aria-pressed", "false");
    knop.innerHTML = `${k.icoon} ${k.naam}`;
    knop.title = k.uitleg;
    knop.addEventListener("click", () => {
      actief = actief === id ? null : id;
      for (const b of filter.querySelectorAll("button")) {
        b.setAttribute("aria-pressed", "false");
      }
      if (actief) {
        knop.setAttribute("aria-pressed", "true");
      }
      for (const kaart of document.querySelectorAll(".kaart")) {
        const god = GODEN.find(g => g.id === kaart.dataset.id);
        const past = !actief || god.kenmerken.some(km => km.id === actief);
        kaart.classList.toggle("verborgen", !past);
      }
    });
    filter.appendChild(knop);
  }
})();
