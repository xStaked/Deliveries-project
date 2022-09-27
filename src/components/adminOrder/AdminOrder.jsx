import React, { useState } from "react";
import { Col, Form, Button, Alert } from "react-bootstrap";
import "./admin.Styles.scss";
import axios from "axios";
const AdminOrder = ({
  id_order,
  productName,
  deliveryDate,
  packagingDate,
  translateDate,
  shippingDate,
  numProductOrder,
  active,
  delivered,
}) => {
  const [date, setDate] = useState();
  const [packingChange, setPackingChange] = useState();
  const [translateChange, setTranslateChange] = useState();
  const [shippingChange, setShippingChange] = useState();
  const [activeChange, setActiveChange] = useState();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [errorDelete, setErrorDelete] = useState(false);
  const [numberProduct, setNumberProduct] = useState();
  const [delerivedChange, setDelerivedChange] = useState();
  const headers = {
    Authorization: "+a#nWVm.v=zCg&C7B[pfL)ehJt*L8D",
  };
  const onDateChange = (e) => {
    setDate(e.target.value);
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

  const onDeliveryChange = (e) => {
    setDelerivedChange(e.target.value);
  };

  const onNumberChange = (e) => {
    setNumberProduct(e.target.value);
  };

  const onUpdate = () => {
    const data = new FormData();
    date != undefined
      ? data.append("order_date_order", date)
      : data.append("order_date_order", deliveryDate);
    packingChange != undefined
      ? data.append("packing_time_order", packingChange)
      : data.append("packing_time_order", packagingDate);
    translateChange != undefined
      ? data.append("transportation_time_order", translateChange)
      : data.append("transportation_time_order", translateDate);
    shippingChange != undefined
      ? data.append("delivery_time_order", shippingChange)
      : data.append("delivery_time_order", shippingDate);
    delerivedChange != undefined
      ? data.append("delivered_order", delerivedChange)
      : data.append("delivered_order", delivered);
    numProductOrder != undefined
      ? data.append("num_product_order", numberProduct)
      : data.append("num_product_order", numProductOrder);
    const token = localStorage.getItem("token");
    const endpoint = `https://api-electricosdelvalle.herokuapp.com/orders?id=${id_order}&nameId=id_order&token=${token}&tableToken=users&suffixToken=user`;
    axios
      .put(endpoint, data, { headers })
      .then((res) => {
        setShow(true);
      })
      .catch((err) => {
        setError(true);
      });
    setTimeout(() => {
      setError(false);
    }, 2000);
    setShow(false);
  };
  const onDelete = () => {
    const token = localStorage.getItem("token");
    axios
      .delete(
        `https://api-electricosdelvalle.herokuapp.com/orders?id=${id_order}&nameId=id_order&suffix=order&desactive=true&token=${token}&tableToken=users&suffixToken=user`,
        { headers }
      )
      .then((res) => {
        console.log(res);
        setErrorDelete(false);
      })
      .catch((err) => {
        setErrorDelete(true);
      });
    setTimeout(() => {
      setErrorDelete(false);
    }, 2000);
    setErrorDelete(false);
  };
  return (
    <div className="d-flex justify-content-center align-items-center  my-2 container-order">
      <div className="card-status">
        <div className="d-flex justify-content-evenly align-items-center card-up">
          <h5 className="product-name mx-2 text-center"> {productName} </h5>
          <Form className="d-flex  justify-content-evenly align-items-center form-order">
            <Col className="mx-4">
              <Form.Group className="d-flex flex-column justify-content-around align-items-center">
                <Form.Label className="title-status">
                  Fecha de la orden
                </Form.Label>
                <span className="title-pre">{deliveryDate}</span>
                <Form.Control
                  name="order_date_order"
                  type="date"
                  onChange={onDateChange}
                  disabled={delivered == 0}
                />
              </Form.Group>
            </Col>
            <Col className="mx-2">
              <Form.Group className="d-flex flex-column justify-content-around align-items-center">
                <Form.Label className="title-status">
                  Número de productos
                </Form.Label>
                <span className="title-pre">{numProductOrder} Productos</span>
                <Form.Control
                  name="num_product_order"
                  type="number"
                  placeholder="Número de productos"
                  onChange={onNumberChange}
                  disabled={delivered == 0}
                />
              </Form.Group>
            </Col>
            <Col className="mx-2">
              <Form.Group className="d-flex flex-column justify-content-around align-items-center">
                <Form.Label className="title-status">
                  Tiempo de empacado
                </Form.Label>
                <span className="title-pre">{packagingDate} Días</span>
                <Form.Control
                  name="paking_time_order"
                  type="number"
                  placeholder="Días"
                  onChange={onPackingChange}
                  disabled={delivered == 0}
                />
              </Form.Group>
            </Col>
            <Col className="mx-2">
              <Form.Group className="d-flex flex-column justify-content-around align-items-center">
                <Form.Label className="title-status">
                  Tiempo de translado
                </Form.Label>
                <span className="title-pre">{translateDate} Días</span>
                <Form.Control
                  name="transportation_time_order"
                  type="number"
                  placeholder="Días"
                  onChange={onTranslateChange}
                  disabled={delivered == 0}
                />
              </Form.Group>
            </Col>
            <Col className="mx-2">
              <Form.Group className="d-flex flex-column justify-content-around align-items-center">
                <Form.Label className="title-status">
                  Tiempo de entrega
                </Form.Label>
                <span className="title-pre">{shippingDate} Días</span>
                <Form.Control
                  name="delivery_time_order"
                  type="number"
                  placeholder="Días"
                  onChange={onShippingChange}
                  disabled={delivered == 0}
                />
              </Form.Group>
            </Col>
            <Col className="mx-2">
              <Form.Group className="d-flex flex-column justify-content-around align-items-center">
                <Form.Label className="title-status">Entregado</Form.Label>
                <span className="title-pre">
                  {delivered == 1 ? (
                    <span style={{ color: "red" }}>NO Entregado</span>
                  ) : (
                    "Entregado"
                  )}{" "}
                </span>
                <Form.Control
                  type="hidden"
                  as="select"
                  name="delivered_order"
                  defaultValue={delivered != 0 ? "1" : "0"}
                  onChange={onDeliveryChange}
                >
                  <option value="0">Si</option>
                  <option value="1">No</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form>
        </div>
        <Col className="d-flex flex-column justify-content-evenly align-items-center mx-3">
          {delivered == 1 && (
            <Button className="my-2" onClick={onUpdate}>
              {" "}
              Editar{" "}
            </Button>
          )}
          {active == 1 && delivered == 0 && (
            <Button variant="danger" onClick={onDelete} className="my-2">
              {" "}
              Eliminar{" "}
            </Button>
          )}

          {show && <Alert variant="success"> Actualización exitosa </Alert>}
          {error && (
            <Alert variant="danger">
              Error al actualizar, ingrese nuevamente
            </Alert>
          )}
          {showDelete && <Alert variant="success"> Eliminación exitosa </Alert>}
          {errorDelete && (
            <Alert variant="danger">
              Error al eliminar intente nuevamente{" "}
            </Alert>
          )}
        </Col>
      </div>
    </div>
  );
};

export default AdminOrder;
