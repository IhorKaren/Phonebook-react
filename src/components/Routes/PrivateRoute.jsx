import { useSelector } from 'react-redux';
import { isLogin } from 'Redux/Auth/slice';
import { isRefresh } from 'Redux/Auth/slice';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(isLogin);
  const isRefreshing = useSelector(isRefresh);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
