import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./admin.Styles.scss";
import axios from "axios";
const AdminOrder = ({
  deliveryDate,
  packagingDate,
  translateDate,
  shippingDate,
  productName,
  active,
  id_user,
}) => {
  const [dataOrder, setDataOrder] = useState({});
  const onChange = (e) => {
    setDataOrder({ ...dataOrder, [e.target.name]: e.target.value });
  };

  const headers = {
    Authorization: "+a#nWVm.v=zCg&C7B[pfL)ehJt*L8D",
  };

  const onSubmitUpdate = (e) => {
    e.preventDefault();
    onUpdate();
  };

  const onUpdate = () => {
    const data = new FormData();
    // data.append("delivery_time_order", dataOrder.delivery_time_order);

    // data.append("id_user_order", dataOrder.id_user_order);
    // data.append("id_product_order", dataOrder.id_product_order);
    // data.append("order_date_order", dataOrder.order_date_order);
    data.append("paking_time_order", dataOrder.paking_time_order);
    // data.append("transportation_time_order", dataOrder.transportation_time_order);
    // data.append("active_order", dataOrder.active_order);
    const token = localStorage.getItem("token");
    console.log(data);
    const endpoint = `https://api-rest-full-deliveries.herokuapp.com/orders?id=${id_user}&nameId=id_order&token=${token}&tableToken=users&suffix=user`
// 
    axios
      .put(
        endpoint,
        data,
        { headers }
      )
      .then((res) => {
        console.log(res);
      });
  };

  console.log(dataOrder);

  const onSubmitDelete = (e) => {
    e.preventDefault();
    onDelete();
  };
  const onDelete = () => {
    axios
      .delete(
        `https://api-rest-full-deliveries.herokuapp.com/orders?id=${id_user}&nameId=id_order&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbml0IjoxNjYxMTMyNjcxLCJleHAiOjE2NjEyMTkwNzEsImRhdGEiOnsiaWQiOjg0LCJlbWFpbCI6ImFkbWluQGRlbGV2ZXJpZXMudGsifX0.U4pH28b_J9RDZvetVSNB1GJtdHACJmoYRN54tYAP8Ho&tableToken=users&suffix=user`,
        { headers }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex justify-content-center align-items-center  my-2">
      <Row className="d-flex flex-column justify-content-center align-items-center"></Row>
      <div className="card-status">
        <Row className="d-flex justify-content-evenly align-items-center">
          <h5 className="product-name mx-2 text-center"> {productName} </h5>
          <Form
            onChange={onChange}
            className="d-flex flex-row justify-content-evenly align-items-center"
          >
            <Col className="mx-4">
              <Form.Group className="d-flex flex-column justify-content-around align-items-center">
                <Form.Label className="title-status">
                  Fecha de la orden
                </Form.Label>
                <span className="title-status">{deliveryDate}</span>

                <Form.Control name="order_date_order" type="date" />
              </Form.Group>
            </Col>
            <Col className="mx-2">
              <Form.Group className="d-flex flex-column justify-content-around align-items-center">
                <Form.Label className="title-status">
                  Tiempo de empacado
                </Form.Label>
                <span className="title-status">{packagingDate} Días</span>

                <Form.Control
                  name="paking_time_order"
                  type="number"
                  placeholder="Días"
                />
              </Form.Group>
            </Col>
            <Col className="mx-2">
              <Form.Group className="d-flex flex-column justify-content-around align-items-center">
                <Form.Label className="title-status">
                  Tiempo de translado
                </Form.Label>
                <span className="title-status">{translateDate} Días</span>

                <Form.Control
                  name="transportation_time_order"
                  type="number"
                  placeholder="Días"
                />
              </Form.Group>
            </Col>
            <Col className="mx-2">
              <Form.Group className="d-flex flex-column justify-content-around align-items-center">
                <Form.Label className="title-status">
                  Tiempo de entrega
                </Form.Label>
                <span className="title-status">{shippingDate} Días</span>

                <Form.Control
                  name="delivery_time_order"
                  type="number"
                  placeholder="Días"
                />
              </Form.Group>
            </Col>
            <Col className="mx-2">
              <Form.Group className="d-flex flex-column justify-content-around align-items-center">
                <Form.Label className="title-status">Entregado</Form.Label>
                <span className="title-status">
                  {active == 0 ? `NO Entregado` : "Entregado"}{" "}
                </span>

                <Form.Control
                  as="select"
                  name="active_order"
                  defaultValue={active != 0 ? "1" : "0"}
                >
                  <option value="1">Si</option>
                  <option value="0">No</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form>
        </Row>
        <Col className="d-flex flex-column justify-content-evenly align-items-center mx-3">
          <Button className="my-2" onClick={onSubmitUpdate}> Editar </Button>
          <Button variant="danger" className="my-2">
            {" "}
            Eliminar{" "}
          </Button>
        </Col>
      </div>
    </div>
  );
};

export default AdminOrder;
