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
}) => {
  const [data, setData] = useState({});
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const headers = {
    Authorization: "+a#nWVm.v=zCg&C7B[pfL)ehJt*L8D",
  };

  const onEdit = () => {
    axios.put( `https://api-rest-full-deliveries.herokuapp.com/relations?select=id_order,tracking_order,id_user_order,email_user,id_product_order,name_product,image_product,order_date_order,paking_time_order,transportation_time_order,delivery_time_order,active_order&rel=orders,products,users&type=order,product,user&linkTo=date_create_order&betweenIn=2022-08-01&betweenOut=2022-08-30&orderBy=id_order&orderMode=asc&startAt=0&endAt=10&filterTo=email_user&inTo=${email}'`, data, { headers }).then((res) => {
      console.log(res);
    })
  }
   
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
          <Button className="my-2"> Editar </Button>
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
