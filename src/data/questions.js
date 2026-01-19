const QUESTIONS = [
  {
    id: 1,
    question: 'Welche Aussage über HTTP ist korrekt?',
    options: [
      'HTTP ist zustandslos und nutzt TCP als Transport.',
      'HTTP verschlüsselt Daten standardmäßig.',
      'HTTP benötigt immer eine WebSocket-Verbindung.',
      'HTTP ist ein Dateisystem-Protokoll.'
    ],
    correctIndex: 0,
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
    correctIndex: 0,
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
    correctIndex: 0,
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
    correctIndex: 0,
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
    correctIndex: 0,
    explanation:
      'JSON ist ein textbasiertes Datenformat für strukturierte Daten.'
  }
]

export default QUESTIONS
