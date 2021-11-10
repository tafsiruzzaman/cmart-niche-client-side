import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container>
        <Navbar.Brand>
            <NavLink to="/">
                <img
                src={logo}
                width="180"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
            </NavLink>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav-links">
            <Nav className="me-auto">
                <NavLink activeStyle={activeStyle} className="me-3" to="/home">Home</NavLink>
                <NavLink activeStyle={activeStyle} className="me-3" to="/about">About</NavLink>
                <NavLink activeStyle={activeStyle} className="me-3" to="/contact">Contact Us</NavLink>
            </Nav>
            <Nav>
                <NavLink activeStyle={activeStyle} className="me-3" to="/explore">Explore</NavLink>
                <NavLink activeStyle={activeStyle} className="me-3" to="/deshbord">Dehsboard</NavLink>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;