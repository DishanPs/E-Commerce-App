import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import AddProductModal from "./AddProductModal";
import UpdateProductModal from "./UpdateProductModal";
import DeleteProductModal from "./DeleteProductModal";
import Badge from "react-bootstrap/Badge";
import axios from "axios";

const Products = () => {
  const [showadd, setShowAdd] = React.useState(false);
  const [showedit, setShowEdit] = React.useState(false);
  const [showdelete, setShowDelete] = React.useState(false);

  const [products, setProduct] = useState([]);
  const [productdet, setProductdet] = useState();
  const [productdelete, setProductdelete] = useState();

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
        variant="success"
        style={{ marginLeft: "80%" }}
        onClick={() => setShowAdd(true)}
      >
        Add New Product
      </Button>
      <div className="productsui">
        <Row xs={1} md={2} className="g-4">
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
                  </Card.Text>
                  <Button
                    variant="success"
                    onClick={() => {
                      setShowEdit(true);
                      setProductdet(product);
                    }}
                  >
                    Edit
                  </Button>{" "}
                  &nbsp;
                  <Button
                    variant="danger"
                    onClick={() => {
                      setShowDelete(true);
                      setProductdelete(product);
                    }}
                  >
                    Delete
                  </Button>{" "}
                  &nbsp;
                  <Button variant="success">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
      <AddProductModal show={showadd} onHide={() => setShowAdd(false)} />

      <UpdateProductModal
        show={showedit}
        onHide={() => setShowEdit(false)}
        productdet={productdet}
      />

      <DeleteProductModal
        show={showdelete}
        onHide={() => setShowDelete(false)}
        productdelete={productdelete}
      />
    </div>
  );
};

export default Products;
