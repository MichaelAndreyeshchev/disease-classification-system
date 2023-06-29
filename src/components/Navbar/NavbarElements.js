import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  top: 0;
  padding: 0.5rem calc((100vw - 1500px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  padding: 0 1em;
  transition: transform 0.25s ease-in-out;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 41px;
  text-align: center;
  color: #09ac91;

  &.active {
    color: #3ee7ba;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 5px;
  }

  &:hover {
    transform: ${(props) => (!props.logo ? 'translateY(-5px)' : 'none')};
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #09ac91;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: clamp(37rem, 60vw, 50rem);

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
