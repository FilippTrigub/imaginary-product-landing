# NovaSphere Web Application

This is a Next.js application that displays the NovaSphere landing page with a banner that appears when certain environment variables are set.

## Features
- Responsive web design with NovaSphere branding
- Environment variable detection banner (appears when FOOBAR or NEXT_PUBLIC_FOOBAR are set)
- Navigation with dropdown menus and smooth scrolling
- Mobile-friendly layout

## Setup Instructions

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm run dev
   ```

3. Access the application at `http://localhost:3000`

## Environment Variables
This application checks for the following environment variables:
- `FOOBAR` - When set, will display a banner with its value
- `NEXT_PUBLIC_FOOBAR` - When set, will display a banner with its value (also available on client-side)

The banner will appear at the top of the page when either of these variables is set.

## Files
- `pages/index.js` - Main landing page with banner logic
- `pages/team.js` - Team page with banner logic  
- `public/styles.css` - Application styling
- `public/images/` - Image assets