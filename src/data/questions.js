const QUESTIONS = [
  {
    id: 1,
    question: 'Welche Reaktionen sind typisch, wenn Menschen einen Misserfolg oder eine Niederlage erleben?',
    options: [
      'HTTP ist zustandslos und nutzt TCP als Transport.',
      'HTTP verschlüsselt Daten standardmäßig.',
      'HTTP benötigt immer eine WebSocket-Verbindung.',
      'HTTP ist ein Dateisystem-Protokoll.'
    ],
    correctIndices: [0],
    explanation:
      'HTTP ist ein zustandsloses Protokoll, das üblicherweise über TCP läuft.'
  },
  {
    id: 2,
    question: 'Was macht der React-Hook useState?',
    options: [
      'Er verwaltet lokalen Komponenten-State.',
      'Er lädt Daten aus einer API.',
      'Er rendert eine Komponente asynchron.',
      'Er erstellt globale CSS-Variablen.'
    ],
    correctIndices: [0],
    explanation:
      'useState speichert lokalen State und liefert eine Setter-Funktion.'
  },
  {
    id: 3,
    question: 'Welche Aussage zu CSS Flexbox stimmt?',
    options: [
      'Flexbox richtet Elemente entlang einer Haupt- und Querachse aus.',
      'Flexbox funktioniert nur für Tabellen.',
      'Flexbox ersetzt JavaScript-Layout komplett.',
      'Flexbox benötigt immer Grid als Parent.'
    ],
    correctIndices: [0],
    explanation:
      'Flexbox ist ideal für eindimensionale Layouts mit Haupt- und Querachse.'
  },
  {
    id: 4,
    question: 'Was ist der Zweck von Git?',
    options: [
      'Versionsverwaltung von Code und Dateien.',
      'Datenbankabfragen ausführen.',
      'Bilder komprimieren.',
      'Unit-Tests automatisch schreiben.'
    ],
    correctIndices: [0],
    explanation:
      'Git speichert Änderungen an Dateien und ermöglicht Zusammenarbeit.'
  },
  {
    id: 5,
    question: 'Wofür steht JSON?',
    options: [
      'JavaScript Object Notation',
      'Java Syntax Oriented Network',
      'Just Simple Object Names',
      'Joined Script Object Network'
    ],
    correctIndices: [0],
    explanation:
      'JSON ist ein textbasiertes Datenformat für strukturierte Daten.'
  },
  {
    id: 6,
    question: 'Welche Aussagen über HTML sind korrekt?',
    options: [
      'HTML strukturiert Inhalte auf Webseiten.',
      'HTML steht für HyperText Markup Language.',
      'HTML definiert ausschließlich das Styling einer Seite.',
      'HTML verwendet Tags wie <section> und <article>.',
      'HTML ist eine Programmiersprache.'
    ],
    correctIndices: [0, 1, 3],
    explanation:
      'HTML beschreibt Struktur und Semantik, nutzt Markup-Tags und steht für HyperText Markup Language.'
  }
]

export default QUESTIONS
