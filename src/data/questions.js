const QUESTIONS = [
  {
    id: 1,
    topic: 'Umgang mit Niederlagen und Rückschritten',
    question: 'Welche Reaktionen sind typisch, wenn Menschen einen Misserfolg oder eine Niederlage erleben?',
    options: [
      'Emotionale Reaktionen wie Enttäuschung, Frustration oder Selbstzweifel',
      'Kognitive Reaktionen wie Grübeln oder die Suche nach Ursachen',
      'Körperliche Reaktionen wie Anspannung oder Erschöpfung',
      'Ausschließlich rationale und emotionsfreie Verarbeitung der Situation'
    ],
    correctIndices: [0, 1, 2],
    explanation:
      'Typische Reaktionen auf Misserfolg umfassen emotionale, kognitive und körperliche Aspekte.'
  },
  {
    id: 2,
    topic: 'Umgang mit Niederlagen und Rückschritten',
    question: 'Welche der folgenden Aussagen beschreiben konstruktive Strategien im Umgang mit Rückschlägen?',
    options: [
      'Akzeptieren der Situation und bewusstes Innehalten',
      'Neubewertung des Rückschlags als Lernchance',
      'Verdrängung negativer Gefühle, um leistungsfähig zu bleiben',
      'Persönliche Weiterentwicklung durch Reflexion und Lernen'
    ],
    correctIndices: [0, 1, 3],
    explanation:
      'Konstruktive Strategien umfassen Akzeptanz, Neubewertung und persönliche Weiterentwicklung.'
  },
  {
    id: 3,
    topic: 'Umgang mit Niederlagen und Rückschritten',
    question: 'Welche Aussagen beschreiben einen entwicklungsfördernden Umgang mit Scheitern?',
    options: [
      'Scheitern kann zur Selbstreflexion und persönlichen Weiterentwicklung beitragen.',
      'Lernen aus Fehlern fördert langfristig Resilienz und Selbstwirksamkeit.',
      'Scheitern sollte möglichst vermieden und nicht weiter reflektiert werden.',
      'Persönliche Entwicklung entsteht nur durch Erfolge, nicht durch Rückschläge'
    ],
    correctIndices: [0, 1],
    explanation:
      'Ein entwicklungsfördernder Umgang mit Scheitern beinhaltet Selbstreflexion und Lernen aus Fehlern.'
  },
  {
    id: 4,
    topic: 'Stark in der Prüfungsphase dank Achtsamkeit - Prävention, Fokus und Erholung',
    question: 'Welche Aussagen beschreiben die Entstehung und Wirkung von Prüfungsstress bei Studierenden korrekt?',
    options: [
      'Prüfungsstress aktiviert das Nervensystem und führt u. a. zu erhöhter Herzfrequenz und Anspannung.',
      'Prüfungsstress tritt ausschließlich bei mangelnder Intelligenz oder fehlender Begabung auf.',
      'Dauerhafter Prüfungsstress kann Konzentrationsprobleme und emotionale Erschöpfung begünstigen.',
      'Stressreaktionen während Prüfungen haben grundsätzlich keinen Einfluss auf die kognitive Leistungsfähigkeit.'
    ],
    correctIndices: [0, 2],
    explanation:
      'Prüfungsstress aktiviert das Nervensystem und kann bei Dauerbelastung zu Konzentrationsproblemen führen.'
  },
  {
    id: 5,
    topic: 'Stark in der Prüfungsphase dank Achtsamkeit - Prävention, Fokus und Erholung',
    question: 'Welche Aussagen zur Wirkung von Achtsamkeit vor der Prüfungsphase sind zutreffend?',
    options: [
      'Achtsamkeit ersetzt vollständig klassische Lern- und Vorbereitungsstrategien.',
      'Achtsamkeit kann helfen, stressverstärkende Gedanken frühzeitig wahrzunehmen und zu regulieren.',
      'Regelmäßige Achtsamkeitsübungen können präventiv zur Reduktion von Prüfungsangst beitragen.',
      'Achtsamkeit wirkt nur kurzfristig und zeigt keine nachhaltigen Effekte auf das Stresserleben.'
    ],
    correctIndices: [1, 2],
    explanation:
      'Achtsamkeit unterstützt die Wahrnehmung und Regulation stressverstärkender Gedanken und kann Prüfungsangst reduzieren.'
  },
  {
    id: 6,
    topic: 'Stark in der Prüfungsphase dank Achtsamkeit - Prävention, Fokus und Erholung',
    question: 'Welche Aussagen beschreiben den Nutzen von Achtsamkeit während der Prüfungssituation korrekt?',
    options: [
      'Kurze Atem- oder Aufmerksamkeitsübungen können helfen, akute Stressreaktionen zu regulieren.',
      'Achtsamkeit kann Blackouts vorbeugen, indem sie den Fokus auf den gegenwärtigen Moment lenkt.',
      'Achtsamkeit führt dazu, dass Prüfungsinhalte automatisch erinnert werden, ohne gelernt zu haben.',
      'Während einer Prüfung sollte Achtsamkeit vermieden werden, da sie die Bearbeitungszeit verlängert.'
    ],
    correctIndices: [0, 1],
    explanation:
      'Achtsamkeit kann helfen, akute Stressreaktionen zu regulieren und Blackouts vorzubeugen, indem sie den Fokus auf den gegenwärtigen Moment lenkt.'
  },
  {
    id: 7,
    topic: 'Lernen',
    question: 'Welche Aussagen zum Thema Lernen sind richtig?',
    options: [
      'Lernen ist ein Prozess, bei dem sich Wissen oder Verhalten durch Erfahrung und Übung dauerhaft verändert.',
      'Lernen bedeutet ausschließlich das kurzfristige Auswendiglernen von Informationen.',
      'Lernen ermöglicht es, Wissen später anzuwenden, z. B. in Prüfungen oder im Alltag.',
      'Lernen findet nur in der Schule oder an der Universität statt.'
    ],
    correctIndices: [0, 2],
    explanation:
      'Lernen ist ein Prozess, bei dem sich Wissen oder Verhalten durch Erfahrung und Übung dauerhaft verändert.'
  },
  { 
    id: 8,
    topic: 'Lernen',
    question: 'Welche Aussagen zum Gedächtnis treffen zu?' ,
    options: [
      'Das Gedächtnis arbeitet wie ein Netzwerk und nicht wie eine Festplatte.',
      'Informationen werden besser gespeichert, wenn Bilder und Emotionen genutzt werden.',
      'Das Gedächtnis speichert Informationen unabhängig von Struktur oder Wiederholung.',
      'Nur der sprachlich-logische Kanal ist für effektives Lernen relevant.'
    ],
    correctIndices: [0, 1],
    explanation:
      'Das Gedächtnis arbeitet wie ein Netzwerk, und Informationen werden besser gespeichert, wenn Bilder und Emotionen genutzt werden.'
  },
  { 
    id: 9,
    topic: 'Lernen',
    question: 'Welche Aussagen zu Mnemotechniken sind richtig?',
    options: [
      'Mnemotechniken unterstützen das Lernen durch Bilder, Sprache und Struktur.',
      'Die Loci-Methode ist eine visuelle Lerntechnik.',
      'Mnemotechniken sind nur für Kinder geeignet.',
      'Chunking bedeutet, Informationen möglichst unstrukturiert zu lernen.'
    ],
    correctIndices: [0, 1],
    explanation:
      'Mnemotechniken unterstützen das Lernen durch Bilder, Sprache und Struktur. Die Loci-Methode ist eine visuelle Lerntechnik.'
  },
  {
    id: 10,
    topic: 'Gesunde und unterstützende Ernährung',
    question: 'Welche Maßnahmen gehören zu achtsamen Essen?',
    options: [
      'Jeden Bissen bewusst wahrnehmen und langsam kauen.',
      'Mahlzeiten auslassen, um Kalorien zu sparen.',
      'Langsames kauen und konzentriertes Essen unterstützt die Verdauung.',
      'Cookies nach jeder Mahlzeit sind gesund.'
    ],
    correctIndices: [0, 2],
    explanation:
      'Achtsames Essen beinhaltet langsames Kauen, Essen ohne Ablenkungen und das Beachten des Hungergefühls.'
  },
  {
    id: 11,
    topic: 'Gesunde und unterstützende Ernährung',
    question: 'Welche der folgenden Ursachen kann zu einer ungesunden Ernährung führen?',
    options: [
      'Zeit- & Stressfaktoren',
      'Emotionaler Auslöser',
      'Regelmäßige Bewegung',
      'Fehlendes Wissen'
    ],
    correctIndices: [0, 1, 3],
    explanation:
      'Stress und Zeitmangel sowie übermäßiger Konsum von Fast Food und zuckerhaltigen Getränken können zu einer ungesunden Ernährung führen.'
  },
  {
    id: 12,
    topic: 'Gesunde und unterstützende Ernährung',
    question: 'Welcher Nährstoff wird besonders mit "Brain-Food" in Verbindung gebracht?',
    options: [
      'Omega-3-Fettsäuren',
      'Vitamin-D',
      'Natrium',
      'Zucker'
    ],
    correctIndices: [0],
    explanation:
      'Omega-3-Fettsäuren sind besonders wichtig für die Gehirnfunktion und werden oft als "Brain-Food" bezeichnet.'
  },
  {
    id: 13,
    topic: 'Gesunder Schlaf. Ein Überblick mit Bezug zur Informatik',
    question: 'Welche der hier genannten Begriffe sind Schlafzyklen?',
    options: [
      'Der Tiefschlaf',
      'Die Abends-Phase',
      'Die Ram-Phase-Schlaf',
      'Die Rem-Phase'
    ],
    correctIndices: [0, 3],
    explanation:
      'Der Tiefschlaf und die Rem-Phase sind wichtige Schlafzyklen für die Erholung des Körpers und Geistes.'
  },
  {
    id: 14,
    topic: 'Gesunder Schlaf. Ein Überblick mit Bezug zur Informatik',
    question: 'Welche dieser Aussagen sind falsch.',
    options: [
      'Ein Kind braucht in der Regel mehr schlaf als ein Jugendlicher.',
      'Ein Erwachsener braucht in der Regel mehr schlaf als ein Kind.',
      'Ein Jugendlicher braucht in der Regel mehr schlaf als ein Erwachsener.',
      'Alle Kinder brauchen IMMER die selbe Menge an schlaf.'
    ],
    correctIndices: [1, 3],
    explanation:
      'Ein Erwachsener braucht in der Regel weniger Schlaf als ein Kind. Die Schlafbedürfnisse variieren individuell und sind nicht immer konstant.'
  },
  {
    id: 15,
    topic: 'Gesunder Schlaf. Ein Überblick mit Bezug zur Informatik',
    question: 'Warum ist Gesunder Schlaf wichtig?',
    options: [
      'Damit es die Konzentration und Reaktionsgeschwindigkeit Verbessert',
      'Damit die Gedanken morgens wieder in der richtigen Reihenfolge sind',
      'Damit die Augen nicht vergessen, wie Blinzeln funktioniert',
      'Damit das Gehirn nicht im Hintergrund weiterläuft'
    ],
    correctIndices: [0],
    explanation:
      'Gesunder Schlaf ist wichtig, um die Konzentration, Reaktionsgeschwindigkeit und das allgemeine Wohlbefinden zu verbessern.'
  },
  {
    id: 16,
    topic: 'Informatik & Sport wie Bewegung den Code besser macht',
    question: 'Welche Effekte regelmäßiger körperlicher Aktivität auf die kognitiveLeistungsfähigkeit sind wissenschaftlich belegt?',
    options: [
      'Bewegung verbessert die Durchblutung des Gehirns und steigert Aufmerksamkeit und Konzentration.',
      'An Tagen mit mehr Bewegung ist die kognitive Leistungsfähigkeit messbar höher.',
      'Körperliche Aktivität wirkt sich nur langfristig, nicht aber kurzfristig auf kognitive Prozesse aus.',
      'Sport reduziert die Denkfähigkeit, da er mentale Ressourcen verbraucht.'
    ],
    correctIndices: [0, 1],
    explanation:
      'Regelmäßige körperliche Aktivität verbessert die Durchblutung des Gehirns und steigert Aufmerksamkeit und Konzentration. An Tagen mit mehr Bewegung ist die kognitive Leistungsfähigkeit messbar höher.'
  },
  {
    id: 17,
    topic: 'Informatik & Sport wie Bewegung den Code besser macht',
    question: 'Welche Aussagen zu physischen und mentalen Belastungen im Informatik-Alltag sind fachlich korrekt?',
    options: [
      'Beschwerden des Muskel-Skelett-Systems entstehen nicht nur durch Fehlhaltungen, sondern auch durch fehlende ausgleichende Bewegung.',
      'Mentale Belastung wirkt sich ausschließlich auf die psychische Gesundheit aus, nicht jedoch auf körperliche Symptome.',
      'Augenbeschwerden bei Bildschirmarbeit lassen sich primär auf altersbedingte Sehschwächen zurückführen.',
      'Dauerhafte kognitive Beanspruchung kann in Kombination mit Bewegungsmangel sowohl mentale als auch körperliche Beschwerden begünstigen.'
    ],
    correctIndices: [0, 3],
    explanation:
      'Beschwerden des Muskel-Skelett-Systems entstehen nicht nur durch Fehlhaltungen, sondern auch durch fehlende ausgleichende Bewegung. Dauerhafte kognitive Beanspruchung kann in Kombination mit Bewegungsmangel sowohl mentale als auch körperliche Beschwerden begünstigen.'
  },
  {
    id: 18,
    topic: 'Informatik & Sport wie Bewegung den Code besser macht',
    question: 'Welche Schlussfolgerungen lassen sich aus wissenschaftlichen Studien zum Zusammenhang von Bewegung und kognitiver Leistungsfähigkeit ziehen?',
    options: [
      'Sowohl akute als auch regelmäßige körperliche Aktivität können Aufmerksamkeit und Reaktionsgeschwindigkeit positiv beeinflussen.',
      'Positive Effekte treten ausschließlich bei sehr intensiven Trainingseinheiten auf.',
      'Verbesserungen der kognitiven Leistung stehen im Zusammenhang mit einer erhöhten Durchblutung.',
      'Bewegung wirkt nur indirekt auf kognitive Prozesse, indem sie den Schlaf verbessert, nicht jedoch unmittelbar.'
    ],
    correctIndices: [0, 2],
    explanation:
      'Sowohl akute als auch regelmäßige körperliche Aktivität können Aufmerksamkeit und Reaktionsgeschwindigkeit positiv beeinflussen. Verbesserungen der kognitiven Leistung stehen im Zusammenhang mit einer erhöhten Durchblutung.'
  },
  {
    id: 19,
    topic: 'Ethischer und kritischer Umgang mit KI',
    question: 'Welche Risiken bringt KI mit sich?',
    options: [
      'Fehleranfälligkeit',
      'Niedrige Verfügbarkeit',
      'Mangelnde Intuition',
      'Abhängigkeiten von KI-Systemen'
    ],
    correctIndices: [0, 3],
    explanation:
      'KI-Systeme können fehleranfällig sein und Abhängigkeiten schaffen, die kritisch betrachtet werden müssen.'
  },
  {
    id: 20,
    topic: 'Ethischer und kritischer Umgang mit KI',
    question: 'Welche Möglichkeiten bringt KI mit sich?',
    options: [
      'Datenanalyse & Mustererkennung',
      'Automatisierung von Routineaufgaben',
      'Das Übernehmen von wichtigen Entscheidungen',
      'Kostenreduktion'
    ],
    correctIndices: [0, 1, 3],
    explanation:
      'KI kann Daten analysieren, Routineaufgaben automatisieren und zur Kostenreduktion beitragen.'
  },
  {
    id: 21,
    topic: 'Ethischer und kritischer Umgang mit KI',
    question: 'Welche Psychologischen und soziale Auswirkungen hat KI auf den Menschen?',
    options: [
      'Vollständige Reduktion von Stress durch den Einsatz von KI',
      'Angst vor Arbeitsplatzverlust',
      'Entfremdung und Sinnverlust der praktizierten Arbeit',
      'Steigerung der Arbeitszufriedenheit'
    ],
    correctIndices: [1, 2],
    explanation:
      'Der Einsatz von KI kann Ängste vor Arbeitsplatzverlust und Gefühle der Entfremdung hervorrufen.'
  }
]

export default QUESTIONS
