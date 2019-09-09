import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useSelector, connect } from 'react-redux';
import api from '../../utils/api';
import { logout } from '../../redux/reducers/user-reducer.js/action';

const NavbarHeader = ({ logout }) => {
  const login = useSelector(state => state.user.login);
  const handleLogout = () => {
    logout();
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">React-Rails Todo</Navbar.Brand>
      <Nav className="mr-auto">
        {!login ? (
          <Nav.Link href="/login">Login</Nav.Link>
        ) : (
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        )}
      </Nav>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
};
export default connect(
  null,
  { logout }
)(NavbarHeader);
