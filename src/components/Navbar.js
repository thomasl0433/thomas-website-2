import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import './Navbar.css';

const NavbarCustom = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="rounded-bottom sticky-top">
        <Container>
          <Navbar.Brand id="thomas-name" href="#home">Thomas Levine</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              { /* spacing */ }
            </Nav>
            <Nav>
              <Nav.Link href="#about" className="text-white">About</Nav.Link>
              <Nav.Link eventKey={2} href="#projects" className="text-white">
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavbarCustom;
