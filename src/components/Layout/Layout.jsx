import { Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isLogin } from 'Redux/Auth/slice';
import { logOut } from 'Redux/Auth/operations';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Header, Nav, Link } from './Layout.styled';

const Layout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isLogin);
  console.log(isLoggedIn);

  const hadleLogOutClick = () => dispatch(logOut());

  return (
    <>
      <Header>
        <Nav>
          {!isLoggedIn ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <Link to="/">Phonebook</Link>
          )}
        </Nav>
        {isLoggedIn && (
          <button type="button" onClick={hadleLogOutClick}>
            Log out
          </button>
        )}
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
