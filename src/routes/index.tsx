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
        <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
          <FilmList genre={genre} />
        </div>
      ))}
    </section>
  );
}
