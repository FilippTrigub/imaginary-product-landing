# NovaSphere - Landing Page

A simple npm app that displays a landing page for NovaSphere, an imaginary product featuring holographic interfaces and advanced computing technologies.

## Features

- Clean, modern landing page with multiple sections (Hero, Features, Pricing, About, Contact)
- Responsive design
- Environment variable detection: displays a banner when `NEXT_PUBLIC_FOOBAR` is set

## Installation

```bash
npm install
```

## Usage

Start the server:

```bash
npm start
```

The landing page will be available at `http://localhost:3000`

## Environment Variables

- `NEXT_PUBLIC_FOOBAR`: When set, displays a "foobar is set" banner at the top of the page
- `PORT`: Server port (default: 3000)

## Testing the Banner

The banner is automatically displayed when `NEXT_PUBLIC_FOOBAR` is set in the environment. The app checks this via the `/api/config` endpoint.

## Project Structure

- `index.html` - Main landing page
- `server.js` - Express server
- `styles.css` - Styling
- `script.js` - Interactive features
- `team.html` - Team page
- `header.html` - Header demo page
- `images/` - Logo and product images
