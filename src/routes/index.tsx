import { Card } from "../components/Card";
import FilmList from "../components/FilmList";
import type { Genre } from "../interfaces/Genres";
import { fetchGenres } from "../utils/fetchGenres";
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
          <Card key={genre.id} title={genre.name}>
            <FilmList genreId={genre.id} />
          </Card>
        </div>
      ))}
    </section>
  );
}
