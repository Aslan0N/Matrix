import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to={"/"}>
              <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/about"}>
              <Nav.Link href="#features">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/alternative"}>
              <Nav.Link href="#features">Alternative</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
