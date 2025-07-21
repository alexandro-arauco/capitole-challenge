# Capitole Challenge

A modern movie browser built with React, TypeScript, Vite, and SCSS. Browse movies by genre, view details, and manage your wishlist. Features responsive design and dynamic genre-based styling.

## Features

- **Browse by Genre:** View popular movies by genre using a carousel interface.
- **Movie Details:** See detailed information, including overview, release date, rating, and genres.
- **Wishlist:** Add or remove movies from your personal wishlist.
- **Responsive Design:** Looks great on all devices.
- **Genre-Based Styling:** Movie cards and detail pages change style (font, color, background) based on the main genre.
- **SCSS Architecture:** Modular, DRY, and future-proof with the latest Sass best practices.

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** SCSS (with @use, variables, mixins, and responsive design)
- **API:** [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- pnpm (or npm/yarn)

### Installation
```bash
pnpm install
```

### Running the App
```bash
pnpm dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

## Project Structure

```
src/
  components/      # Reusable React components
  interfaces/      # TypeScript interfaces
  routes/          # App routes (Home, Detail, Wishlist)
  services/        # Wishlist service
  styles/          # SCSS partials and component styles
  utils/           # API and utility functions
```

## SCSS Structure
- `src/styles/_variables.scss` — Color palette, spacing, breakpoints
- `src/styles/_mixins.scss` — Flex, grid, and media query mixins
- `src/styles/_base.scss` — Base styles and resets
- `src/styles/_buttons.scss` — Shared button styles
- `src/styles/index.scss` — Main entry, imports all partials and component styles

## Genre-Based Styling

Movie cards and detail pages use a dynamic class based on the main genre (e.g., `film-genre-action`, `film-genre-comedy`). You can customize the look for each genre in `src/styles/Card.scss`.

Example:
```scss
.film-genre-action {
  background: #1e293b;
  color: #fff;
  font-family: 'Oswald', Arial, sans-serif;
  border: 2px solid #ef4444;
}
```

## Customization
- Add more genre styles in `Card.scss` for a unique look.
- Tweak breakpoints, colors, or fonts in `_variables.scss`.

## License

This project is for educational/demo purposes. See [TMDb terms of use](https://www.themoviedb.org/terms-of-use) for API usage.
