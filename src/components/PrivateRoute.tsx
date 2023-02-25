import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from '../redux/authSlice';

interface PrivateRouteProps {
  element: ReactNode;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <>{element}</> : <Navigate to="/" />;
};

export default PrivateRoute;

