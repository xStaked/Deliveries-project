import React from "react";
import { Container, Row, Col, Form, Button, Accordion } from "react-bootstrap";
const BackOffice = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Backoffice/BackOffice panel</h2>
        </Col>
      </Row>
      {/* <Row> */}
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
      {/* </Row> */}
      <Row>
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
      </Row>
    </Container>
  );
};

export default BackOffice;
