import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Modal,
  Alert,
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
  const [error, setError] = useState(false);
  const [width, setWidth] = useState();
  const [errorCreate, setErrorCreate] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  const handleChange = (e) => {
    setCreateOrder({ ...createOrder, [e.target.name]: e.target.value });
  };

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const endpoint = `https://api-rest-full-deliveries.herokuapp.com/relations?select=id_order,tracking_order,id_user_order,email_user,id_product_order,name_product,image_product,order_date_order,packing_time_order,transportation_time_order,delivery_time_order,active_order&rel=orders,products,users&type=order,product,user&linkTo=date_create_order&betweenIn=2022-08-01&betweenOut=2022-08-30&orderBy=id_order&orderMode=asc&startAt=0&endAt=10&filterTo=email_user&inTo='${
    email ? email : ""
  }'`;

  const headers = {
    Authorization: "+a#nWVm.v=zCg&C7B[pfL)ehJt*L8D",
  };

  const api = () => {
    setData([]);
    axios
      .get(endpoint, { headers })
      .then((res) => {
        setData(res.data.response);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <Container
      className="container-Admin"
      style={data.length > 0 ? { height: "100%" } : { border: "0" }}
    >
      <Row className="d-flex flex-column justify-content-center align-items-center admin">
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
              // createOrder={createOrder}
              // change={handleChange}
              setErrorCreate={setErrorCreate}
            />
          </InputGroup>
          {error ? (
            <Alert variant="danger" className="my-2">
              No se encontraron resultados
            </Alert>
          ) : null}
        </Col>
        {data &&
          data.map((item) => {
            return (
              <AdminOrder
                productName={item.name_product}
                deliveryDate={item.order_date_order}
                packagingDate={item.packing_time_order}
                translateDate={item.transportation_time_order}
                shippingDate={item.delivery_time_order}
                active={item.active_order}
                id_order={item.id_order}
              />
            );
          })}
      </Row>
      {errorCreate && <Alert variant="danger" />}
    </Container>
  );
};

export default Admin;

function CreateOrder(props) {
  const [createOrder, setCreateOrder] = useState({});
  const { setErrorCreate } = props;

  const handleChange = (e) => {
    setCreateOrder({ ...createOrder, [e.target.name]: e.target.value });
  };

  const headers = {
    Authorization: "+a#nWVm.v=zCg&C7B[pfL)ehJt*L8D",
  };
  let token = localStorage.getItem("token");
  const endpoint = `https://api-rest-full-deliveries.herokuapp.com/orders?token=${token}&tableToken=users&suffixToken=user`;

  const onClick = () => {
    const data = new FormData();
    data.append("tracking_order", createOrder.tracking_order);
    data.append("id_user_order", createOrder.id_user_order);
    data.append("id_product_order", createOrder.id_product_order);
    data.append("order_date_order", createOrder.order_date_order);
    data.append("packing_time_order", createOrder.packing_time_order);
    data.append(
      "transportation_time_order",
      createOrder.transportation_time_order
    );
    data.append("delivery_time_order", createOrder.delivery_time_order);
    data.append("active_order", createOrder.active_order);
    //post
    axios
      .post(endpoint, data, { headers })
      .then((res) => {
        console.log(res);
        setErrorCreate(true);
        localStorage.setItem("res", createOrder);
      })
      .catch((err) => {
        console.log(err);
        localStorage.setItem("err", createOrder);
      });
    setErrorCreate(false);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onChange={handleChange}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Crear orden
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>ID de la compra</Form.Label>
            <Form.Control name="tracking_order" type="number" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Id se usuario</Form.Label>
            <Form.Control name="id_user_order" type="number" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Id del producto a enviar</Form.Label>
            <Form.Control name="id_product_order" type="number" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha de la orden</Form.Label>
            <Form.Control name="order_date_order" type="date" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tiempo de empacado</Form.Label>
            <Form.Control name="packing_time_order" type="number" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tiempo de translado</Form.Label>
            <Form.Control
              name="transportation_time_order"
              type="number"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tiempo de entrega</Form.Label>
            <Form.Control name="delivery_time_order" type="number" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Entregado</Form.Label>
            <Form.Control
              as="select"
              name="active_order"
              defaultValue={0}
              required
            >
              <option value={1}>Si</option>
              <option value={0}>No</option>
            </Form.Control>
            <Button type="submit" variant="success" className="my-1">
              <span onClick={onClick}>Crear Orden</span>
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
