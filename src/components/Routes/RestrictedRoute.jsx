import { useSelector } from 'react-redux';
import { isLogin } from 'Redux/Auth/slice';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(isLogin);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
