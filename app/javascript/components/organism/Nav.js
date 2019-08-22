import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavbarHeader = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Navbar.Brand href="#home">React-Rails Todo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Navbar>
);
export default NavbarHeader;
