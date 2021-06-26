import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../static/img/logo.png';

const Navigation = () => {
  const location = useLocation();
  return (
    <Nav>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Link to="/quiz">
        <NavItem className={location.pathname === '/quiz' ? 'selected' : ''}>
          QUIZ
        </NavItem>
      </Link>
    </Nav>
  );
};

const Logo = styled.img`
  width: 100px;
  height: 70px;
  animation-name: logo-animation;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  margin-left: 10px;
`;

const Nav = styled.nav`
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
`;

const NavItem = styled.div`
  font-weight: bold;
  background-color: aquamarine;
  border-radius: 15px;
  padding: 10px;
  font-size: 1.1rem;
  
  &.selected {
    background-color: seagreen;
  }
`;

export default Navigation;
