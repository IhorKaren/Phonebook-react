import { useSelector } from 'react-redux';
import { isLogin, isRefresh } from 'Redux/Selectors/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(isLogin);
  const isRefreshing = useSelector(isRefresh);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
