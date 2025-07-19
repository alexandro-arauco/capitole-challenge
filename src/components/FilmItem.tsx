import type { Result } from "@/interfaces/Film";
import { Card } from "./Card";
import { Link } from "@tanstack/react-router";

interface FilmProps {
  film: Result;
}

export default function FilmItem({ film }: FilmProps) {
  return (
    <Card title={film.title}>
      <Link to="/detail/$id" params={{ id: film.id.toString() }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}.jpg`}
          alt={film.title}
        />
      </Link>
    </Card>
  );
}
