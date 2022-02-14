import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../../static/img/logo.png';

const Navigation = () => {
  const location = useLocation();
  const gameUnlocked = useSelector((state) => state.gameUnlocked);

  return (
    <Nav>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <NavItems>
        {gameUnlocked && (
        <Link to="/quiz">
          <NavItem className={location.pathname === '/quiz' ? 'selected' : ''}>
            QUIZ
          </NavItem>
        </Link>
        )}
      </NavItems>
    </Nav>
  );
};
const NavItems = styled.div`
    display: flex;
    justify-content: flex-end; 
`;

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
  margin-left: 30px;
  
  &.selected {
    background-color: seagreen;
  }
`;

export default Navigation;
