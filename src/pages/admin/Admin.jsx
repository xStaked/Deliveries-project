import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Modal,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import AdminOrder from "../../components/adminOrder/AdminOrder";
import axios from "axios";

import "./admin.Styles.scss";
const Admin = () => {
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [create, setCreate] = useState(false);
  const [createOrder, setCreateOrder] = useState({});

  console.log(createOrder);

  const handleChange = (e) => {
    setCreateOrder({ ...createOrder, [e.target.name]: e.target.value });
  };

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const endpoint = `https://api-rest-full-deliveries.herokuapp.com/relations?select=id_order,tracking_order,id_user_order,email_user,id_product_order,name_product,image_product,order_date_order,paking_time_order,transportation_time_order,delivery_time_order,active_order&rel=orders,products,users&type=order,product,user&linkTo=date_create_order&betweenIn=2022-08-01&betweenOut=2022-08-30&orderBy=id_order&orderMode=asc&startAt=0&endAt=10&filterTo=email_user&inTo='${
    email ? email : ""
  }'`;

  const headers = {
    Authorization: "+a#nWVm.v=zCg&C7B[pfL)ehJt*L8D",
  };

  const api = () => {
    axios.get(endpoint, { headers }).then((res) => {
      setData(res.data.response);
    });
  };

  console.log(data)


  return (
    <Container className="container-Admin">
      <Row className="d-flex flex-column justify-content-center align-items-center">
        <Col xl={6}>
          <h2 className="title">Dashboard</h2>

          <InputGroup>
            <Form.Control
              placeholder="Buscar email de usuario"
              aria-label="Search"
              aria-describedby="Search"
              onChange={onChange}
              className="mx-4"
            />
            <BsSearch
              onClick={api}
              style={{ color: "fff", borderRadius: "6px" }}
              className="search-icon"
            />

            <Button variant="success" onClick={() => setCreate(true)}>
              Crear
            </Button>
            <CreateOrder
              show={create}
              onHide={() => setCreate(false)}
              className="my-1"
              createOrder={createOrder}
              change={handleChange}
            />
          </InputGroup>
        </Col>
        {data &&
          data.map((item) => {
            return (
              <AdminOrder
                productName={item.name_product}
                deliveryDate={item.order_date_order}
                packagingDate={item.paking_time_order}
                translateDate={item.transportation_time_order}
                shippingDate={item.delivery_time_order}
                active={item.active_order}
                id_order={item.id_order}
              />
            );
          })}
      </Row>
    </Container>
  );
};

export default Admin;

function CreateOrder(props) {
  const { change, createOrder } = props;
  const headers = {
    Authorization: "+a#nWVm.v=zCg&C7B[pfL)ehJt*L8D",
  };
  // let token = localStorage.getItem("token");
  const endpoint = `https://api-rest-full-deliveries.herokuapp.com/orders?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbml0IjoxNjYxNzM1MTc3LCJleHAiOjE2NjE4MjE1NzcsImRhdGEiOnsiaWQiOjg0LCJlbWFpbCI6ImFkbWluQGRlbGV2ZXJpZXMudGsifX0.hTQuDS5qXBo0LblQFbMJrCzQuzgU7yD6Clx_BqsxVSk&tableToken=users&suffixToken=user`;

  const onClick = () => {
    const data = new FormData();
    data.append("tracking_order", createOrder.tracking_order);
    data.append("id_user_order", createOrder.id_user_order);
    data.append("id_product_order", createOrder.id_product_order);
    data.append("order_date_order", createOrder.order_date_order);
    data.append("paking_time_order", createOrder.paking_time_order);
    data.append(
      "transportation_time_order",
      createOrder.transportation_time_order
    );
    data.append("delivery_time_order", createOrder.delivery_time_order);
    data.append("active_order", createOrder.active_order);

    axios.post(endpoint, data, { headers }).then((res) => {
      console.log(res);
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onChange={change}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Crear orden
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4></h4>
        <Form.Group>
          <Form.Label>ID de la compra</Form.Label>
          <Form.Control name="tracking_order" type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Id se usuario</Form.Label>
          <Form.Control name="id_user_order" type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Id del producto a enviar</Form.Label>
          <Form.Control name="id_product_order" type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha de la orden</Form.Label>
          <Form.Control name="order_date_order" type="date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Tiempo de empacado</Form.Label>
          <Form.Control name="paking_time_order" type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Tiempo de translado</Form.Label>
          <Form.Control name="transportation_time_order" type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Tiempo de entrega</Form.Label>
          <Form.Control name="delivery_time_order" type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Entregado</Form.Label>
          <Form.Control as="select" name="active_order" defaultValue={0}>
            <option value={1}>Si</option>
            <option value={0}>No</option>
          </Form.Control>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>
          <span onClick={onClick}>Crear Orden</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}