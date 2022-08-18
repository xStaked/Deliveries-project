import React from "react";
import { Container, Row, Col, Form, Button, Accordion } from "react-bootstrap";

import "./admin.Styles.scss"
const BackOffice = () => {
  return (
    <Container className="container-backoffice">
      <Row>
        <Col>
          <h2 className="title">Backoffice/BackOffice panel</h2>
        </Col>
      </Row>
      {/* <Row> */}
      <Form.Group className="mb-3" controlId="idOrder">
        <Form.Label className="label">Id del producto o correo</Form.Label>
        <Form.Control type="text" placeholder="ID del producto" />
        <Button variant="primary" type="submit"  className="my-2" > Buscar </Button>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="label">Estado 1 </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="label">Estado 2</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="label">Estado 3</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="label">Número de refencia</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Modificar producto
      </Button>
      {/* </Row> */}
      {/* <Row>
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
      </Row> */}
    </Container>
  );
};

export default BackOffice;
