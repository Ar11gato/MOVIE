import axios, { AxiosResponse } from 'axios';
import { IFilms } from '../types/types.ts';

export const getFilms = (
  page: number,
  value: string
): axios.AxiosRequestConfig['data'] => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/${value}`,
    params: { language: 'en-US', page },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODk3ZTA4NWZlMGI2ZjI3MGRjMzIyYmY0M2QxNDI1NyIsIm5iZiI6MTY5NDg5MzE5Ny4xOTEsInN1YiI6IjY1MDYwNDhkNDU3NjVkMDBjNmQzYzQ0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bx2V7gHvTaJs1Uth7fLYOOwa2hfYGxYzK_vFZNMQ3D4',
    },
  };
  console.log('page', page);

  return axios.request(options);
};

export const rateFilm = (rating, movie_id) => {
  const options = {
    method: 'POST',
    url: `https://api.themoviedb.org/3/movie/${movie_id}/rating`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODk3ZTA4NWZlMGI2ZjI3MGRjMzIyYmY0M2QxNDI1NyIsIm5iZiI6MTY5NDg5MzE5Ny4xOTEsInN1YiI6IjY1MDYwNDhkNDU3NjVkMDBjNmQzYzQ0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bx2V7gHvTaJs1Uth7fLYOOwa2hfYGxYzK_vFZNMQ3D4',
    },
    data: `{"value":${rating}}`,
  };

  return axios.request(options);
};
