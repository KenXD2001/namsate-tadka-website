# Namaste Tadka - Indian Recipes Web App

A modern Indian recipes and dishes web application built with React, TypeScript, Vite, Tailwind CSS, and Lucide React icons.

**Built by NovaSoft Technologies**

## 🍛 About

Namaste Tadka is a comprehensive Indian recipes web application that helps home cooks discover authentic Indian dishes with step-by-step cooking instructions, ingredients lists, cooking times, and expert tips.

## Features

- ⚡ Vite for fast development
- ⚛️ React 19 with TypeScript
- 🎨 Tailwind CSS for styling
- 📁 Professional folder structure
- 🔄 Reusable components
- 📦 React Router for navigation
- 🎯 Lucide React icons
- 📱 Responsive design
- 🌐 Environment-based configuration
- 📚 Recipe-focused content

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Badge.tsx
│   └── layout/       # Layout components
│       ├── Header.tsx
│       └── Footer.tsx
├── pages/            # Page components
│   └── HomePage.tsx
├── hooks/            # Custom hooks
│   └── useLocalStorage.ts
├── lib/              # Utilities
│   └── utils.ts
├── config/           # Environment config
│   └── env.ts
├── types/            # TypeScript types
├── utils/            # Helper functions
│   └── formatters.ts
├── styles/           # Global styles
└── assets/           # Static assets
```

## Configuration

The app uses environment variables for configuration. Copy `.env.example` to `.env` and update values:

```env
VITE_HOST=0.0.0.0
VITE_PORT=3333
VITE_APP_NAME=Namaste Tadka
VITE_APP_TITLE=Namaste Tadka - Authentic Indian Recipes & Dishes
VITE_APP_BUILT_BY=NovaSoft Technologies
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:3333` (configurable via `.env`)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linter

## Built by NovaSoft Technologies

Copyright © 2024 NovaSoft Technologies. All rights reserved.

This application showcases authentic Indian recipes and cooking techniques for home chefs worldwide.
