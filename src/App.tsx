import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes/routes';
import './global.scss';
import Tabs from './components/Tabs/Tabs';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Tabs />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} Component={route.component} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
