import { fetchFilmsByGenre } from "@/utils/fetchFilmsByGenre";
import { useEffect, useState } from "react";
import FilmItem from "./FilmItem";
import Carousel from "./Carousel";
import type { Result } from "@/interfaces/Film";

interface FilmProps {
  genreId: number;
}

export default function FilmList({ genreId }: FilmProps) {
  const [films, setFilms] = useState<Result[]>([]);

  useEffect(() => {
    fetchFilmsByGenre(genreId).then((data) => {
      setFilms(data.results);
    });
  }, []);

  return (
    <Carousel>
      {films && films.map((film) => <FilmItem key={film.id} film={film} />)}
    </Carousel>
  );
}
