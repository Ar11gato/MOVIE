import { Card, Rate, ConfigProvider } from 'antd';
import classes from './CardElement.module.scss';
import colorAverage from '../../helpers/colorAverage.ts';
import { IFilm } from '../../types/types.ts';
import moment from 'moment';

import {
  deleteRateFilm,
  getNameGenres,
  rateFilm,
} from '../../api/filmService.ts';
import { useEffect, useState } from 'react';

const CardElement = ({
  id,
  title,
  overview,
  poster_path,
  release_date,
  genre_ids,
  vote_average,
  rating,
}: IFilm) => {
  const [genres, setGenres] = useState([]);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const convertIdGenres = nameGenres => {
    let genre_names: string[] = [];
    let id_genre = '';
    genre_ids.map(genre_id => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      id_genre = nameGenres.find(genre => genre_id === genre.id).name;
      genre_names = [id_genre, ...genre_names];
    });
    console.log(genre_names);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setGenres(genre_names);
  };
  useEffect(() => {
    getNameGenres().then(res => convertIdGenres(res.data.genres));
  }, []);

  return (
    <Card hoverable={true} className={classes.card} variant="borderless">
      <div className={classes.information}>
        <img
          className={classes.img}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : 'https://cdn1.ozone.ru/s3/multimedia-1-h/6984543509.jpg'
          }
          alt={'Movie poster'}
        />
        <div className={classes.info}>
          <div className={classes.header}>
            <h1 className={classes.title}>{title}</h1>
            <div
              className={classes.vote}
              style={{
                border: `2px solid ${colorAverage(vote_average)}`,
              }}
            >
              {vote_average.toFixed(1)}
            </div>
          </div>
          <div className={classes.date}>
            {moment(release_date).format('LL')}
          </div>
          <div className={classes.genres}>
            {genres.map(genre => (
              <div className={classes.genre}>{genre}</div>
            ))}
          </div>
          <div className={classes.text}>{overview}</div>
          <ConfigProvider
            theme={{
              components: {
                Rate: {
                  starBg: 'rgba(1, 8, 164, 0.2)',
                  starColor: '000000',
                  starSize: 13,
                },
              },
            }}
          >
            <Rate
              className={classes.rate}
              count={10}
              defaultValue={rating ? rating : 0}
              onChange={val => {
                if (val) {
                  rateFilm(val, id)
                    .then(r => console.log('succes:', r))
                    .catch(error => console.error('error', error));
                } else {
                  deleteRateFilm(id)
                    .then(r => console.log('succes:', r))
                    .catch(error => console.error('error', error));
                }
              }}
            />
          </ConfigProvider>
        </div>
      </div>
    </Card>
  );
};

export default CardElement;
