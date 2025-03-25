import React, { useEffect, useState } from 'react';
import { getFavouriteFilms, getFilms } from '../../api/filmService.ts';
import { IFilms } from '../../types/types.ts';
import { Col, Row } from 'antd';
import CardElement from '../Card/CardElement.tsx';
import classes from './CardList.module.scss';

interface CardListProps {
  page: number;
  value: string;
  setPages: React.Dispatch<React.SetStateAction<number>>;
}

const CardList = ({ page, value, setPages }: CardListProps) => {
  const [result, setResult] = useState<IFilms>({ results: [] });
  useEffect(() => {
    if (
      value === 'https://api.themoviedb.org/3/account/20448224/rated/movies'
    ) {
      getFavouriteFilms(page)
        .then(
          res => (
            console.log(res.data),
            setResult(res.data),
            setPages(res.data.total_pages)
          )
        )
        .catch(err => console.error(err));
    } else {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      getFilms(page, value)
        .then(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          res => (
            console.log(res.data),
            setResult(res.data),
            setPages(res.data.total_pages)
          )
        )
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        .catch(err => console.error(err));
    }
  }, [page, value]);
  return (
    <div className={classes.container}>
      <Row gutter={16}>
        {result.results?.map(film => (
          <Col key={film.id} span={12}>
            <CardElement
              key={film.id}
              id={film.id}
              title={film.title}
              overview={film.overview}
              poster_path={film.poster_path}
              release_date={film.release_date}
              genre_ids={film.genre_ids}
              vote_average={film.vote_average}
              rating={film.rating}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardList;
