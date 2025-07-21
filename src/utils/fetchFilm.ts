import type { FilmDetail } from "@/interfaces/Film";
import type { Film } from "@/interfaces/Film";
import type { Genres } from "@/interfaces/Genres";
import axiosInstance from "./api";

export const fetchFilmDetail = async (id: number) => {
  const response = await axiosInstance.get<FilmDetail>(`movie/${id}`);
  return response.data;
};

export const fetchFilmsByGenre = async (genreId: number) => {
  const response = await axiosInstance.get<Film>(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`
  );
  return response.data;
};

export const fetchGenres = async () => {
  const response = await axiosInstance.get<Genres>("genre/movie/list");
  return response.data;
}; 