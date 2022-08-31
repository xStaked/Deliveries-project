import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./admin.Styles.scss";
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
  const [dataOrder, setDataOrder] = useState({});
  const [ packingTime, setPackingTime ] = useState();
  const onChange = (e) => {
    setDataOrder({ ...dataOrder, [e.target.name]: parseInt(e.target.value) });
  };
  
  const headers = {
    'Authorization': "+a#nWVm.v=zCg&C7B[pfL)ehJt*L8D",
  };
  const onChangePackingTime = (e) => {
    setPackingTime(e.target.value);
  };
  const onSubmitUpdate = (e) => {
    onUpdate();
  };
  console.log(packingTime);
  const onUpdate = () => {
    const data = new FormData();
    data.append("order_date_order", deliveryDate);
    data.append("paking_time_order", packagingDate);
    data.append("transportation_time_order", translateDate);
    data.append("delivery_time_order", deliveryDate);
    data.append("active_order", active);
    console.log({...data });
    const token = localStorage.getItem("token");
    const endpoint = `https://api-rest-full-deliveries.herokuapp.com/orders?id=${id_order}&nameId=id_order&token=${token}&tableToken=users&suffixToken=user`
    axios.put(
      endpoint,
      data,
      { headers }
    ).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
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
                  onChange={onChange}
                  // onChange={ (e) => setPackagingTime(e.target.value) }
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
                  onChange={onChange}
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
                  onChange={onChange}
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
                  onChange={onChange}
                >
                  <option value="1">Si</option>
                  <option value="0">No</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form>
        </Row>
        <Col className="d-flex flex-column justify-content-evenly align-items-center mx-3">
          <Button className="my-2" onClick={onUpdate}> Editar </Button>
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
