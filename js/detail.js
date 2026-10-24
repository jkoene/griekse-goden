// Detailvenster van een god (gebruikt op de godenpagina en bij de quizuitslag).
function kenmerkLabel(id) {
  const k = KENMERKEN[id];
  return `<span class="label">${k.icoon} ${k.naam}</span>`;
}

function toonDetail(godId) {
  const god = GODEN.find(g => g.id === godId);
  let venster = document.getElementById("detail");
  if (!venster) {
    venster = document.createElement("dialog");
    venster.id = "detail";
    venster.className = "detail";
    document.body.appendChild(venster);
    // klik op de donkere achtergrond sluit het venster
    venster.addEventListener("click", e => {
      if (e.target === venster) {
        venster.close();
      }
    });
  }

  const kenmerken = god.kenmerken.map(k => {
    const info = KENMERKEN[k.id];
    return `
      <div class="kenmerk-rij">
        <div class="boven"><span>${info.icoon} <strong>${info.naam}</strong></span><span class="pct">${k.pct}%</span></div>
        <div class="balk pct blok"><span style="width:${k.pct}%"></span></div>
        <div class="uitleg">${info.uitleg}</div>
      </div>`;
  }).join("");

  venster.innerHTML = `
    <button class="sluit" aria-label="Sluiten">×</button>
    <div class="detail-inhoud">
      <div class="detail-foto">
        <img src="${god.afbeelding}" alt="${god.bron.omschrijving}">
        <div class="bron">${god.bron.omschrijving}. Foto: ${god.bron.maker}, ${god.bron.licentie}, via <a href="${god.bron.url}" target="_blank" rel="noopener">Wikimedia Commons</a></div>
      </div>
      <div class="detail-tekst">
        <h2>${god.naam}</h2>
        <div class="namen">${god.grieks} · bij de Romeinen: <strong>${god.romeins}</strong>${god.olympier ? "" : " · geen Olympiër"}</div>
        <div class="rol">${god.rol}</div>
        <p>${god.beschrijving}</p>
        <h3>Herken je ${god.naam} aan…</h3>
        <div>${god.symbolen.map(s => `<span class="label">${s}</span>`).join("")}</div>
        <h3>Kenmerken</h3>
        ${kenmerken}
        <h3>Wist je dat?</h3>
        <p class="weetje">${god.weetje}</p>
      </div>
    </div>`;

  venster.querySelector(".sluit").addEventListener("click", () => venster.close());
  venster.showModal();
  venster.querySelector(".detail-tekst").scrollTop = 0;
}
