import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState, useEffect } from "react";

const Header = () => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const userDetails = () => {
      const token = sessionStorage.getItem("token");
      if (token) {
        const parsedUser = JSON.parse(token);
        setUser(parsedUser);
      }
    };
    userDetails();
  }, []);

  const handlelogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      sessionStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar data-bs-theme="light" style={{ backgroundColor: "#51f07c" }}>
        <Container>
          <Navbar.Brand href="/">
            <h3>
              <b>OftenSale</b>
            </h3>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">
              <b>Home</b>
            </Nav.Link>
            {token == null ? (
              <></>
            ) : (
              <>
                {user.email === "admin@gmail.com" ? (
                  <Nav.Link href="/products">
                    <b>Products</b>
                  </Nav.Link>
                ) : (
                  <Nav.Link href="/procus">
                    <b>Products</b>
                  </Nav.Link>
                )}
              </>
            )}
            <Nav.Link href="/about">
              <b>About Us</b>
            </Nav.Link>
          </Nav>
          {token == null ? (
            <Button variant="outline-success" href="./login">
              Login
            </Button>
          ) : (
            <>
              <Button variant="outline-dark" href="./profile">
                <AccountCircleIcon /> {user.email}
              </Button>
              &nbsp;&nbsp;
              <Button variant="outline-dark" onClick={handlelogout}>
                <LogoutIcon />
              </Button>
            </>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
