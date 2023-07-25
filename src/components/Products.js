import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import AddProductModal from "./AddProductModal";
import UpdateProductModal from "./UpdateProductModal";
import DeleteProductModal from "./DeleteProductModal";
import Badge from 'react-bootstrap/Badge';

const Products = () => {
  const [showadd, setShowAdd] = useState(false);
  const [showedit, setShowEdit] = useState(false);
  const [showdelete, setShowDelete] = useState(false);

  //const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  //const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  //const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  return (
    <div>
      <Header />
      <br />
      <h1>Products</h1>
      <br />
      <Button
        variant="success"
        style={{ marginLeft: "80%" }}
        onClick={handleShowAdd}
      >
        Add New Product
      </Button>
      <div className="products">
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Product Name <Badge bg="secondary" text="light">00</Badge></Card.Title>
                  <Card.Text>
                   Unit Price: $0.00
                  </Card.Text>
                  <Button variant="success" onClick={handleShowEdit}>
                    Edit
                  </Button>{" "}
                  &nbsp;
                  <Button variant="danger" onClick={handleShowDelete}>
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
      <UpdateProductModal show={showedit} onHide={() => setShowEdit(false)} />
      <DeleteProductModal
        show={showdelete}
        onHide={() => setShowDelete(false)}
      />
    </div>
  );
};

export default Products;
