import React from 'react';
import * as ROUTES from '../../Constants/Routes';
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to={ROUTES.TEXT_DETECTION} onClick={toggle}>
            Text Detection
          </SidebarLink>
          <SidebarLink to={ROUTES.IMAGE_INDIVIDUAL} onClick={toggle}>
            Image Detection
          </SidebarLink>
          <SidebarLink to={ROUTES.CREDITS} onClick={toggle}>
            Credits
          </SidebarLink>
          <SidebarLink to={ROUTES.CONTACT} onClick={toggle}>
            Contact Us
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
