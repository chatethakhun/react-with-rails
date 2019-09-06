import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarHeader = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Navbar.Brand href="/">React-Rails Todo</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Navbar>
);
export default NavbarHeader;
