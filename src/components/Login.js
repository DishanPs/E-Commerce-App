import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:7298/api/Login/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        alert("Login Successful");
        const token = response.data;
        sessionStorage.setItem('token', JSON.stringify(token));
        navigate("/");

      } else {
        alert("Login failed! Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);

      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div>
      <img src="../logo.ico" alt="logo" height="170px" />
      <h1>Login to Your Account</h1>
      <div
        style={{
          border: "2px solid grey",
          width: "50%",
          marginLeft: "25%",
          marginTop: "2%",
          borderRadius: "1%",
          marginBottom: "2%",
        }}
      >
        <div className="loginform">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Login
            </Button>
          </Form>
        </div>
        <br />
        <br />
        Don't have an account? &nbsp;{" "}
        <Button variant="secondary" href="./signup">
          Sign Up
        </Button>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Login;
