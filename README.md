# The Monkey's Captain

A bold, mobile-friendly restaurant landing page for The Monkey's Captain, built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- Responsive hero section with strong food-stall branding
- Best sellers, about, trust highlights, and event-gallery sections
- Menu, maps, and event-booking calls to action
- Local image assets optimized for a static Vite deployment

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS

## Getting Started

```bash
cd client
npm install
npm run dev
```

The local dev server starts on the URL printed by Vite, usually `http://localhost:5173`.

## Available Scripts

Run these from the `client/` directory:

```bash
npm run dev      # Start the development server
npm run build    # Type-check and build for production
npm run preview  # Preview the production build locally
npm run format   # Format the project with Prettier
```

## Deploying To Vercel

This repository includes `vercel.json`, so importing the GitHub repo into Vercel should work from the repository root.

The included settings are:

- Framework preset: Vite
- Install command: `cd client && npm install`
- Build command: `cd client && npm run build`
- Output directory: `client/dist`

If you prefer setting Vercel's root directory to `client`, use `npm install`, `npm run build`, and `dist` instead.

## Project Structure

```text
.
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── content/
│   │   └── style.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
├── PRODUCT.md
├── README.md
└── vercel.json
```
