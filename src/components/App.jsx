import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Container.styled';
import Layout from './Layout/Layout';
import { Home } from 'Pages/Home/Home';
import LoginForm from 'Pages/Login/Login';
import RegisterForm from 'Pages/Register/Register';

export function App() {
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
