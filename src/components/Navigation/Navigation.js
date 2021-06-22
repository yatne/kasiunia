import React from 'react';
import styled from "styled-components";
import logo from "../../static/img/logo.png"
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
    <Nav>
        <Link to="/home">
            <Logo src={logo} />
        </Link>
    </Nav>
    )
}

const Logo = styled.img`
    width: 100px;
    height: 70px;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
`

export default Navigation
