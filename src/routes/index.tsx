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
      <ul>
        {Array.isArray(genres) ? (
          genres.map((genre: Genre) => (
            <Card key={genre.id} title={genre.name}>
              <FilmList genreId={genre.id} />
            </Card>
          ))
        ) : (
          <li>No genres found.</li>
        )}
      </ul>
    </section>
  );
}
