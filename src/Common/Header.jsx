import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" className='me-5 fw-bold'>Bandage</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto fw-bold">
                            <NavDropdown title="Shop" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">About</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <Nav.Link href="#link">Pages</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto fw-bold">
                            <Nav.Link href="#home" className='text-info'><i class="fa-regular fa-user me-1"></i>Login / Register</Nav.Link>
                            <Nav.Link href="#link" className='text-info'><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
                            <Nav.Link href="#link" className='text-info'><i class="fa-solid fa-cart-shopping me-1"></i>1</Nav.Link>
                            <Nav.Link href="#link" className='text-info'><i class="fa-regular fa-heart me-1"></i>1</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header