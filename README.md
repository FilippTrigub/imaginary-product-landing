# NovaSphere - The Future of Personal Computing

This repository contains the landing page for NovaSphere, an imaginary product that features holographic interfaces and advanced computing technologies.

## Features

- **Express Server**: Serves the static website with Node.js and Express
- **Conditional Banner**: Displays a banner when the `FOOBAR` environment variable is set
- **Responsive Design**: Mobile-friendly layout with modern CSS
- **Multiple Pages**: Home, Team, and Header demo pages

## Installation

This project uses **pnpm** as the package manager.

```bash
# Install pnpm globally (if not already installed)
npm install -g pnpm

# Install dependencies
pnpm install
```

## Usage

### Start the server (without banner)

```bash
pnpm start
```

The server will run on `http://localhost:3000`

### Start the server with FOOBAR banner

```bash
FOOBAR=1 pnpm start
```

or on Windows:

```cmd
set FOOBAR=1 && pnpm start
```

### Custom Port

```bash
PORT=8080 pnpm start
```

## Environment Variables

- `FOOBAR` - When set (any value), displays a banner at the top of all pages
- `PORT` - Server port (default: 3000)

## Project Structure

```
.
├── server.js           # Express server with banner injection
├── package.json        # pnpm configuration
├── index.html          # Main landing page
├── team.html           # Team page
├── header.html         # Header demo page
├── styles.css          # Global styles
├── script.js           # Client-side JavaScript
├── main.js             # Legacy JS (not used in pnpm version)
└── images/             # Image assets
    ├── logo.svg
    └── product.svg
```

## Pages

- **Home** (`/`) - Main landing page with features, pricing, and contact form
- **Team** (`/team.html`) - Meet the team members
- **Header Demo** (`/header.html`) - Enhanced header navigation demo

## Technologies

- Node.js 18+
- Express.js 4.x
- HTML5, CSS3, JavaScript (ES6+)
- Google Fonts (Montserrat)

## License

MIT © 2025 NovaSphere Inc.
