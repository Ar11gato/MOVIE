import { useState } from 'react';
import { Pagination } from 'antd';
import classes from '../HomePage/HomePage.module.scss';

import CardList from '../../components/CardList/CardList.tsx';

const FavouritePages = () => {
  const value = 'https://api.themoviedb.org/3/account/20448224/rated/movies';

  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);

  return (
    <>
      <CardList page={page} value={value} setPages={setPages} />
      <Pagination
        defaultCurrent={1}
        total={pages * 10}
        className={classes.pagination}
        onChange={pag => setPage(pag)}
      />
    </>
  );
};

export default FavouritePages;
