import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/text/detection' activeStyle>
            Text Detection
          </NavLink>
          <NavLink to='/image/detection' activeStyle>
            Image Detection
          </NavLink>
          <NavLink to='/credits' activeStyle>
            Credits
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
