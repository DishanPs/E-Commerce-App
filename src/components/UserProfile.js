import React from "react";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const UserProfile = () => {
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

  return (
    <div>
      <Header />
      <br />
      <h1>User Profile</h1>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "50vh" }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Email</Card.Title>
            <Card.Text>{user.email}</Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Title>Full Name</Card.Title>
            <Card.Text>{user.fullName}</Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Title>Contact Number</Card.Title>
            <Card.Text>{user.contactNo}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Button variant="success">Update Profile</Button>
      &nbsp;&nbsp;
      <Button variant="secondary">Give Feedback</Button>
      &nbsp;&nbsp;
      <Button variant="primary">Purchase History</Button>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default UserProfile;
