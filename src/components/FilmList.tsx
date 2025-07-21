import { useEffect, useState } from "react";
import type { Result } from "../interfaces/Film";
import { fetchFilmsByGenre } from "../utils/fetchFilmsByGenre";
import Carousel from "./Carousel";
import FilmItem from "./FilmItem/FilmItem";

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
