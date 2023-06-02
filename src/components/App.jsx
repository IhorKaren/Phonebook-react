import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'Redux/Auth/operations';
import { isRefresh } from 'Redux/Selectors/selectors';
import RestrictedRoute from './Routes/RestrictedRoute';
import PrivateRoute from './Routes/PrivateRoute';

import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyle from 'components/GlobalStyles/GlobalStyles';
import theme from 'components/Theme/Theme';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../Pages/Home/Home'));
const LoginForm = lazy(() => import('../Pages/Login/Login'));
const RegisterForm = lazy(() => import('../Pages/Register/Register'));

export function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(isRefresh);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <CssVarsProvider defaultMode="light" disableTransitionOnChange theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        {!isRefreshing && (
          <Routes>
            <Route
              path="/"
              index
              element={<PrivateRoute component={Home} redirectTo="login" />}
            />
            <Route
              path="login"
              element={<RestrictedRoute component={LoginForm} />}
            />
            <Route
              path="register"
              element={<RestrictedRoute component={RegisterForm} />}
            />
          </Routes>
        )}
      </Suspense>
    </CssVarsProvider>
  );
}
