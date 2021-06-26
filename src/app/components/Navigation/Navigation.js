import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../../static/img/logo.png';

const Navigation = () => (
  <Nav>
    <Link to="/home">
      <Logo src={logo} />
    </Link>
  </Nav>
);

const Logo = styled.img`
  width: 100px;
  height: 70px;
  animation-name: logo-animation;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  margin-left: 10px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
`;

export default Navigation;
