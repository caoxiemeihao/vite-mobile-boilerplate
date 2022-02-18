import { useState } from 'react';
import Home from './views/home';
import Login from './views/login';

export default () => {
  const [logined, setLogined] = useState(false);

  console.log(
    window.detectIPadOrientation().orientation === 'landscape' ? '横屏' : '竖屏',
  );

  const clickLogin = () => {
    setLogined(true);
  };

  return logined ? <Home /> : <Login onClick={clickLogin} />;
};
