# NovaSphere - The Future of Personal Computing

This repository contains the landing page for NovaSphere, an imaginary product that features holographic interfaces and advanced computing technologies.

## Project Setup

This project uses pnpm as the package manager. To get started:

### Prerequisites
- Node.js (v14 or higher)
- pnpm (install with: `npm install -g pnpm`)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Preview Deployment
The application displays a banner at the top of the page when either the `FOOBAR` or `NEXT_PUBLIC_FOOBAR` environment variables are set.

To run the preview:
```bash
# Standard preview
pnpm preview

# With environment variable set
FOOBAR=true pnpm preview
NEXT_PUBLIC_FOOBAR=true pnpm preview
```

The banner will appear at the top of the page when these variables are set.

### Available Scripts
- `pnpm dev` - Start development server
- `pnpm start` - Start production server  
- `pnpm preview` - Preview build locally