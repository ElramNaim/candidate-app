# Candidates App

A React application for browsing and filtering candidate profiles.

## Project structure

- `src/` — application source code
- `src/components/` — UI components
- `src/hooks/` — hooks and filter logic
- `src/services/` — data fetching services
- `src/types/` — shared TypeScript types
- `test/` — unit tests

## Requirements

- Node.js 18+ recommended
- npm 9+ recommended

## Setup

Install dependencies:

```bash
npm install
```

## Run the app

Start the development server:

```bash
npm start
```

Open the app in your browser at:

```
http://localhost:3000
```

## Run the API server

This project includes a local JSON server that serves candidate data from `candidates.json`.

Start the API server in a separate terminal:

```bash
npm run server
```

The JSON API is available at:

```text
http://localhost:3001/candidates
```

## Run tests

Execute the unit test suite:

```bash
npm test
```
