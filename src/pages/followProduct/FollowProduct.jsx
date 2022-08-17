import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FollowStatus from "../../components/FollowStatus/FollowStatus";
import axios from "axios";

import "./follow.Styles.scss";

const FollowProduct = () => {
  const [data, setData] = useState([]);

  const headers = {
    Authorization: "+a#nWVm.v=zCg&C7B[pfL)ehJt*L8D",
  };

  useEffect(() => {
    axios
      .get("https://api-rest-full-deliveries.herokuapp.com/orders", { headers }) // get all orders
      .then((res) => {
        setData(res.data.detalle);
      })
      .catch(console.err);
  }, []);

  console.log(data);
  const token = localStorage.getItem("token");

  return (
    <Container className="container-follow">
      <Row>
        <Col>
          <h2 className="follow-title my-4">Estado total del envío</h2>
        </Col>
      </Row>
      {data.map((item) => {
        return (
          <FollowStatus
            key={item.id}
            deliveryDate={item.order_date_order}
            packagingDate={item.paking_time_order}
            translateDate={item.transportation_time_order}
            shippingDate={"hola"}
          />
        );
      })}
    </Container>
  );
};

export default FollowProduct;
