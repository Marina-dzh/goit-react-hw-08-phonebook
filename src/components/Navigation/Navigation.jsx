
import { useAuth } from '../../hooks/useAuth';
// import css from './Navigation.module.css';
 import { NavSt , NavLinkSt} from './Navigation.styled';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavSt>
      <NavLinkSt  to="/">
        Home
      </NavLinkSt>
      {isLoggedIn && (
        <NavLinkSt  to="/contacts">
          Contacts
        </NavLinkSt>
      )}
    </NavSt>
  );
};
