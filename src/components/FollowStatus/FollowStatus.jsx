import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FaHouseUser } from "react-icons/fa";
import { GiBoxUnpacking } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiHouse } from "react-icons/gi";
import "./follow.Styles.scss";

const FollowStatus = ({ deliveryDate, packagingDate, translateDate, shippingDate }) => {
  return (
    <Container className="container-follow">
    <div className="card-status">
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <FaHouseUser className="icon-status"/>
        <h3 className="title-status" >Fecha del pedido</h3>
        <span className='text-dev'> {deliveryDate} </span>
      </Col>
      <Col  className="d-flex flex-column justify-content-center align-items-center">
        <GiBoxUnpacking  className="icon-status"/>
        <h3 className="title-status">Tiempo de empacado</h3>
        <span className='text-dev'> { packagingDate } </span>
      </Col>
      <Col  className="d-flex flex-column justify-content-center align-items-center">
        <TbTruckDelivery className="icon-status"/>
        <h3 className="title-status">Tiempo de translado</h3>
        <span className='text-dev'> { translateDate } </span>
      </Col>
      <Col  className="d-flex flex-column justify-content-center align-items-center">
        <GiHouse  className="icon-status"/>
        <h3 className="title-status">Tiempo de entrega</h3>
        <span className='text-dev'> { shippingDate } </span>
      </Col>
    </div>
  </Container>
  )
}

export default FollowStatus