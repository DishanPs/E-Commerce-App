import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

const UpdateProductForm = ({ det }) => {
  const [validated, setvalidated] = useState(false);
  const [pid, setProductID] = useState(det.productID);
  const [pname, setProductName] = useState(det.productName);
  const [category, setProductCategory] = useState(det.productCategory);
  const [price, setPrice] = useState(det.price);
  const [qty, setQuantity] = useState(det.quantity);
  const [image, setImage] = useState(det.imageUrl);

  const handleSubmit = (event) => {
    const newProduct = {
      productID: pid,
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
        .put(`https://localhost:7298/api/Products/${det.productID}`, newProduct)
        .then(() => alert("Updated Successfully"))
        .catch((err) => alert("Not Successful"));
    }

    setvalidated(true);
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
          Save Changes
        </Button>{" "}
        &nbsp;
      </Form>
    </div>
  );
};

export default UpdateProductForm;
