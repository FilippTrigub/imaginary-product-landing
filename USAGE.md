# NovaSphere Usage Guide

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start the Server

**Without banner:**
```bash
pnpm start
```

**With FOOBAR banner:**
```bash
FOOBAR=1 pnpm start
```

The server will start on `http://localhost:3000`

## Environment Variables

### FOOBAR
When the `FOOBAR` environment variable is set to any value, a red banner will appear at the top of all pages.

**Examples:**
```bash
# Any value works
FOOBAR=1 pnpm start
FOOBAR=true pnpm start
FOOBAR=anything pnpm start

# On Windows (CMD)
set FOOBAR=1 && pnpm start

# On Windows (PowerShell)
$env:FOOBAR="1"; pnpm start
```

### PORT
Customize the server port (default: 3000)

```bash
PORT=8080 pnpm start
```

### Combined Example
```bash
FOOBAR=1 PORT=8080 pnpm start
```

## Available Pages

- **Home**: `http://localhost:3000/`
  - Main landing page with features, pricing, about, and contact sections
  
- **Team**: `http://localhost:3000/team.html`
  - Meet the team members page
  
- **Header Demo**: `http://localhost:3000/header.html`
  - Enhanced header navigation demonstration

## Features

### Banner Display
The FOOBAR banner:
- Appears at the top of all HTML pages
- Has a gradient red background
- Displays: "🎉 FOOBAR Environment Variable is Active! 🎉"
- Is injected server-side before sending HTML to the browser

### Static Assets
All static assets are served correctly:
- CSS: `/styles.css`
- JavaScript: `/script.js`
- Images: `/images/logo.svg`, `/images/product.svg`

## Development

The app uses Express.js to:
1. Serve static files (CSS, JS, images)
2. Read HTML files from disk
3. Inject banner HTML when FOOBAR env var is set
4. Send modified HTML to the browser

## Testing

Start the server and visit:
- `http://localhost:3000` - Should show the homepage
- `http://localhost:3000/team.html` - Should show the team page

With FOOBAR enabled, you should see a red banner at the top of each page.

## Troubleshooting

**Port already in use:**
```bash
# Use a different port
PORT=3001 pnpm start
```

**Dependencies not installed:**
```bash
# Reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Banner not showing:**
- Ensure FOOBAR is set: `FOOBAR=1 pnpm start`
- Check server console output for "✅ FOOBAR banner is ENABLED"
