import React from 'react';
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
