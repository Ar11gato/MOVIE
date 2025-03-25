export interface IFilm {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  genre_ids: number[];
  vote_average: number;
  rating?: number;
}

export interface IFilms {
  results: IFilm[];
}
