# Goden & Jij – handleiding voor de docent

Open `index.html` door erop te dubbelklikken. Je hebt geen server of installatie nodig. Zet je de hele map op een USB-stick, Chromebook of gedeelde schijf, dan werkt alles ook zonder internet (alleen het lettertype valt dan terug op een standaard schreeflettertype).

## Pagina's
- `goden.html`: alle 16 goden. Klik op een god voor de details. Bovenaan kun je filteren op kenmerk.
- `quiz.html`: het Orakel van Delphi, met 15 vragen en daarna een ranking van alle goden.

## Docentmodus (percentages zichtbaar)
Leerlingen zien standaard alleen de kenmerken, zonder percentages.
- Klik op het slotje 🔒 rechtsonder in de voettekst en vul de code `olympos` in.
- Of open `goden.html?docent=olympos`.
- Je browser onthoudt de docentmodus. Klik op "🔓 Docentmodus uit" om hem weer uit te zetten.
- De code pas je aan bovenaan `js/data.js` (`DOCENT_CODE`).

## Inhoud aanpassen
Alle teksten, kenmerken, percentages en vragen staan in `js/data.js`.

## Zo werkt de score
1. Per kenmerk: hoe vaak de leerling het gekozen heeft ÷ hoe vaak het in de quiz te kiezen was.
2. Per god: het gewogen gemiddelde van die kenmerkscores, met de percentages van de god als gewicht.
Een god met 3 kenmerken krijgt zo geen voordeel boven een god met 2 kenmerken.
