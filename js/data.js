// =====================================================================
//  Alle inhoud van de les staat in dit bestand.
//  Aanpassen? Wijzig gewoon de teksten of percentages hieronder.
// =====================================================================

// Code om de docentmodus (percentages zichtbaar) aan te zetten.
const DOCENT_CODE = "olympos";

// ---------------------------------------------------------------------
//  KENMERKEN
// ---------------------------------------------------------------------
const KENMERKEN = {
  leider:     { naam: "Leiderschap",          icoon: "👑", uitleg: "Je neemt graag de leiding en anderen luisteren naar je." },
  slim:       { naam: "Slim & nieuwsgierig",  icoon: "🦉", uitleg: "Je wilt alles weten en bedenkt slimme oplossingen." },
  creatief:   { naam: "Creatief",             icoon: "🎨", uitleg: "Je houdt van tekenen, muziek, verhalen of iets nieuws verzinnen." },
  sportief:   { naam: "Sportief",             icoon: "🏃", uitleg: "Je beweegt graag en bent snel en fit." },
  natuur:     { naam: "Natuur & dieren",      icoon: "🌿", uitleg: "Je bent graag buiten en houdt van dieren en planten." },
  moedig:     { naam: "Moedig",               icoon: "🛡️", uitleg: "Je durft veel en komt op voor jezelf en anderen." },
  feest:      { naam: "Feest & gezelligheid", icoon: "🎉", uitleg: "Waar jij bent is het gezellig. Je houdt van samen lol maken." },
  zorgzaam:   { naam: "Zorgzaam",             icoon: "🤲", uitleg: "Je zorgt goed voor anderen en zij voelen zich veilig bij jou." },
  liefde:     { naam: "Vriendschap & liefde", icoon: "❤️", uitleg: "Vrienden zijn heel belangrijk voor je en je bent lief voor anderen." },
  stijl:      { naam: "Stijl & schoonheid",   icoon: "✨", uitleg: "Je let op hoe dingen eruitzien en hebt je eigen stijl." },
  handig:     { naam: "Handig & bouwen",      icoon: "🔨", uitleg: "Je kunt goed dingen maken, bouwen of repareren." },
  grappig:    { naam: "Grappig & ondeugend",  icoon: "😜", uitleg: "Je maakt mensen aan het lachen en haalt graag een geintje uit." },
  rustig:     { naam: "Rustig & mysterieus",  icoon: "🌙", uitleg: "Je bent graag even op jezelf en niet iedereen weet wat je denkt." },
  doorzetter: { naam: "Doorzetter",           icoon: "🏆", uitleg: "Je geeft nooit op en wilt graag winnen." },
  trouw:      { naam: "Trouw & eerlijk",      icoon: "🤝", uitleg: "Je bent eerlijk en vrienden kunnen altijd op je rekenen." },
  avontuur:   { naam: "Avontuurlijk",         icoon: "🧭", uitleg: "Je houdt van ontdekken, reizen en spanning." },
};

// ---------------------------------------------------------------------
//  GODEN  (kenmerken: 2 of 3 per god, pct = hoe sterk de god dit heeft)
// ---------------------------------------------------------------------
const GODEN = [
  {
    id: "zeus", naam: "Zeus", grieks: "Ζεύς", romeins: "Jupiter", olympier: true,
    rol: "Koning van de goden, god van de hemel en de bliksem",
    symbolen: ["bliksemschicht", "adelaar", "eik", "scepter"],
    beschrijving: "Zeus is de baas van de Olympus. Vanaf de hoogste berg van Griekenland houdt hij alles in de gaten. Als iemand zich niet aan de regels houdt, gooit hij een bliksemschicht. Hij wil graag dat het eerlijk gaat, maar hij is ook gewend dat iedereen naar hem luistert.",
    weetje: "De planeet Jupiter, de grootste van ons zonnestelsel, is naar de Romeinse naam van Zeus genoemd. En de Olympische Spelen werden vroeger ter ere van Zeus gehouden!",
    kenmerken: [{ id: "leider", pct: 95 }, { id: "trouw", pct: 60 }, { id: "moedig", pct: 55 }],
    afbeelding: "img/zeus.jpg",
    bron: { omschrijving: "Zeus van Otricoli, Vaticaanse Musea", maker: "onbekend", licentie: "Publiek domein", url: "https://commons.wikimedia.org/wiki/File:Zeus_Otricoli_Pio-Clementino_Inv257.jpg" },
  },
  {
    id: "hera", naam: "Hera", grieks: "Ἥρα", romeins: "Juno", olympier: true,
    rol: "Koningin van de goden, godin van het huwelijk en het gezin",
    symbolen: ["pauw", "kroon", "granaatappel"],
    beschrijving: "Hera is de vrouw van Zeus en de koningin van de Olympus. Ze beschermt families en vindt trouw heel belangrijk. Als iemand oneerlijk is, kan ze flink boos worden. Ze is sterk, trots en weet precies wat ze wil.",
    weetje: "De maand juni is genoemd naar Juno, de Romeinse naam van Hera. De ogen op de veren van de pauw zou Hera er zelf op hebben gezet.",
    kenmerken: [{ id: "trouw", pct: 90 }, { id: "leider", pct: 70 }, { id: "stijl", pct: 50 }],
    afbeelding: "img/hera.jpg",
    bron: { omschrijving: "Hera Barberini, Vaticaanse Musea", maker: "onbekend", licentie: "Publiek domein", url: "https://commons.wikimedia.org/wiki/File:Hera_Barberini_Pio-Clementino_Inv254.jpg" },
  },
  {
    id: "poseidon", naam: "Poseidon", grieks: "Ποσειδῶν", romeins: "Neptunus", olympier: true,
    rol: "God van de zee, aardbevingen en paarden",
    symbolen: ["drietand", "paard", "dolfijn"],
    beschrijving: "Poseidon is de broer van Zeus en heerst over alle zeeën. Met zijn drietand kan hij golven en stormen maken, of juist de zee kalm maken. Zeelieden vroegen hem om een veilige reis. Hij is wild en avontuurlijk, net als de zee zelf.",
    weetje: "Poseidon was boos op de held Odysseus en liet hem daarom tien jaar lang over de zee dwalen. De Romeinen noemden hem Neptunus, en zo heet ook de blauwe planeet die het verst van de zon staat.",
    kenmerken: [{ id: "avontuur", pct: 90 }, { id: "moedig", pct: 65 }, { id: "natuur", pct: 50 }],
    afbeelding: "img/poseidon.jpg",
    bron: { omschrijving: "Poseidon van het Lateraan (Romeinse kopie naar Lysippos), Vaticaanse Musea", maker: "onbekend", licentie: "Publiek domein", url: "https://commons.wikimedia.org/wiki/File:Lateran_Poseidon.jpg" },
  },
  {
    id: "athena", naam: "Athena", grieks: "Ἀθηνᾶ", romeins: "Minerva", olympier: true,
    rol: "Godin van de wijsheid, slimme oorlogsplannen en handwerk",
    symbolen: ["uil", "olijfboom", "helm", "schild"],
    beschrijving: "Athena werd volgens het verhaal volwassen en in harnas geboren uit het hoofd van Zeus. Ze is de slimste van alle goden. Ze vecht niet zomaar, maar bedenkt eerst een goed plan. Ze helpt helden met slimme tips en leerde mensen weven en olijven verbouwen.",
    weetje: "De stad Athene is naar haar genoemd. Ze won de stad door de mensen een olijfboom te geven. De uil is haar dier, daarom zeggen we nog steeds 'zo wijs als een uil'.",
    kenmerken: [{ id: "slim", pct: 95 }, { id: "moedig", pct: 70 }, { id: "handig", pct: 55 }],
    afbeelding: "img/athena.jpg",
    bron: { omschrijving: "Athena Giustiniani, Vaticaanse Musea", maker: "Daderot", licentie: "Publiek domein", url: "https://commons.wikimedia.org/wiki/File:Athena_Giustiniani_-_Braccio_Nuovo,_Museo_Chiaramonti_-_Vatican_Museums_-_DSC00910.jpg" },
  },
  {
    id: "apollo", naam: "Apollo", grieks: "Ἀπόλλων", romeins: "Apollo", olympier: true,
    rol: "God van de muziek, de kunst, het licht en de genezing",
    symbolen: ["lier", "zon", "laurierkrans", "pijl en boog"],
    beschrijving: "Apollo is de tweelingbroer van Artemis. Hij speelt prachtig op zijn lier en is de baas van de Muzen, de godinnen van kunst en wetenschap. Hij kon ook de toekomst voorspellen in zijn tempel in Delphi. Daarnaast was hij een goede boogschutter.",
    weetje: "Bij de Romeinen heette hij gewoon ook Apollo. De Amerikaanse ruimtevaartmissies naar de maan werden naar hem genoemd: Apollo 11!",
    kenmerken: [{ id: "creatief", pct: 95 }, { id: "slim", pct: 55 }, { id: "sportief", pct: 50 }],
    afbeelding: "img/apollo.jpg",
    bron: { omschrijving: "Apollo van Belvedere, Vaticaanse Musea", maker: "Marie-Lan Nguyen", licentie: "CC BY 2.5", url: "https://commons.wikimedia.org/wiki/File:Belvedere_Apollo_Pio-Clementino_Inv1015_n3.jpg" },
  },
  {
    id: "artemis", naam: "Artemis", grieks: "Ἄρτεμις", romeins: "Diana", olympier: true,
    rol: "Godin van de jacht, de wilde natuur en de maan",
    symbolen: ["pijl en boog", "hert", "maansikkel"],
    beschrijving: "Artemis is het liefst in het bos, samen met haar honden en de dieren. Ze is supersnel en mist nooit met haar pijl en boog. Ze beschermt jonge dieren en kinderen. Ze is graag vrij en laat zich door niemand vertellen wat ze moet doen.",
    weetje: "Haar tempel in Efeze was zo groot en mooi dat hij een van de zeven wereldwonderen van de oudheid werd.",
    kenmerken: [{ id: "natuur", pct: 95 }, { id: "sportief", pct: 80 }, { id: "moedig", pct: 45 }],
    afbeelding: "img/artemis.jpg",
    bron: { omschrijving: "Diana van Versailles, Louvre", maker: "Shonagon", licentie: "CC0", url: "https://commons.wikimedia.org/wiki/File:Diane_de_Versailles_-_Mus%C3%A9e_du_Louvre_AGER_Ma_589.jpg" },
  },
  {
    id: "hermes", naam: "Hermes", grieks: "Ἑρμῆς", romeins: "Mercurius", olympier: true,
    rol: "Boodschapper van de goden, god van reizigers, handel en dieven",
    symbolen: ["gevleugelde sandalen", "gevleugelde helm", "staf met slangen"],
    beschrijving: "Hermes is de snelste van alle goden dankzij zijn sandalen met vleugeltjes. Hij brengt berichten rond tussen goden en mensen. Hij is slim, grappig en een beetje ondeugend: op de dag dat hij geboren werd, stal hij al de koeien van Apollo!",
    weetje: "De planeet Mercurius draait het snelst rond de zon en is naar hem vernoemd. Het bekende modemerk Hermès gebruikt ook zijn naam.",
    kenmerken: [{ id: "grappig", pct: 95 }, { id: "avontuur", pct: 75 }, { id: "sportief", pct: 55 }],
    afbeelding: "img/hermes.jpg",
    bron: { omschrijving: "Hermes Ingenui, Vaticaanse Musea", maker: "onbekend", licentie: "Publiek domein", url: "https://commons.wikimedia.org/wiki/File:Hermes_Ingenui_Pio-Clementino_Inv544.jpg" },
  },
  {
    id: "hephaistos", naam: "Hephaistos", grieks: "Ἥφαιστος", romeins: "Vulcanus", olympier: true,
    rol: "God van het vuur, de smeden en de uitvinders",
    symbolen: ["hamer", "aambeeld", "tang", "vuur"],
    beschrijving: "Hephaistos werkt in zijn smederij diep onder een vulkaan. Hij maakte de bliksemschichten van Zeus, de helm van Hermes en zelfs bewegende robots van goud! Hij liep mank en werd daarom soms uitgelachen, maar niemand kon zulke mooie dingen maken als hij.",
    weetje: "Het woord 'vulkaan' komt van Vulcanus, zijn Romeinse naam. Op deze schaal geeft hij een nieuwe wapenrusting voor de held Achilles aan zijn moeder Thetis.",
    kenmerken: [{ id: "handig", pct: 95 }, { id: "creatief", pct: 65 }, { id: "doorzetter", pct: 50 }],
    afbeelding: "img/hephaistos.jpg",
    bron: { omschrijving: "Drinkschaal van de Foundry-schilder, Antikensammlung Berlijn", maker: "Foundry-schilder (ca. 480 v.Chr.)", licentie: "Publiek domein", url: "https://commons.wikimedia.org/wiki/File:Hephaistos_Thetis_at_Kylix_by_the_Foundry_Painter_Antikensammlung_Berlin_F2294.jpg" },
  },
  {
    id: "dionysos", naam: "Dionysos", grieks: "Διόνυσος", romeins: "Bacchus", olympier: true,
    rol: "God van de wijn, het feest en het theater",
    symbolen: ["druiven", "klimop", "beker", "theatermasker"],
    beschrijving: "Dionysos is de feestganger van de Olympus. Waar hij komt wordt gedanst, gezongen en gelachen. Hij is ook de god van het toneel: de allereerste theatervoorstellingen werden voor hem opgevoerd. Hij trok door de hele wereld met een vrolijke stoet volgelingen.",
    weetje: "Het theater van Dionysos in Athene staat er nog steeds. Daar zaten wel 17.000 mensen te kijken naar toneelstukken!",
    kenmerken: [{ id: "feest", pct: 95 }, { id: "creatief", pct: 60 }, { id: "grappig", pct: 50 }],
    afbeelding: "img/dionysos.jpg",
    bron: { omschrijving: "Dionysos, Louvre", maker: "Jastrow", licentie: "Publiek domein", url: "https://commons.wikimedia.org/wiki/File:Dionysos_Louvre_Ma87.jpg" },
  },
  {
    id: "aphrodite", naam: "Aphrodite", grieks: "Ἀφροδίτη", romeins: "Venus", olympier: true,
    rol: "Godin van de liefde en de schoonheid",
    symbolen: ["schelp", "duif", "roos", "spiegel"],
    beschrijving: "Aphrodite werd geboren uit het schuim van de zee en kwam aan land op een schelp. Ze is de mooiste van alle godinnen. Ze zorgt ervoor dat mensen verliefd worden en vrienden worden. Iedereen wil graag bij haar in de buurt zijn.",
    weetje: "Dit beroemde beeld heet de 'Venus van Milo' en staat in het Louvre in Parijs. Niemand weet wat er met haar armen is gebeurd!",
    kenmerken: [{ id: "liefde", pct: 90 }, { id: "stijl", pct: 85 }, { id: "feest", pct: 40 }],
    afbeelding: "img/aphrodite.jpg",
    bron: { omschrijving: "Venus van Milo, Louvre", maker: "onbekend", licentie: "Publiek domein", url: "https://commons.wikimedia.org/wiki/File:Venus_de_Milo_Louvre_Ma399_n4.jpg" },
  },
  {
    id: "ares", naam: "Ares", grieks: "Ἄρης", romeins: "Mars", olympier: true,
    rol: "God van de oorlog en de strijd",
    symbolen: ["speer", "helm", "schild", "hond"],
    beschrijving: "Ares is de sterkste vechter van de goden. Hij is dapper en gaat nooit een gevecht uit de weg. Hij heeft wel een kort lontje: hij wordt snel boos. Waar Athena eerst nadenkt, stormt Ares er meteen op af.",
    weetje: "De rode planeet Mars is naar zijn Romeinse naam genoemd, en ook de maand maart en de dinsdag (in het Frans: mardi).",
    kenmerken: [{ id: "moedig", pct: 95 }, { id: "sportief", pct: 60 }, { id: "avontuur", pct: 40 }],
    afbeelding: "img/ares.jpg",
    bron: { omschrijving: "Ares Ludovisi, Palazzo Altemps Rome", maker: "onbekend", licentie: "Publiek domein", url: "https://commons.wikimedia.org/wiki/File:Ares_Ludovisi_Altemps_Inv8602_n2.jpg" },
  },
  {
    id: "demeter", naam: "Demeter", grieks: "Δημήτηρ", romeins: "Ceres", olympier: true,
    rol: "Godin van de landbouw, het graan en de oogst",
    symbolen: ["graanaren", "fakkel", "hoorn des overvloeds"],
    beschrijving: "Demeter zorgt ervoor dat er op de akkers graan, fruit en groente groeit. Zonder haar zou niemand te eten hebben. Ze is heel zorgzaam, vooral voor haar dochter Persephone. Toen Persephone verdween, was Demeter zo verdrietig dat er niets meer groeide.",
    weetje: "Het Engelse woord 'cereal' (ontbijtgranen) komt van Ceres, haar Romeinse naam. Je eet dus elke ochtend een beetje Demeter!",
    kenmerken: [{ id: "zorgzaam", pct: 85 }, { id: "natuur", pct: 80 }, { id: "trouw", pct: 40 }],
    afbeelding: "img/demeter.jpg",
    bron: { omschrijving: "Demeter, Palazzo Altemps Rome", maker: "onbekend", licentie: "Publiek domein", url: "https://commons.wikimedia.org/wiki/File:Demeter_Altemps_Inv8596.jpg" },
  },
  {
    id: "hades", naam: "Hades", grieks: "Ἅιδης", romeins: "Pluto", olympier: false,
    rol: "God van de onderwereld en de rijkdommen onder de grond",
    symbolen: ["Kerberos (driekoppige hond)", "helm van onzichtbaarheid", "staf"],
    beschrijving: "Hades is de broer van Zeus en Poseidon. Hij woont niet op de Olympus, maar diep onder de grond in de onderwereld. Hij is rustig, streng en eerlijk: iedereen wordt bij hem precies hetzelfde behandeld. Zijn waakhond Kerberos heeft drie koppen!",
    weetje: "Hades had een helm die hem onzichtbaar maakte. Het (dwerg)planeetje Pluto is naar zijn Romeinse naam genoemd, en de stripfiguur Pluto ook.",
    kenmerken: [{ id: "rustig", pct: 95 }, { id: "trouw", pct: 60 }, { id: "leider", pct: 45 }],
    afbeelding: "img/hades.jpg",
    bron: { omschrijving: "Hades (als Serapis) met Kerberos, Archeologisch Museum Heraklion", maker: "Carole Raddato", licentie: "CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:Detail_of_Pluto-Serapis,_Statue_group_of_Persephone_(as_Isis)_and_Pluto_(as_Serapis),_from_the_Sanctuary_of_the_Egyptian_Gods_at_Gortyna,_mid-2nd_century_AD,_Heraklion_Archaeological_Museum_(30305313721).jpg" },
  },
  {
    id: "hestia", naam: "Hestia", grieks: "Ἑστία", romeins: "Vesta", olympier: false,
    rol: "Godin van het haardvuur en het thuis",
    symbolen: ["haardvuur", "vlam", "sluier"],
    beschrijving: "Hestia is de oudste zus van Zeus. Ze bewaakt het vuur in de haard, de plek waar het hele gezin samenkomt om warm te blijven en te eten. Ze houdt niet van ruzie en gaf zelfs haar plekje op de Olympus op om de vrede te bewaren. Bij haar voelt iedereen zich thuis.",
    weetje: "In Rome hielden priesteressen, de Vestaalse maagden, dag en nacht het vuur van Vesta brandend. Het mocht nooit uitgaan!",
    kenmerken: [{ id: "zorgzaam", pct: 95 }, { id: "rustig", pct: 65 }, { id: "feest", pct: 35 }],
    afbeelding: "img/hestia.jpg",
    bron: { omschrijving: "Hestia Giustiniani, Collectie Torlonia", maker: "Marie-Lan Taÿ Pamart", licentie: "Publiek domein", url: "https://commons.wikimedia.org/wiki/File:Hestia_Giustiniani_Torlonia_Collection_MT490.jpg" },
  },
  {
    id: "persephone", naam: "Persephone", grieks: "Περσεφόνη", romeins: "Proserpina", olympier: false,
    rol: "Godin van de lente en koningin van de onderwereld",
    symbolen: ["granaatappel", "bloemen", "fakkel"],
    beschrijving: "Persephone is de dochter van Demeter. Ze heeft twee kanten: een deel van het jaar is ze bij haar moeder op aarde en laat ze alles bloeien, de rest van het jaar is ze koningin van de onderwereld naast Hades. Ze is vrolijk én mysterieus tegelijk.",
    weetje: "Volgens de Grieken is dit de reden dat er seizoenen zijn: als Persephone in de onderwereld is, is Demeter verdrietig en wordt het winter. Komt ze terug, dan wordt het lente!",
    kenmerken: [{ id: "natuur", pct: 75 }, { id: "rustig", pct: 65 }, { id: "stijl", pct: 45 }],
    afbeelding: "img/persephone.jpg",
    bron: { omschrijving: "Persephone (als Isis), Archeologisch Museum Heraklion", maker: "Jebulon", licentie: "CC0", url: "https://commons.wikimedia.org/wiki/File:Isis_Persephone_archmus_Heraklion.jpg" },
  },
  {
    id: "nike", naam: "Nike", grieks: "Νίκη", romeins: "Victoria", olympier: false,
    rol: "Godin van de overwinning",
    symbolen: ["vleugels", "lauwerkrans", "palmtak"],
    beschrijving: "Nike is een godin met grote vleugels. Ze vliegt over slagvelden en sportwedstrijden en brengt de overwinning naar wie het verdient. Ze geeft nooit op en is supersnel. Winnaars kregen van haar een krans van lauriertakken.",
    weetje: "Het sportmerk Nike is naar haar genoemd, en het 'swoosh'-logo lijkt op haar vleugel. Dit beeld, de Nike van Samothrace, staat bovenaan een grote trap in het Louvre.",
    kenmerken: [{ id: "doorzetter", pct: 95 }, { id: "sportief", pct: 80 }, { id: "moedig", pct: 40 }],
    afbeelding: "img/nike.jpg",
    bron: { omschrijving: "Nike van Samothrace, Louvre", maker: "Shonagon", licentie: "CC0", url: "https://commons.wikimedia.org/wiki/File:Victoire_de_Samothrace_-_Musee_du_Louvre_-_20190812.jpg" },
  },
];

// ---------------------------------------------------------------------
//  QUIZVRAGEN  (4 antwoorden, elk gekoppeld aan 1 of 2 kenmerken)
// ---------------------------------------------------------------------
const VRAGEN = [
  {
    vraag: "Het is zaterdag en je hebt niks gepland. Wat doe je?",
    antwoorden: [
      { tekst: "Naar buiten: het bos in, fietsen of de hond uitlaten.", kenmerken: ["natuur", "sportief"] },
      { tekst: "Afspreken met vrienden en er een gezellige dag van maken.", kenmerken: ["feest", "liefde"] },
      { tekst: "Lekker een boek lezen of iets opzoeken wat ik interessant vind.", kenmerken: ["slim", "rustig"] },
      { tekst: "Iets maken: knutselen, bouwen of tekenen.", kenmerken: ["handig", "creatief"] },
    ],
  },
  {
    vraag: "In een groepsopdracht ben jij meestal degene die…",
    antwoorden: [
      { tekst: "…de taken verdeelt en zegt wat we gaan doen.", kenmerken: ["leider"] },
      { tekst: "…met het slimste idee komt.", kenmerken: ["slim"] },
      { tekst: "…ervoor zorgt dat iedereen mee mag doen.", kenmerken: ["zorgzaam", "liefde"] },
      { tekst: "…de grapjes maakt, zodat het gezellig blijft.", kenmerken: ["grappig", "feest"] },
    ],
  },
  {
    vraag: "Welk spel kies je het liefst?",
    antwoorden: [
      { tekst: "Een sportgame, of nog liever: echt buiten voetballen.", kenmerken: ["sportief", "doorzetter"] },
      { tekst: "Minecraft: bouwen wat ik zelf bedenk.", kenmerken: ["handig", "creatief"] },
      { tekst: "Een spannend avonturenspel met een grote wereld om te ontdekken.", kenmerken: ["avontuur", "moedig"] },
      { tekst: "Een puzzel- of denkspel.", kenmerken: ["slim", "rustig"] },
    ],
  },
  {
    vraag: "Iemand in de klas wordt gepest. Wat doe jij?",
    antwoorden: [
      { tekst: "Ik ga er meteen tussen staan.", kenmerken: ["moedig"] },
      { tekst: "Ik ga naar degene toe die gepest wordt en troost hem of haar.", kenmerken: ["zorgzaam"] },
      { tekst: "Ik vertel eerlijk aan de juf of meester wat er gebeurt.", kenmerken: ["trouw"] },
      { tekst: "Ik trommel een paar klasgenoten op en we lossen het samen op.", kenmerken: ["leider"] },
    ],
  },
  {
    vraag: "Hoe ziet jouw kamer eruit?",
    antwoorden: [
      { tekst: "Netjes en mooi ingericht, alles past bij elkaar.", kenmerken: ["stijl"] },
      { tekst: "Vol met tekeningen, posters, muziek en zelfgemaakte dingen.", kenmerken: ["creatief"] },
      { tekst: "Rommelig! Ik ben toch bijna nooit thuis.", kenmerken: ["avontuur", "grappig"] },
      { tekst: "Een rustig plekje waar ik me lekker kan terugtrekken.", kenmerken: ["rustig"] },
    ],
  },
  {
    vraag: "Je verliest een wedstrijd. Hoe reageer je?",
    antwoorden: [
      { tekst: "Ik ga extra trainen. Volgende keer win ik!", kenmerken: ["doorzetter", "sportief"] },
      { tekst: "Ik ben even flink boos, maar dat gaat snel weer over.", kenmerken: ["moedig"] },
      { tekst: "Ik feliciteer de winnaar. Eerlijk is eerlijk.", kenmerken: ["trouw"] },
      { tekst: "Ik maak er een grapje over.", kenmerken: ["grappig"] },
    ],
  },
  {
    vraag: "Welke superkracht zou je willen hebben?",
    antwoorden: [
      { tekst: "Vliegen of supersnel rennen.", kenmerken: ["avontuur", "sportief"] },
      { tekst: "Gedachten lezen.", kenmerken: ["slim", "rustig"] },
      { tekst: "Met dieren praten.", kenmerken: ["natuur"] },
      { tekst: "Iedereen in één keer blij maken.", kenmerken: ["liefde", "zorgzaam"] },
    ],
  },
  {
    vraag: "Je mag het eindfeest van groep 8 organiseren. Wat doe jij?",
    antwoorden: [
      { tekst: "Ik neem de leiding en maak de planning.", kenmerken: ["leider"] },
      { tekst: "Ik regel de muziek en het optreden.", kenmerken: ["creatief", "feest"] },
      { tekst: "Ik bouw het decor en de versiering.", kenmerken: ["handig"] },
      { tekst: "Ik zorg dat alles er prachtig uitziet, en ik kies een mooie outfit.", kenmerken: ["stijl"] },
    ],
  },
  {
    vraag: "Wat vinden je vrienden het leukst aan jou?",
    antwoorden: [
      { tekst: "Dat ik eerlijk ben en dat ze altijd op me kunnen rekenen.", kenmerken: ["trouw"] },
      { tekst: "Dat ik grappig ben en de gekste dingen verzin.", kenmerken: ["grappig"] },
      { tekst: "Dat ik lief ben en goed kan luisteren.", kenmerken: ["zorgzaam", "liefde"] },
      { tekst: "Dat ik alles durf.", kenmerken: ["moedig", "avontuur"] },
    ],
  },
  {
    vraag: "Welke vakantie kies je?",
    antwoorden: [
      { tekst: "Kamperen in de natuur, met een kampvuur.", kenmerken: ["natuur"] },
      { tekst: "Een rondreis door een land waar ik nog nooit ben geweest.", kenmerken: ["avontuur"] },
      { tekst: "Een stad met musea en oude gebouwen.", kenmerken: ["slim", "creatief"] },
      { tekst: "Een vakantiepark met zwembad, waar ik veel nieuwe vrienden maak.", kenmerken: ["feest", "liefde"] },
    ],
  },
  {
    vraag: "Op YouTube of TikTok kijk je vooral naar…",
    antwoorden: [
      { tekst: "Sport- en trainingsvideo's.", kenmerken: ["sportief", "doorzetter"] },
      { tekst: "Kleding, sneakers of make-up.", kenmerken: ["stijl"] },
      { tekst: "Grappige filmpjes en pranks.", kenmerken: ["grappig"] },
      { tekst: "Filmpjes over dieren en de natuur.", kenmerken: ["natuur"] },
    ],
  },
  {
    vraag: "Volgende week heb je een moeilijke toets. Wat doe je?",
    antwoorden: [
      { tekst: "Ik maak een planning en leer elke dag een stukje.", kenmerken: ["doorzetter", "slim"] },
      { tekst: "Ik leer samen met een vriend of vriendin.", kenmerken: ["liefde"] },
      { tekst: "Ik zoek een stil plekje en ga in mijn eentje aan de slag.", kenmerken: ["rustig"] },
      { tekst: "Ik maak er een kleurrijke samenvatting of mindmap van.", kenmerken: ["creatief"] },
    ],
  },
  {
    vraag: "Waarmee help je thuis het liefst?",
    antwoorden: [
      { tekst: "Koken of bakken voor het hele gezin.", kenmerken: ["zorgzaam", "feest"] },
      { tekst: "Iets repareren of in elkaar zetten.", kenmerken: ["handig"] },
      { tekst: "Zorgen voor mijn huisdier of mijn broertje of zusje.", kenmerken: ["zorgzaam", "natuur"] },
      { tekst: "Beslissen waar we heen gaan of wat we gaan eten.", kenmerken: ["leider"] },
    ],
  },
  {
    vraag: "Welk woord past het best bij jou?",
    antwoorden: [
      { tekst: "Dapper", kenmerken: ["moedig"] },
      { tekst: "Betrouwbaar", kenmerken: ["trouw"] },
      { tekst: "Mysterieus", kenmerken: ["rustig"] },
      { tekst: "Stralend", kenmerken: ["stijl", "liefde"] },
    ],
  },
  {
    vraag: "Wat lijkt je later een leuk beroep?",
    antwoorden: [
      { tekst: "Baas van een eigen bedrijf, of burgemeester.", kenmerken: ["leider", "doorzetter"] },
      { tekst: "Uitvinder of ingenieur.", kenmerken: ["handig", "slim"] },
      { tekst: "Ontdekkingsreiziger, piloot of kapitein.", kenmerken: ["avontuur", "moedig"] },
      { tekst: "Artiest, muzikant of ontwerper.", kenmerken: ["creatief", "stijl"] },
    ],
  },
];
