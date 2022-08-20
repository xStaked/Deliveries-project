import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Accordion,
  InputGroup,
  Modal,
} from "react-bootstrap";

import "./admin.Styles.scss";
const BackOffice = () => {
  const [product, setProduct] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const onChange = (e) => {
    setProduct(e.target.value);
  };

  console.log(product);

  return (
    <Container className="container-backoffice">
      <Row className="d-flex flex-column justify-content-center align-items-center">
        <Col xl={6}>
          <h2 className="title">Dashboard</h2>
          <InputGroup>
            <Form.Control
              placeholder="Buscar email de usuario"
              aria-label="Search"
              aria-describedby="Search"
              onChange={onChange}
            />
          </InputGroup>
        </Col>
        <Form>
          <Accordion
            defaultActiveKey="0"
            style={{ width: "22rem" }}
            className="accordion-product my-4"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header className="product-title">
                {" "}
                {product}{" "}
              </Accordion.Header>
              <Accordion.Body className="d-flex flex-column">
                <span>
                  Usuario: <span className="product-title"> {product}</span>{" "}
                </span>
                <span>
                  Fecha del pedido:{" "}
                  <span className="product-title"> {product}</span>
                </span>
                <span>
                  Tiempo de empacado:{" "}
                  <span className="product-title"> {product}</span>
                </span>
                <span>
                  Tiempo de translado:{" "}
                  <span className="product-title"> {product}</span>
                </span>
                <span>
                  Tiempo de entrega:{" "}
                  <span className="product-title"> {product}</span>
                </span>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Editar
                </Button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Form>
      </Row>
    </Container>
  );
};

export default BackOffice;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

{
  /* <Row> */
}

{
  /* </Row> */
}
{
  /* <Row>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Producto 1</Accordion.Header>
            <Accordion.Body>
              <Form.Group className="mb-3" controlId="idOrder">
                <Form.Label>Id del producto o correo</Form.Label>
                <Form.Control type="text" placeholder="ID del producto" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Campo1</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Campo2</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Produco 2</Accordion.Header>
            <Accordion.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Campo1</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Campo1</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Campo2</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row> */
}
