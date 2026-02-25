# NovaSphere - The Future of Personal Computing

This repository contains the landing page for NovaSphere, an imaginary product that features holographic interfaces and advanced computing technologies.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm package manager

### Installation

1. Install dependencies using pnpm:

```bash
pnpm install
```

### Running the Application

Start the development server:

```bash
pnpm start
```

The application will be available at `http://localhost:3000`

## 🎯 Features

- **Static Website Serving**: Serves all HTML, CSS, JavaScript, and image files
- **Environment Banner**: Displays a banner when the `FOOBAR` environment variable is set
- **Responsive Design**: Mobile-friendly layout with modern styling
- **Multiple Pages**: 
  - Home page (`index.html`)
  - Team page (`team.html`)
  - Header demo page (`header.html`)

## 🔧 Environment Variables

The application supports the following environment variables:

- `FOOBAR`: When set to any value, displays a banner at the top of all pages
- `PORT`: Server port (default: 3000)

### Example Usage

To run the server with the banner enabled:

```bash
FOOBAR=enabled pnpm start
```

Or on Windows:

```cmd
set FOOBAR=enabled && pnpm start
```

## 📁 Project Structure

```
/vercel/sandbox/
├── server.js           # Express server with banner injection
├── package.json        # Project dependencies and scripts
├── index.html          # Main landing page
├── team.html           # Team page
├── header.html         # Header demo page
├── styles.css          # Global styles
├── script.js           # Client-side JavaScript
├── main.js             # Additional JavaScript
├── images/             # Image assets
│   ├── logo.svg
│   └── product.svg
├── .env.example        # Environment variable template
└── README.md           # This file
```

## 🎨 Technology Stack

- **Backend**: Node.js with Express.js
- **Frontend**: HTML5, CSS3, JavaScript
- **Fonts**: Google Fonts (Montserrat)
- **Package Manager**: pnpm

## 📝 License

MIT License - © 2025 NovaSphere Inc.
