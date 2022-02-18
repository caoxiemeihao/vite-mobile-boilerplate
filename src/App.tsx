import { useState } from 'react';
import Home from './views/home';
import Login from './views/login';

export default () => {
  const [logined, setLogined] = useState(false);

  const clickLogin = () => {
    setLogined(true);
  };

  return logined ? <Home /> : <Login onClick={clickLogin} />;
};
