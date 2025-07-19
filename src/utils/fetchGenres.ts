import type { Genres } from "@/interfaces/Genres";
import axiosInstance from "./api";

export const fetchGenres = async () => {
  const response = await axiosInstance.get<Genres>("genre/movie/list");
  return response.data;
};
