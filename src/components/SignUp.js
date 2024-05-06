import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [validated, setvalidated] = useState(false);
  const [email, setEmail] = useState();
  const [fullname, setFullName] = useState();
  const [contact, setContactNo] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();


  const handleSubmit = (event) => {
    const newUser = {
      email: email,
      fullName: fullname,
      contactNo: contact,
      password: password,
    };

    const newReg = {
      email: email,
      password: password,
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (password === cpassword) {
        axios
          .post("https://localhost:7298/api/Users", newUser)
          .then(() => alert("Added Successfully"))
          .catch((err) => alert("Not Successful"));

        axios
          .post("https://localhost:7298/api/Login/register", newReg)
          .then(() => alert("Added Successfully"))
          .catch((err) => alert("Not Successful"));
      } else {
        alert("Password Mismatch");
        event.preventDefault();
        event.stopPropagation();
      }
    }

    setvalidated(true);
  };

  return (
    <div>
      <img src="../logo.ico" alt="logo" height="170px" />
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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupname">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupcontactno">
                  <Form.Label>Contact No.</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="+94 xx xxx xxxx"
                    value={contact}
                    onChange={(e) => setContactNo(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupCPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-enter Password"
                    value={cpassword}
                    onChange={(e) => setCPassword(e.target.value)}
                    required
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
      <br />
    </div>
  );
};

export default SignUp;
