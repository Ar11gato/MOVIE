import Navigation from './components/Navigation/Navigation.tsx';
import './styles/global.scss';
import Router from './router/Router.tsx';

const App = () => {
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
