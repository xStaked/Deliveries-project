import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./admin.Styles.scss";
import Alerts from "../Alerts/Alerts";
import axios from "axios";
const AdminOrder = ({
  id_order,
  productName,
  deliveryDate,
  packagingDate,
  translateDate,
  shippingDate,
  active,
}) => {
  const [ deliveryChange, setDeliveryChange ] = useState();
  const [ packingChange, setPackingChange ] = useState();
  const [ translateChange, setTranslateChange ] = useState();
  const [shippingChange, setShippingChange] = useState();
  const [ activeChange, setActiveChange ] = useState();
  const onChange = (e) => {
    setDataOrder({ ...dataOrder, [e.target.name]: parseInt(e.target.value) });
  };
  const headers = {
    'Authorization': "+a#nWVm.v=zCg&C7B[pfL)ehJt*L8D",
  };
  const onDeliveryChange = (e) => {
    setDeliveryChange(e.target.value);
  };
  const onPackingChange = (e) => {
    setPackingChange(e.target.value);
  };
  const onTranslateChange = (e) => {
    setTranslateChange(e.target.value);
  };
  const onShippingChange = (e) => {
    setShippingChange(e.target.value);
  };
  const onActiveChange = (e) => {
    setActiveChange(e.target.value);
  };
  const onSubmitUpdate = (e) => {
    onUpdate();
  };
  const onUpdate = () => {
    const data = new FormData();
    deliveryChange != undefined && data.append("order_date_order", deliveryChange);
    packingChange != undefined && data.append("packing_time_order", packingChange);
    translateChange != undefined && data.append("transportation_time_order", translateChange);
    shippingChange != undefined && data.append("delivery_time_order", shippingChange);
    activeChange != undefined && data.append("active_order", activeChange);
    const token = localStorage.getItem("token");
    const endpoint = `https://api-rest-full-deliveries.herokuapp.com/orders?id=${id_order}&nameId=id_order&token=${token}&tableToken=users&suffixToken=user`
    if (data.length > 0) {
      axios.put(
        endpoint,
        data,
        { headers }
      ).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    } else {
      <Alerts type="MethodAlert" />;
    };
  };
    const onDelete = () => {
    axios
      .delete(
        `https://api-rest-full-deliveries.herokuapp.com/orders?id=${id_order}&nameId=id_order&suffix=order&desactive=true&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbml0IjoxNjYxOTEyMTAyLCJleHAiOjE2NjE5OTg1MDIsImRhdGEiOnsiaWQiOjg0LCJlbWFpbCI6ImFkbWluQGRlbGV2ZXJpZXMudGsifX0.2M2e0MYX_IPxl9a6-ESwfx6TAHo9WU1auXDOqbJkXsw&tableToken=users&suffixToken=user`,
        { headers }
      )
      .then((res) => {
        console.log(res);
      })
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
                <Form.Control
                  name="order_date_order"
                  type="date"
                  onChange={onDeliveryChange}
                />
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
                  onChange={onPackingChange}
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
                  onChange={onTranslateChange}
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
                  onChange={onShippingChange}
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
                  onChange={onActiveChange}
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
          <Button variant="danger" onClick={onDelete}  className="my-2">
            {" "}
            Eliminar{" "}
          </Button>
        </Col>
      </div>
    </div>
  );
};

export default AdminOrder;
