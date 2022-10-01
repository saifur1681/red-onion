import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo2.png'

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/home">
                        <img style={{ width: '150px' }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Nav className=" justify-content-end">

                        <Nav.Link to="/login">Login</Nav.Link>
                        <Nav.Link to="/signup">Sign Up</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;