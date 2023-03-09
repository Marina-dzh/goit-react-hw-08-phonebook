
// import css from './AuthNav.module.css';
 import {  NavLinkSt} from '../Navigation/Navigation.styled';
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
