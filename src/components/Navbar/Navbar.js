import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';
import * as ROUTES from '../../Constants/Routes';

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Logo</h1>
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to={ROUTES.TEXT_DETECTION} activeStyle>
            Text Detection
          </NavLink>
          <NavLink to={ROUTES.IMAGE_INDIVIDUAL} activeStyle>
            Image Detection
          </NavLink>
          <NavLink to={ROUTES.CREDITS} activeStyle>
            Credits
          </NavLink>
          <NavLink to={ROUTES.CONTACT} activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
