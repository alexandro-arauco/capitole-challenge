# Capitole Challenge Movie Browser

A modern, full-stack React application for browsing movies, built with TanStack Router, Vite, and SSR (Server-Side Rendering). The app fetches data from the [TMDB API](https://www.themoviedb.org/) and features genre-based carousels, detailed film pages, and a persistent wishlist.

---

## 🚀 Project Overview

This project is a movie browser that allows users to:
- Browse movies by genre in horizontally scrollable carousels
- View detailed information about each movie
- Add or remove movies from a persistent wishlist (stored in localStorage)
- Enjoy fast navigation and SSR for SEO and performance

---

## ✨ Features
- **File-based Routing**: Powered by [TanStack Router](https://tanstack.com/router) with code-splitting and SSR.
- **Server-Side Rendering**: Express server streams HTML for fast, SEO-friendly pages.
- **TMDB API Integration**: Fetches genres, movies, and details from The Movie Database.
- **Wishlist**: Add/remove movies to a wishlist, persisted in localStorage.
- **Responsive UI**: Carousel, Card, and FilmItem components for a modern look.
- **404 Not Found Page**: Custom animated 404 page.
- **TypeScript**: Full type safety across client and server.
- **Vite**: Fast build and dev server.

---

## 🛠️ Tech Stack
- **React 19**
- **TanStack Router** (with SSR)
- **Express** (Node.js server)
- **Vite** (build tool)
- **TypeScript**
- **Sass** (SCSS modules for styling)
- **Axios** (API requests)
- **Sonner** (toast notifications)

---

## 📦 Getting Started

### 1. Install dependencies
```bash
pnpm install
# or
npm install
```

### 2. Set up TMDB API Key
Create a `.env` file in the root with:
```
VITE_TMDB_BEARER=your_tmdb_bearer_token
```
You can get a bearer token from [TMDB API settings](https://www.themoviedb.org/settings/api).

### 3. Run in Development
```bash
pnpm dev
# or
npm run dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

### 4. Build for Production
```bash
pnpm build
# or
npm run build
```

### 5. Start Production Server
```bash
pnpm serve
# or
npm run serve
```

---

## 📁 Project Structure

```
capitole-challenge/
├── public/              # Static assets (icons, manifest, etc.)
├── src/
│   ├── components/      # Reusable UI components (Card, Carousel, FilmItem, Header, NotFound)
│   ├── interfaces/      # TypeScript interfaces for API data
│   ├── routes/          # File-based routes (/, /detail/$id, /wishlist)
│   ├── services/        # Wishlist service (localStorage)
│   ├── utils/           # API and data fetching utilities
│   ├── styles/          # Global and component styles (SCSS)
│   ├── entry-client.tsx # Client entry for SSR
│   ├── entry-server.tsx # Server entry for SSR
│   ├── main.tsx         # Main client entry
│   └── router.tsx       # Router setup
├── server.js            # Express server for SSR
├── vite.config.ts       # Vite configuration
├── package.json         # Project metadata and scripts
└── README.md            # This file
```

---

## 📜 Scripts

- `dev`    – Start development server with SSR
- `build`  – Build client and server bundles
- `serve`  – Serve the production build
- `debug`  – Start server with Node.js inspector

---

## 📝 License

This project is for educational/demo purposes. See [TMDB API terms of use](https://www.themoviedb.org/documentation/api/terms-of-use) for API usage restrictions. 