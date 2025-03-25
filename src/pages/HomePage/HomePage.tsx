import { useState } from 'react';

import { Input, Pagination } from 'antd';

import CardList from '../../components/CardList/CardList.tsx';
import { debounce } from 'lodash';

import classes from './HomePage.module.scss';

const HomePage = () => {
  const [value, setValue] = useState('movie/popular');
  const [page, setPage] = useState(1);
  console.log(page);

  return (
    <>
      <Input
        className={classes.input}
        placeholder="Search"
        onChange={debounce(e => {
          if (e.target.value === '') {
            setValue('movie/popular');
          } else {
            setValue('search/movie?query=' + e.target.value);
          }
          console.log(e.target.value);
        }, 500)}
      />
      <CardList page={page} value={value} />
      <Pagination
        defaultCurrent={1}
        total={50}
        className={classes.pagination}
        onChange={pages => setPage(pages)}
      />
    </>
  );
};

export default HomePage;
