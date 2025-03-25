import React, { useEffect, useState } from 'react';
import { getFilms } from '../../api/filmService.ts';
import { IFilms } from '../../types/types.ts';
import { Col, Row } from 'antd';
import CardElement from '../Card/CardElement.tsx';
import classes from './CardList.module.scss';

interface CardListProps {
  page: number;
  value: string;
}

const CardList = ({ page, value }: CardListProps) => {
  const [result, setResult] = useState<IFilms>({ results: [] });
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    getFilms(page, value)
      .then(res => (console.log(res.data), setResult(res.data)))
      .catch(err => console.log(err));
  }, [page, value]);
  return (
    <div className={classes.container}>
      <Row gutter={16}>
        {result.results?.map((film, index) => (
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
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardList;
