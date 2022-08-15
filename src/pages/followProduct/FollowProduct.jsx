import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./follow.Styles.scss";

const FollowProduct = () => {
  const token = localStorage.getItem("token");

  return (
    <Container className="container-follow">
      <Row>
        <Col>
          <h2 className="follow-title my-4">Estado total del envío</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default FollowProduct;
