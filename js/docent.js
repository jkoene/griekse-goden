// Docentmodus: toont de percentages. Standaard uit (leerlingweergave).
(function () {
  const SLEUTEL = "griekseGoden.docentmodus";

  function lees() {
    try {
      return localStorage.getItem(SLEUTEL) === "aan";
    } catch (e) {
      return false;
    }
  }

  function bewaar(aan) {
    try {
      localStorage.setItem(SLEUTEL, aan ? "aan" : "uit");
    } catch (e) {
      // geen opslag beschikbaar: alleen voor deze pagina
    }
  }

  function zet(aan) {
    document.body.classList.toggle("docent", aan);
    const knop = document.getElementById("slotje");
    if (knop) {
      knop.textContent = aan ? "🔓 Docentmodus uit" : "🔒";
      knop.title = aan ? "Percentages verbergen" : "Docentmodus";
    }
    bewaar(aan);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const param = new URLSearchParams(location.search).get("docent");
    if (param !== null) {
      zet(param === DOCENT_CODE);
    } else {
      zet(lees());
    }

    const knop = document.getElementById("slotje");
    if (knop) {
      knop.addEventListener("click", () => {
        if (document.body.classList.contains("docent")) {
          zet(false);
          return;
        }
        const code = prompt("Code voor de docentmodus:");
        if (code === null) {
          return;
        }
        if (code.trim().toLowerCase() === DOCENT_CODE) {
          zet(true);
        } else {
          alert("Die code klopt niet.");
        }
      });
    }
  });
})();
