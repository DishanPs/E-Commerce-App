import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

const AddProductForm = () => {
  const [validated, setvalidated] = useState(false);
  const [pname, setProductName] = useState();
  const [category, setProductCategory] = useState();
  const [price, setPrice] = useState();
  const [qty, setQuantity] = useState();
  const [image, setImage] = useState();

  const handleSubmit = (event) => {
    const newProduct = {
      productName: pname,
      productCategory: category,
      price: price,
      quantity: qty,
      imageUrl: image,
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .post("https://localhost:7298/api/Products", newProduct)
        .then(() => alert("Added Successfully"))
        .catch((err) => alert("Not Successful"));
    }

    setvalidated(true);
  };

  const Resetform = () => {
    setProductName(null);
    setProductCategory(null);
    setPrice(null);
    setQuantity(null);
    setImage(null);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupname">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Name"
            value={pname}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupCategory">
          <Form.Label>Product Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Category"
            value={category}
            onChange={(e) => setProductCategory(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupprice">
          <Form.Label>Unit Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Unit Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupQuantity">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Available Quantity"
            value={qty}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>{" "}
        &nbsp;
        <Button variant="secondary" type="reset" onClick={Resetform}>
          Reset
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;
