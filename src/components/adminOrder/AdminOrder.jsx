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
}) => {
  const [deliveryChange, setDeliveryChange] = useState();
  const [packingChange, setPackingChange] = useState();
  const [translateChange, setTranslateChange] = useState();
  const [shippingChange, setShippingChange] = useState();
  const [activeChange, setActiveChange] = useState();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [errorDelete, setErrorDelete] = useState(false);
  const [numberProduct, setNumberProduct] = useState();
  const headers = {
    Authorization: "+a#nWVm.v=zCg&C7B[pfL)ehJt*L8D",
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

  const onNumberChange = (e) => {
    setNumberProduct(e.target.value);
  };

  const onUpdate = () => {
    const data = new FormData();
    deliveryChange != undefined
      ? data.append("order_date_order", deliveryChange)
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
    activeChange != undefined
      ? data.append("active_order", activeChange)
      : data.append("active_order", active);
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
                  onChange={onDeliveryChange}
                  disabled={active == 0}
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
                  disabled={active == 0}
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
                  disabled={active == 0}
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
                  disabled={active == 0}
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
                  disabled={active == 0}
                />
              </Form.Group>
            </Col>
            <Col className="mx-2">
              <Form.Group className="d-flex flex-column justify-content-around align-items-center">
                <Form.Label className="title-status">Entregado</Form.Label>
                <span className="title-pre">
                  {active == 1 ? (
                    <span style={{ color: "red" }}>NO Entregado</span>
                  ) : (
                    "Entregado"
                  )}{" "}
                </span>
                {/* <Form.Control
                  type="hidden"
                  as="select"
                  name="active_order"
                  defaultValue={active != 0 ? "1" : "0"}
                  onChange={onActiveChange}
                >
                  <option value="1">Si</option>
                  <option value="0">No</option>
                </Form.Control> */}
              </Form.Group>
            </Col>
          </Form>
        </div>
        <Col className="d-flex flex-column justify-content-evenly align-items-center mx-3">
          {active == 1 && (
            <Button className="my-2" onClick={onUpdate}>
              {" "}
              Editar{" "}
            </Button>
          )}
          {active == 1 && (
            <Button variant="success" onClick={onDelete} className="my-2">
              {" "}
              Entregado{" "}
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
