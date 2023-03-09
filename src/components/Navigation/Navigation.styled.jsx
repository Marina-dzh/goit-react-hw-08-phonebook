import styled from '@emotion/styled'
 import { NavLink, Link } from 'react-router-dom';
export const  NavSt = styled.nav`
    
    /* margin-top: 10px; */
  
`
export const NavLinkSt = styled(NavLink)`
    
    color: inherit;
    
    padding: 5px 10px;
    text-decoration: none;
     :hover {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: black;
    background-color:orange;
    border-radius: 8px;
  }
    &.active {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: orange
  }
`

export const LinkSt= styled(Link)`
     text-decoration: none;
      color: inherit;
       text-decoration: underline;

     :hover {
   color: orange;
    }
`
