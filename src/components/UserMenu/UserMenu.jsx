import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/operations';
import { useAuth } from '../../hooks/useAuth';
// import css from './UserMenu.module.css';
import { Menu, Text, Butt } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Menu >
      <Text >Welcome, <b>{user.name}</b>!</Text>
      <Butt type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Butt>
    </Menu>
  );
};
