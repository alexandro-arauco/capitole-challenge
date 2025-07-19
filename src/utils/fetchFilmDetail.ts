import type { FilmDetail } from "@/interfaces/Film";
import axiosInstance from "./api";

export const fetchFilmDetail = async (id: number) => {
  const response = await axiosInstance.get<FilmDetail>(`movie/${id}`);
  return response.data;
};
