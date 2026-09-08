# Rhythmix — Rhythmic Gymnastics Academy

A modern, responsive single-page application for a Rhythmic Gymnastics Academy, built with React, Vite, and Tailwind CSS. Ships with a sleek dark theme by default.

## Features

- **Hero Section** — dynamic animated gradient background with a "Join Now" call-to-action.
- **Subscriptions** — card-based pricing for Starter, Performance, and Elite training packages.
- **Branches** — dedicated location cards for Kafr Abdo, Ring Road, and Cairo, each with address, phone numbers, and an interactive map placeholder.

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) for icons

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
  components/
    ui/            # Reusable primitives (Button, SectionHeading)
    Navbar.jsx
    Hero.jsx
    Subscriptions.jsx
    PricingCard.jsx
    Branches.jsx
    BranchCard.jsx
    Footer.jsx
  data/
    pricingData.js # Subscription plan data
    branchesData.js # Branch location data
  App.jsx
  main.jsx
  index.css
```
