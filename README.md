# Multiple Choice Trainer

Ein schlanker Multiple-Choice-Trainer mit React und Vite. Du kannst Fragen beantworten, Feedback erhalten und am Ende deine Punktzahl sehen.

## Features

- Moderne, responsive UI
- Fortschrittsanzeige und Punktestand
- Direktes Feedback mit Erklärung
- Neustart nach der letzten Frage

## Schnellstart

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Fragen anpassen

Die Fragen liegen in [src/data/questions.js](src/data/questions.js). Jede Frage ist ein Objekt mit folgenden Feldern:

| Feld | Typ | Beschreibung |
| --- | --- | --- |
| `id` | Zahl | Eindeutige ID der Frage |
| `topic` | String (optional) | Thema, wird oberhalb angezeigt; leer = kein Thema |
| `question` | String | Der Fragetext |
| `options` | Array von Strings | Antwortmöglichkeiten |
| `correctIndices` | Array von Zahlen | Indizes der richtigen Antworten (0-basiert) |
| `explanation` | String | Erklärung, die nach dem Prüfen erscheint |

**Beispiel (Mehrfachauswahl):**

```js
{
	id: 7,
	topic: 'HTML',
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
```

**Hinweise:**

- Mehrfachauswahl entsteht automatisch, sobald `correctIndices` mehr als einen Index enthält.
- Die Reihenfolge in `options` bestimmt die angezeigten Buchstaben (A, B, C, …).
- Wenn `topic` ein leerer String ist, wird kein Themen-Badge angezeigt.

## Styling & Theme (Light/Dark)

Das Styling liegt in [src/App.css](src/App.css) und [src/index.css](src/index.css). Das Theme wird über CSS-Variablen gesteuert und per Toggle in der UI umgeschaltet.

**Wichtige Stellen:**

- `html[data-theme='dark']` in [src/index.css](src/index.css) definiert die Dark-Mode-Farben.
- Der Theme-Status wird in [src/App.jsx](src/App.jsx) gespeichert und im `data-theme`-Attribut gesetzt.

Wenn du Farben anpassen willst, ändere die Variablen in [src/index.css](src/index.css), z. B. `--primary`, `--surface`, `--text`.

## Deployment

Der Build erzeugt die statischen Dateien im Ordner `dist/`.

```bash
npm run build
npm run preview
```

Für GitHub Pages, Netlify oder Vercel kannst du den `dist/`-Ordner als Build-Output verwenden.

## Hinweise zu Node.js

Vite 7 benötigt Node.js **20.19+** oder **22.12+**. Wenn du eine ältere Version nutzt, bitte Node aktualisieren.
