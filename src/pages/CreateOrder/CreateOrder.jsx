import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./CreateOrder.Styles.scss";

import axios from "axios";
const CreateOrder = () => {
  const [createOrder, setCreateOrder] = useState({});
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCreateOrder({ ...createOrder, [e.target.name]: e.target.value });
  };

  const headers = {
    Authorization: "+a#nWVm.v=zCg&C7B[pfL)ehJt*L8D",
  };
  let token = localStorage.getItem("token");
  const endpoint = `https://api-electricosdelvalle.herokuapp.com/orders?token=${token}&tableToken=users&suffixToken=user`;

  const onClick = () => {
    const data = new FormData();
    data.append("tracking_order", createOrder.tracking_order);
    data.append("id_user_order", createOrder.id_user_order);
    data.append("id_product_order", createOrder.id_product_order);
    data.append("order_date_order", createOrder.order_date_order);
    data.append("num_product_order", createOrder.num_product_order);
    data.append("packing_time_order", createOrder.packing_time_order);
    data.append(
      "transportation_time_order",
      createOrder.transportation_time_order
    );
    data.append("delivery_time_order", createOrder.delivery_time_order);
    data.append("active_order", 1);
    axios
      .post(endpoint, data, { headers })
      .then(() => {
        setCreateOrder({});
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onClick();
  };

  useEffect(() => {
    const endpoint = `https://api-electricosdelvalle.herokuapp.com/users`;
    const endpointProducts = `https://api-electricosdelvalle.herokuapp.com/products`;
    axios
      .get(endpoint, { headers })
      .then((res) => {
        return setUsers(res.data.response);
      })
      .catch((err) => {
        console.warn(err);
      });
    axios
      .get(endpointProducts, { headers })
      .then((res) => {
        return setProducts(res.data.response);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <Container
      fluid
      style={{
        displa: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#1C1A20",
        height: "100vh",
      }}
    >
      <Row>
        <h2 className="text-center my-3 title-create">Crear Order</h2>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Form
            onChange={handleChange}
            onSubmit={onSubmit}
            className="d-flex flex-row flex-wrap  justify-content-evenly align-items-center"
          >
            <Form.Group className="mx-2" style={{ width: "550px" }}>
              <Form.Label className="label-create">ID de la compra</Form.Label>
              <Form.Control name="tracking_order" type="number" required />
            </Form.Group>
            <Form.Group className="mx-2" style={{ width: "550px" }}>
              <Form.Label className="label-create">Id se usuario</Form.Label>
              <Form.Control
                as="select"
                name="id_user_order"
                defaultValue={0}
                required
              >
                <option value={0} disabled>
                  {" "}
                </option>
                {users &&
                  users.map((item, ind) => (
                    <option value={item.id_user} key={ind}>
                      {" "}
                      {item.first_name_user} {"->"} {item.email_user}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mx-2" style={{ width: "550px" }}>
              <Form.Label className="label-create">
                Producto a enviar
              </Form.Label>
              <Form.Control
                as="select"
                name="id_product_order"
                defaultValue={0}
                required
              >
                <option value={0} disabled>
                  {" "}
                </option>
                {products &&
                  products.map((item, ind) => (
                    <option value={item.id_product} key={ind}>
                      {item.name_product}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mx-2" style={{ width: "550px" }}>
              <Form.Label className="label-create">
                Número de productos
              </Form.Label>
              <Form.Control name="num_product_order" type="number" required />
            </Form.Group>
            <Form.Group className="mx-2" style={{ width: "550px" }}>
              <Form.Label className="label-create">
                Fecha de la orden
              </Form.Label>
              <Form.Control name="order_date_order" type="date" required />
            </Form.Group>
            <Form.Group className="mx-2" style={{ width: "550px" }}>
              <Form.Label className="label-create">
                Tiempo de empacado
              </Form.Label>
              <Form.Control name="packing_time_order" type="number" required />
            </Form.Group>
            <Form.Group className="mx-2" style={{ width: "550px" }}>
              <Form.Label className="label-create">
                Tiempo de translado
              </Form.Label>
              <Form.Control
                name="transportation_time_order"
                type="number"
                required
              />
            </Form.Group>
            <Form.Group className="mx-2" style={{ width: "550px" }}>
              <Form.Label className="label-create">
                {" "}
                Tiempo de entrega
              </Form.Label>
              <Form.Control name="delivery_time_order" type="number" required />
            </Form.Group>
            <Form.Group
              className="mx-2 d-flex justify-content-center"
              style={{ width: "550px" }}
            >
              <Button
                type="submit"
                variant="success"
                className="my-4"
                style={{ width: "350px" }}
              >
                <span>Crear Orden</span>
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateOrder;
