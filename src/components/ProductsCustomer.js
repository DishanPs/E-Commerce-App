import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import axios from "axios";

const ProductsCustomer = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      axios
        .get("https://localhost:7298/api/Products")
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getProducts();
  }, []);

  return (
    <div>
      <Header />
      <br />
      <h1>Products</h1>
      <br />
      <Button
        variant="outline-primary"
        style={{ marginLeft: "80%" }}
      >
        Checkout
      </Button>
      <div className="productsui">
        <Row xs={1} md={3} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  alt={product.productName}
                  style={{ width: "25%", margin: "auto", display: "block" }}
                />
                <Card.Body>
                  <Card.Title>
                    {product.productName}{" "}
                    <Badge bg="secondary" text="light">
                      {product.quantity}
                    </Badge>
                  </Card.Title>
                  <Card.Text>
                    Unit Price: LKR {product.price.toFixed(2)}
                  </Card.Text>{" "}
                  &nbsp;
                  <Button variant="success">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default ProductsCustomer;
