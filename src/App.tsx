import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.tsx';
import FavouritePages from './pages/FavouritePages.tsx';
import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation/Navigation.tsx';
import './styles/global.scss';
import Router from './router/Router.tsx';

const App: React.FC = () => {
  return (
    <>
      <div className="app">
        <div className="content">
          <Navigation />
          <Router />
        </div>
      </div>
    </>
  );
};

export default App;
