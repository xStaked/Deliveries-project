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
          Editar estado de la orden
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4></h4>
        <Form.Group>
          <Form.Label>Fecha de la orden</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Tiempo de empacado</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Tiempo de translado</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Tiempo de entrega</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Entregado</Form.Label>
          <Form.Control as="select">
            <option>Si</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Eliminar</Button>
        <Button onClick={props.onHide}>Close</Button>

      </Modal.Footer>
    </Modal>
  );
}