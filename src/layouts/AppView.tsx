import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar';

const AppView = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default AppView;
