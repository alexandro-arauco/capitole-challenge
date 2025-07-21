import { useEffect, useState } from "react";
import type { Genre, Result } from "../interfaces/Film";
import FilmItem from "./FilmItem/FilmItem";
import Carousel from "./Carousel/Carousel";
import { fetchFilmsByGenre } from "../utils/fetchFilm";

interface FilmProps {
  genre: Genre;
}

export default function FilmList({ genre }: FilmProps) {
  const { id, name } = genre;
  const [films, setFilms] = useState<Result[]>([]);

  useEffect(() => {
    fetchFilmsByGenre(id).then((data) => {
      setFilms(data.results);
    });
  }, []);

  return (
    <Carousel title={name}>
      {films && films.map((film) => <FilmItem key={film.id} film={film} />)}
    </Carousel>
  );
}
