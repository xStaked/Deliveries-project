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
import { Link } from "react-router-dom";
import "./admin.Styles.scss";
const Admin = () => {
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [width, setWidth] = useState();
  const [errorCreate, setErrorCreate] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const endpoint = `https://api-electricosdelvalle.herokuapp.com/relations?select=id_order,tracking_order,id_user_order,id_product_order,name_product,order_date_order,packing_time_order,transportation_time_order,delivery_time_order,delivered_order,active_order&rel=orders,products,users&type=order,product,user&linkTo=date_create_order&betweenIn=2022-08-01&betweenOut=2060-08-30&orderBy=id_order&orderMode=asc&startAt=0&endAt=27&filterTo=email_user&inTo="${
    email && email
  }"`;

  console.log(data);

  let dataFiltered = [...data];
  dataFiltered = dataFiltered.filter((item) => item.active_order === 1);

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
        setErrorCreate(true);
      });
  };

  console.log(error);

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
            <Link to="/admin/create">
              <Button variant="success">Crear</Button>
            </Link>
          </InputGroup>
          {error ? (
            <Alert variant="danger" className="my-2">
              No se encontraron resultados
            </Alert>
          ) : null}
        </Col>
        {dataFiltered &&
          dataFiltered.map((item) => {
            return (
              <AdminOrder
                productName={item.name_product}
                deliveryDate={item.order_date_order}
                packagingDate={item.packing_time_order}
                translateDate={item.transportation_time_order}
                shippingDate={item.delivery_time_order}
                numProductOrder={item.num_product_order}
                active={item.active_order}
                delivered={item.delivered_order}
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
