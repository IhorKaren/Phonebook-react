import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
// import { logOut } from 'Redux/Auth/operations';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Header, Nav, Link } from './Layout.styled';

const Layout = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    // dispatch(logOut());
    console.log(1);
  };

  return (
    <>
      <Header>
        <Nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/">Phonebook</Link>
        </Nav>
        <button type="button">Log out</button>
      </Header>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
