// Berekent de uitslag van de quiz.
// keuzes: per vraag de index van het gekozen antwoord in VRAGEN (of null).
function berekenUitslag(keuzes) {
  const gekozen = {};
  const mogelijk = {};
  for (const id of Object.keys(KENMERKEN)) {
    gekozen[id] = 0;
    mogelijk[id] = 0;
  }

  VRAGEN.forEach((v, i) => {
    v.antwoorden.forEach((a, j) => {
      for (const k of a.kenmerken) {
        mogelijk[k]++;
        if (keuzes[i] === j) {
          gekozen[k]++;
        }
      }
    });
  });

  // Score per kenmerk: hoe vaak gekozen t.o.v. hoe vaak het te kiezen was (0..1)
  const kenmerkScore = {};
  for (const id of Object.keys(KENMERKEN)) {
    kenmerkScore[id] = mogelijk[id] ? gekozen[id] / mogelijk[id] : 0;
  }

  const ranking = GODEN.map(god => {
    let som = 0;
    let gewicht = 0;
    for (const k of god.kenmerken) {
      som += kenmerkScore[k.id] * k.pct;
      gewicht += k.pct;
    }
    const gedeeld = god.kenmerken
      .filter(k => kenmerkScore[k.id] > 0)
      .sort((a, b) => kenmerkScore[b.id] * b.pct - kenmerkScore[a.id] * a.pct)
      .map(k => k.id);
    return { god, match: Math.round((som / gewicht) * 100), ruw: som / gewicht, gedeeld };
  }).sort((a, b) => b.ruw - a.ruw);

  const topKenmerken = Object.keys(kenmerkScore)
    .filter(id => kenmerkScore[id] > 0)
    .sort((a, b) => kenmerkScore[b] - kenmerkScore[a] || gekozen[b] - gekozen[a])
    .slice(0, 3);

  return { ranking, kenmerkScore, topKenmerken };
}
