# FIFA Cards

A React app that displays FIFA-style player cards using `react-bootstrap` and colorful inline styling.

## Project Overview

This project showcases an interactive FIFA card collection featuring:

- A reusable `Player` component to render each player card.
- A `PlayersList` component that maps player data and provides search filtering.
- Team-themed color gradients and hover animations for a premium UI.
- Support for missing images with fallback portrait graphics.

## How It Works

- `src/players.js` contains the player data array.
- `src/Player.js` renders each card with custom styling and team-based themes.
- `src/PlayersList.js` renders the roster and includes a live search input.
- `src/App.js` loads the `PlayersList` component as the app root.

## Getting Started

Install dependencies and start the app:

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

Create a production build with:

```bash
npm run build
```

## Notes

This app is a simple React project built from Create React App. It demonstrates the use of:

- JSON data arrays for player details
- React props and reusable components
- Inline styling with dynamic theme colors
- Live filtering of card data via search

The UI is designed to look more vibrant and FIFA-inspired than the default starter app.
