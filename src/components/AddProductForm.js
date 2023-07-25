import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddProductForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupname">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupprice">
          <Form.Label>Unit Price</Form.Label>
          <Form.Control type="number" placeholder="Enter Unit Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupCategory">
          <Form.Label>Product Category</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Category" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupQuantity">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control type="number" placeholder="Enter Available Quantity" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>{" "}
        &nbsp;
        <Button variant="secondary" type="reset">
          Reset
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;
