import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'Redux/Auth/operations';
import { isRefresh } from 'Redux/Selectors/selectors';
import RestrictedRoute from './Routes/RestrictedRoute';
import PrivateRoute from './Routes/PrivateRoute';
import Home from 'Pages/Home/Home';
import LoginForm from 'Pages/Login/Login';
import RegisterForm from 'Pages/Register/Register';

export function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(isRefresh);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
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
    )
  );
}
