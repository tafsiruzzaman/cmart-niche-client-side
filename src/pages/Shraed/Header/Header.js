import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    const activeStyle = {
        fontWeight: "bold",
    }
    // 
    // <Button variant="light rounded-0 text-dark"> Signin</Button>
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
                <NavLink activeStyle={activeStyle} className="me-3" to='/home'>Home</NavLink>
                <NavLink activeStyle={activeStyle} className="me-3" to='/about'>About</NavLink>
                <NavLink activeStyle={activeStyle} className="me-3" to='/contact'>Contact Us</NavLink>
            </Nav>
            <Nav>
                <NavLink activeStyle={activeStyle} className="me-3 mt-0 mt-lg-2" to='/explore'>Explore</NavLink>
                {
                    user.email && <NavLink activeStyle={activeStyle} className="me-3 mt-2" to='/deshboard'>Deshboard</NavLink>
                }
                {
                    user.email ? <Button onClick={logOut} variant="light rounded-0 text-dark"><i className="fas fa-sign-in-alt"></i> Signout</Button>
                    :
                    <NavLink to='/signin'><Button variant="light rounded-0 text-dark"><i className="fas fa-sign-in-alt"></i> Signin</Button></NavLink>
                }
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;