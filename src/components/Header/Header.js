import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();

    // NavLink activeStyle 
    const activeStyle = {
        fontWeight: "bold",
        color: "tomato"
    };
    return (
        <Navbar bg="black" variant="dark" expand="lg" >
            <Container fluid>
                <Navbar.Brand className="fs-1 fw-bolder ms-2">
                    <img className="img-fluid me-3" src="https://t3.ftcdn.net/jpg/03/19/94/76/360_F_319947608_Ayu6epdEVqBtGaR5DQ4Mz6WvCJYwJGsJ.webp" alt="" width="55" height="30" />
                    sCare Bangladesh
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex align-items-end justify-content-end ms-auto">
                        <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/home">Home
                        </NavLink>
                        <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/services">Services
                        </NavLink>
                        <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/experts">Experts
                        </NavLink>
                        <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/about">About
                        </NavLink>
                        <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/login">Login
                        </NavLink>
                        {/* showing userName after login */}
                        <span className="text-white mb-1">{user.displayName}</span>
                        {/* log out button show */}
                        {user?.email && <button className="ms-3 text-white btn btn-black border border-white" onClick={logOut}>log out</button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;