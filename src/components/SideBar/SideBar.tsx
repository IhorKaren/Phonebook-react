import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'Redux/Auth/operations';
import { user } from 'Redux/Selectors/selectors';
import StyledSidebar from './SideBar.styled';
import { closeSidebar } from 'Services/sideBar';
import { AppDispatch } from 'Redux/store';

const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(user);

  const hadleLogOutClick = () => {
    dispatch(logOut());
  };

  return (
    <StyledSidebar
      name={currentUser.name}
      email={currentUser.email}
      onClose={closeSidebar}
      onClick={hadleLogOutClick}
    />
  );
};

export default Sidebar;
