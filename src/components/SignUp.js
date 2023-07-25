import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const SignUp = () => {
  return (
    <div>
      <br />
      <img src="../logo.ico" alt="logo" height="170px"/>
      <h1>Create an Account</h1>
      <br />
      <div
        style={{
          border: "2px solid grey",
          width: "50%",
          marginLeft: "25%",
          borderRadius: "1%",
        }}
      >
        <div className="signupform">
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupname">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupcontactno">
                  <Form.Label>Contact No.</Form.Label>
                  <Form.Control type="text" placeholder="+94 xx xxx xxxx" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupCPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-enter Password"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <br />
        Already have an account? &nbsp;{" "}
        <Button variant="secondary" href="./login">
          Login
        </Button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default SignUp;
