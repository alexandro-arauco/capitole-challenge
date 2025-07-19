import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 10000,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGZmODE2MTQ1ZmJlNWM3YTQzMTFmYjhkZjg0MzQyYiIsIm5iZiI6MTQ3NTY3OTY4OC42NzEsInN1YiI6IjU3ZjUxNWM4OTI1MTQxMWM4MTAwNTdlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XeefOehmE55bOqX8tTyFPWm54T7BkEbyba06qoT_yaE",
  },
});

export default axiosInstance;
