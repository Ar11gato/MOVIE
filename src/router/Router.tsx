import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage.tsx';
import FavouritePages from '../pages/FavouritePage/FavouritePages.tsx';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favourites" element={<FavouritePages />} />
    </Routes>
  );
};

export default Router;
