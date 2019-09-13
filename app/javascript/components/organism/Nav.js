import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  FormControl,
  Form
} from 'react-bootstrap';
import { useSelector, connect } from 'react-redux';
import { logout } from '../../redux/reducers/user-reducer.js/action';

const NavbarHeader = ({ logout }) => {
  const login = useSelector(state => state.user.login);
  const handleLogout = () => {
    logout();
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">React-Rails Todo</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {!login ? (
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          ) : (
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default connect(
  null,
  { logout }
)(NavbarHeader);
