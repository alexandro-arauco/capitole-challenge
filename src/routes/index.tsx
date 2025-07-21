import FilmList from "../components/FilmList";
import type { Genre } from "../interfaces/Genres";
import { fetchGenres } from "../utils/fetchFilm";
import { getRandomElements } from "../utils/utils";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
  loader: () => fetchGenres(),
});

function App() {
  const response = useLoaderData({ from: "/" });
  const genres: Genre[] = getRandomElements(response.genres);

  return (
    <section>
      {genres.map((genre: Genre) => (
        <FilmList key={genre.id} genre={genre} />
      ))}
    </section>
  );
}
