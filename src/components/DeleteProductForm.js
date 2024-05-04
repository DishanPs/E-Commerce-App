import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

const DeleteProductForm = ({ product }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .delete(`https://localhost:7298/api/Products/${product.productID}`)
        .then(() => {
          alert("Successfully Deleted");
        })
        .catch((err) => {
          alert("Failed");
        });
    }

    setValidated(true);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>
            Are You Sure, Do You Want to Delete this Product?
          </Form.Label>
        </Form.Group>

        <Button variant="danger" type="submit">
          Delete
        </Button>
      </Form>
    </div>
  );
};

export default DeleteProductForm;
