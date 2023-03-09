import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';
 import { NavSt , NavLinkSt} from '../Navigation/Navigation.styled';
export const AuthNav = () => {
  return (
    <div>
      <NavLinkSt  to="/register">
        Register
      </NavLinkSt>
      <NavLinkSt  to="/login">
        Log In
      </NavLinkSt>
    </div>
  );
};
