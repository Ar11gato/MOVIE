import { Card, Rate, ConfigProvider } from 'antd';
import classes from './CardElement.module.scss';
import colorAverage from '../../helpers/colorAverage.ts';
import { IFilm } from '../../types/types.ts';

import { rateFilm } from '../../api/filmService.ts';

const CardElement = ({
  id,
  title,
  overview,
  poster_path,
  release_date,
  genre_ids,
  vote_average,
}: IFilm) => {
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
                backgroundColor: colorAverage(vote_average),
              }}
            >
              {vote_average}
            </div>
          </div>
          <div className={classes.date}>{release_date}</div>
          <div className={classes.genres}>{genre_ids}</div>
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
              onChange={val => rateFilm(val, id)}
            />
          </ConfigProvider>
        </div>
      </div>
    </Card>
  );
};

export default CardElement;
