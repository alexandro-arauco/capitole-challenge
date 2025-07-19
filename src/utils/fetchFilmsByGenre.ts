import type { Film } from "@/interfaces/Film";
import axiosInstance from "./api";

export const fetchFilmsByGenre = async (genreId: number) => {
  const response = await axiosInstance.get<Film>(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`
  );
  return response.data;
};
