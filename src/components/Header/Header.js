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
        <Navbar sticky="top" bg="black" collapseOnSelect variant="dark" expand="lg" >
            <Container fluid>
                <Navbar.Brand className="fs-1 fw-bolder ms-2">
                    <img className="img-fluid me-3" src="https://t3.ftcdn.net/jpg/03/19/94/76/360_F_319947608_Ayu6epdEVqBtGaR5DQ4Mz6WvCJYwJGsJ.webp" alt="" width="55" height="30" />
                    sCare Bangladesh
                </Navbar.Brand>
                <Nav className="d-flex align-items-end justify-content-end">
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
                    <span className="text-white">{user.displayName} </span>
                    {/* {user?.email && <button onClick={logout}>log out</button>} */}
                    {user?.displayName && <button className="ms-3 text-white btn btn-black border border-white" onClick={logOut}>log out</button>}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;