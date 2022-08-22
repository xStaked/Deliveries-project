import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHouseUser } from "react-icons/fa";
import { GiBoxUnpacking } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiHouse } from "react-icons/gi";
import "./follow.Styles.scss";

const FollowStatus = ({
  deliveryDate,
  packagingDate,
  translateDate,
  shippingDate,
  productName,
  imgProduct,
}) => {
  return (
    <Container className="container-follow">
      <div className="card-status">
        <Row className="d-flex flex-column justify-content-center align-items-center">
          <h5 className="product-name mx-2 text-center"> {productName} </h5>
          <a
            href={imgProduct}
            target="_blank"
          >
            <img
              src={imgProduct}
              alt="imgproduct"
              width={60}
              height={60}
              className="img-product text-center mx-4"
            />
          </a>
        </Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <FaHouseUser className="icon-status" />
          <h3 className="title-status text-center">Fecha del pedido</h3>
          <span className="text-dev"> {deliveryDate} </span>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <GiBoxUnpacking className="icon-status" />
          <h3 className="title-status text-center">Tiempo de empacado</h3>
          <span className="text-dev"> {packagingDate} Días </span>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <TbTruckDelivery className="icon-status" />
          <h3 className="title-status text-center">Tiempo de translado</h3>
          <span className="text-dev"> {translateDate} Días </span>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <GiHouse className="icon-status text-center" />
          <h3 className="title-status">Tiempo de entrega</h3>
          <span className="text-dev"> {shippingDate} Días </span>
        </Col>
      </div>
    </Container>
  );
};

export default FollowStatus;
