import axios from 'axios';

export const getFilms = (
  page: number,
  value: string

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
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

export const rateFilm = (rating: number, movie_id: number) => {
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

export const deleteRateFilm = (movie_id: number) => {
  const options = {
    method: 'DELETE',
    url: `https://api.themoviedb.org/3/movie/${movie_id}/rating`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODk3ZTA4NWZlMGI2ZjI3MGRjMzIyYmY0M2QxNDI1NyIsIm5iZiI6MTY5NDg5MzE5Ny4xOTEsInN1YiI6IjY1MDYwNDhkNDU3NjVkMDBjNmQzYzQ0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bx2V7gHvTaJs1Uth7fLYOOwa2hfYGxYzK_vFZNMQ3D4',
    },
  };

  return axios.request(options);
};

export const getFavouriteFilms = (page: number) => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/account/20448224/rated/movies',
    params: { language: 'en-US', page, sort_by: 'created_at.asc' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODk3ZTA4NWZlMGI2ZjI3MGRjMzIyYmY0M2QxNDI1NyIsIm5iZiI6MTY5NDg5MzE5Ny4xOTEsInN1YiI6IjY1MDYwNDhkNDU3NjVkMDBjNmQzYzQ0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bx2V7gHvTaJs1Uth7fLYOOwa2hfYGxYzK_vFZNMQ3D4',
    },
  };

  return axios.request(options);
};
