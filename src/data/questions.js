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
  },
  {
    id: 22,
    topic: 'Ziele setzen und erreichen',
    question: 'Welche Aussagen zur SMART-Formel sind korrekt?',
    options: [
      'SMART-Ziele sind spezifisch, messbar, attraktiv bzw. realistisch und terminiert.',
      'Die SMART-Formel dient dazu, Ziele nach ihrer Wichtigkeit zu gewichten.',
      'Die SMART-Formel hilft dabei, Ziele klarer zu formulieren und überprüfbar zu machen.',
      'Ein Ziel kann auch dann als SMART gelten, wenn nur zwei der fünf Kriterien erfüllt sind.'
    ],
    correctIndices: [0, 2],
    explanation:
      'Die SMART-Formel steht für Spezifisch, Messbar, Attraktiv, Realistisch und Terminiert.'
  },
  {
    id: 23,
    topic: 'Ziele setzen und erreichen',
    question: 'Welche Aussagen zur Zielerreichung und Umsetzung treffen zu?',
    options: [
      'Die Zerlegung großer Ziele in kleine Teilziele kann die Motivation erhöhen.',
      'Große Ziele sollten möglichst unkonkret bleiben, um Flexibilität zu gewährleisten.',
      'Der Fokus auf konkrete Handlungen kann helfen, die Lücke zwischen Absicht und Verhalten zu schließen.',
      'Routinen spielen bei der langfristigen Zielverfolgung keine Rolle.'
    ],
    correctIndices: [0, 2],
    explanation:
      'Die Zerlegung großer Ziele in kleine Teilziele und der Fokus auf konkrete Handlungen unterstützen die Zielerreichung.'
  },
  {
    id: 24,
    topic: 'Ziele setzen und erreichen',
    question: 'Welche Aussagen zur Rolle von Routinen bei der Zielerreichung sind richtig?',
    options: [
      'Routinen reduzieren den Bedarf an bewusster Willenskraft.',
      'Routinen entstehen ausschließlich durch hohe Motivation.',
      'Wiederholtes Verhalten kann langfristig automatisiert werden.',
      'Routinen sind nur bei sehr einfachen Zielen sinnvoll.'
    ],
    correctIndices: [0, 2],
    explanation:
      'Routinen reduzieren den Bedarf an bewusster Willenskraft und wiederholtes Verhalten kann langfristig automatisiert werden.'
  },
  {
    id: 25,
    topic: 'Zeitmanagement',
    question: 'Welche Aussagen zum Thema Zeitmanagement sind korrekt?',
    options: [
      'Zeitmanagement bedeutet nicht, mehr Zeit zu haben, sondern bewusste Entscheidungen über Prioritäten zu treffen.',
      'Zeitmanagement besteht hauptsächlich darin, möglichst viele Aufgaben parallel zu erledigen.',
      'Zeitprobleme entstehen häufig durch Entscheidungsdruck und nicht durch tatsächlichen Zeitmangel.',
      'Effektives Zeitmanagement führt dazu, dass Stress vollständig vermieden werden kann.'
    ],
    correctIndices: [0, 2],
    explanation:
      'Zeitmanagement bedeutet, bewusste Entscheidungen über Prioritäten zu treffen. Zeitprobleme entstehen häufig durch Entscheidungsdruck und nicht durch tatsächlichen Zeitmangel.'
  },
  {
    id: 26,
    topic: 'Zeitmanagement',
    question: 'Welche Aussagen zum Pareto-Prinzip (80/20-Regel) treffen zu?',
    options: [
      'Ein kleiner Teil des Aufwands führt häufig zu einem großen Teil der Ergebnisse.',
      'Das Pareto-Prinzip besagt, dass alle Aufgaben gleich wichtig sind.',
      'Das Prinzip unterstützt die Fokussierung auf besonders relevante Aufgaben.',
      'Das Pareto-Prinzip fordert, alle Aufgaben mit maximaler Effizienz zu bearbeiten.'
    ],
    correctIndices: [0, 2],
    explanation:
      'Das Pareto-Prinzip besagt, dass ein kleiner Teil des Aufwands häufig zu einem großen Teil der Ergebnisse führt und unterstützt die Fokussierung auf besonders relevante Aufgaben.'
  },
  {
    id: 27,
    topic: 'Zeitmanagement',
    question: 'Welche Aussagen zum Eisenhower-Prinzip sind richtig?',
    options: [
      'Aufgaben werden nach den Kriterien „wichtig“ und „dringend“ eingeordnet.',
      'Aufgaben, die wichtig, aber nicht dringend sind, sollten geplant werden.',
      'Dringende Aufgaben sind immer automatisch auch wichtige Aufgaben.',
      'Aufgaben, die weder wichtig noch dringend sind, sollten priorisiert erledigt werden.'
    ],
    correctIndices: [0, 1],
    explanation:
      'Das Eisenhower-Prinzip ordnet Aufgaben nach Wichtigkeit und Dringlichkeit ein. Wichtige, aber nicht dringende Aufgaben sollten geplant werden.'
  },
  {
    id: 28,
    topic: '17 Ziele für Nachhaltige Entwicklung',
    question: 'Wie hoch war 2024 der Anteil an Menschen der als "Offline" zählt.',
    options: [
      '0 - 15% Der Menschen sind Offline',
      '16 - 25% Der Menschen sind Offline',
      '26 - 35% Der Menschen sind Offline',
      '45 - 60% Der Menschen sind Offline'
    ],
    correctIndices: [2],
    explanation:
      'Im Jahr 2024 sind etwa 30% der Weltbevölkerung offline und haben keinen Zugang zum Internet.'
  },
  {
    id: 29,
    topic: '17 Ziele für Nachhaltige Entwicklung',
    question: 'Welche der folgenden Energie Produktionsarten sind im Verhältnis zu den Stromgestehungskosten am günstigen (Einheit:"€Cent/kWh" )',
    options: [
      'Kernkraft',
      'Biogas',
      'Steinkohle',
      'Photovoltaikanlagen (Solaranlagen)',
    ],
    correctIndices: [3],
    explanation:
      'Photovoltaikanlagen (Solaranlagen) sind im Verhältnis zu den Stromgestehungskosten am günstigsten.'
  },
  {
    id: 30,
    topic: '17 Ziele für Nachhaltige Entwicklung',
    question: 'Welches Beispiel zeigt besonders deutlich, dass globale Partnerschaft und internationales abgestimmtes Handeln Wirkung hat im Bezug zu den Besprochenen Beispiel vom 1. Dezember 2025?',
    options: [
      'Der Klimawandel konnte durch nationale Alleingänge der USA gestoppt werden',
      'Die Ozonschicht über der Antarktis hat sich durch das Montreal Protokoll ungewöhnlich früh geschlossen',
      'Die Übersäuerung der Meere konnte durch gemeinsame Investitionen stark eingeschränkt werden.',
      'Ausschließlich durch technologische Innovation konnte der Schutz der Ozonschicht erreicht werden.'
    ],
    correctIndices: [1],
    explanation:
      'Die Ozonschicht über der Antarktis hat sich durch das Montreal Protokoll ungewöhnlich früh geschlossen, was die Wirksamkeit globaler Partnerschaften zeigt.'
  },
  {
    id: 31,
    topic: 'Ethischer und kritischer Umgang mit KI',
    question: 'Wie heißen die 3 Schlüsselkomponenten von KI?',
    options: [
      'Inputdaten',
      'Supervised Learning',
      'ML-Algorithmus',
      'Output-Entscheidung',
    ],
    correctIndices: [0, 2, 3],
    explanation:
      'Die 3 Schlüsselkomponenten von KI sind Inputdaten, ML-Algorithmus und Output-Entscheidung.'
  },
  {
    id: 32,
    topic: 'Ethischer und kritischer Umgang mit KI',
    question: 'Wozu neigen Menschen, wenn diese mit KI, Computern & Robotern interagieren?',
    options: [
      'Kuscheln',
      'Spielen',
      'Vermenschlichung',
      'Liebesbeziehung',
    ],
    correctIndices: [2],
    explanation:
      'Menschen neigen dazu, KI, Computer und Roboter zu vermenschlichen, indem sie ihnen menschliche Eigenschaften zuschreiben.'
  },
  {
    id: 33,
    topic: 'Ethischer und kritischer Umgang mit KI',
    question: 'Von wem müssen alles die Interessen gewahrt werden, um ein Gleichgewicht bei der Erschaffung einer KI zu ermöglichen?',
    options: [
      'Regierung',
      'Unternehmen',
      'Die einzelne Person',
      'Die Gesellschaft'
    ],
    correctIndices: [1, 2, 3],
    explanation:
      'Die Interessen von Unternehmen, einzelnen Personen und der Gesellschaft müssen gewahrt werden, um ein Gleichgewicht bei der Erschaffung einer KI zu ermöglichen.'
  },
  {
    id: 34,
    topic: 'Change Management',
    question: 'Welche der folgenden Punkte sind Teil der Kübler-Ross-Change-Kurve?',
    options: [
      'Frustration',
      'Entscheidung',
      'Assimilation',
      'Experimentieren'
    ],
    correctIndices: [0, 1, 3],
    explanation:
      'Die Kübler-Ross-Change-Kurve umfasst die Phasen Frustration, Entscheidung und Experimentieren.'
  }
]

export default QUESTIONS
