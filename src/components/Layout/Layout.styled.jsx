import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  transition: color 200ms linear;

  :hover {
    color: royalblue;
  }

  &.active {
    color: royalblue;
  }
`;

export { Header, Nav, Link };
