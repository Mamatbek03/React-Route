import React from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        className="d-flex justify-content-around"
        bg="primary"
        variant="dark"
      >
        <Container className="w-50">
          <Link to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
          <Link to="/Contacts">
            <Navbar.Brand>Contacts</Navbar.Brand>
          </Link>
          <Link to="AboutUs">
            <Navbar.Brand>About Us</Navbar.Brand>
          </Link>
          <Link to="Favorites">
            <Navbar.Brand className="me-5">Favorites</Navbar.Brand>
          </Link>
        </Container>
        <Navbar className="ms-5">
          <Form.Control
            type="search"
            placeholder="Search"
            className="ms-5 w-50"
            aria-label="Search"
          />
          <Button>Search</Button>
        </Navbar>
      </Navbar>
    </div>
  );
};

export default Header;
