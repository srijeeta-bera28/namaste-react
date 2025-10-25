
export const MOVIE_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer + ${import.meta.env.VITE_TMDB_KEY}`,
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"