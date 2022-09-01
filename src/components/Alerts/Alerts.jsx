import React from "react";
import { Alert } from "react-bootstrap";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./alert.Styles.scss";
const Alerts = ({ type }) => {
  return (
    <>
      {type === "success" && <SuccesAlert />}
      {type === "danger" && <DangerAlert />}
      {type === "method" && <MethodAlert />}
      {type === "registerSuccess" && <RegisterSucces />}
      {type === "registerDanger" && <RegisterDanger />}
    </>
  );
};

export default Alerts;

const SuccesAlert = () => {
  return (
    <Alert id="success">
      <AiFillCheckCircle className="success" />
      LOGEADO !BIENVENIDO!
    </Alert>
  );
};

const DangerAlert = () => {
  return (
    <Alert id="danger">
      <AiOutlineCloseCircle className="danger" />
      ERROR AL ¡LOGEARSE!
    </Alert>
  );
};

const RegisterSucces = () => {
  return (
    <Alert id="success">
      <AiFillCheckCircle className="success" />
      REGISTRADO !BIENVENIDO!
    </Alert>
  );
};

const RegisterDanger = () => {
  return (
    <Alert id="danger">
      <AiOutlineCloseCircle className="danger" />
      ERROR AL ¡REGISTRARSE!
    </Alert>
  );
};

const MethodAlert = () => {
  return (
    <Alert id="method">
      <AiOutlineCloseCircle className="danger" />
      ERROR EN EL ¡METODO!
    </Alert>
  );
};
