import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'Redux/Auth/operations';
import { Container } from './Container/Container.styled';
import Layout from './Layout/Layout';
import { Home } from 'Pages/Home/Home';
import LoginForm from 'Pages/Login/Login';
import RegisterForm from 'Pages/Register/Register';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>
      </Routes>
    </Container>
  );
}
