# NovaSphere - Landing Page

A simple npm app that displays a landing page for NovaSphere, an imaginary product featuring holographic interfaces and advanced computing technologies.

## Features

- Express.js server serving a responsive landing page
- Conditional banner display based on environment variable
- Clean, modern design with smooth animations
- Mobile-responsive layout

## Installation

```bash
npm install
```

## Usage

### Start the server (default)

```bash
npm start
```

The app will run on `http://localhost:3000`

### Start with environment variable

To display the "foobar is set" banner, set the `NEXT_PUBLIC_FOOBAR` environment variable:

```bash
NEXT_PUBLIC_FOOBAR=1 npm start
```

or

```bash
export NEXT_PUBLIC_FOOBAR=1
npm start
```

### Custom port

```bash
PORT=8080 npm start
```

## Environment Variables

- `NEXT_PUBLIC_FOOBAR` - When set (any value), displays a banner at the top of the page saying "🎉 foobar is set"
- `PORT` - Server port (default: 3000)