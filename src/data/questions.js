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
  { id: 8,
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
  { id: 9,
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
  }
]

export default QUESTIONS
