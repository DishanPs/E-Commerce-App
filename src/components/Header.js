import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <div>
      <Navbar data-bs-theme="light" style={{backgroundColor:"#51f07c"}}>
        <Container>
          <Navbar.Brand href="/"><h3><b>OftenSale</b></h3></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"><b>Home</b></Nav.Link>
            <Nav.Link href="/products"><b>Products</b></Nav.Link>
            <Nav.Link href="/about"><b>About Us</b></Nav.Link>
          </Nav>
          <Button variant="outline-success" href="./login">
            Login
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
