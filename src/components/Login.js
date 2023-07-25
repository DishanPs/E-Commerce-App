import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <div>
      <br />
      <img src="../logo.ico" alt="logo" height="170px"/>
      <h1>Login to Your Account</h1>
      <div style={{border: "2px solid grey", width:"50%", marginLeft:"25%", marginTop:"2%", borderRadius:"1%", marginBottom:"2%"}}>
      <div className="loginform">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
      <br /><br /><br />
      </div>
    </div>
  );
};

export default Login;
