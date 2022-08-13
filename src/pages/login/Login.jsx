import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import loginImg from "../../assets/loginIMG.png";
import { Link } from "react-router-dom";
import axios from "axios";
// Styles
import "./Login.Styles.scss";
import AlertComponent from "../../components/Carousel/AlertComponent";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState("");
  const [succes, setSucces] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const token = localStorage.getItem("token");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    login();
  };
  const endPoint =
    "https://api-rest-full-deliveries.herokuapp.com/users?login=true&suffix=use";

  const headers = {
    Authorization: "+a#nWVm.v=zCg&C7B[pfL)ehJt*L8D",
  };
  const login = () => {
    const data = new FormData();
    data.append("email_user", email);
    data.append("password_user", password);
    axios
      .post(endPoint, data, { headers })
      .then((res) => {
        setSucces(true);
        localStorage.setItem("token", res.data.detalle[0].token_user);
        localStorage.setItem("user", JSON.stringify(res.data.detalle[0]));
      })
      .catch(console.err);
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <>
      {!token ? (
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <h3 className="title-login">Login</h3>
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <input
              type="text"
              placeholder="Correo electronico"
              className="form-control mb-3"
              name="email_user"
              required
              onChange={onChangeEmail}
            />

            <input
              type="password"
              placeholder="Contraseña"
              className="form-control mb-3"
              required
              name="password_user"
              onChange={onChangePassword}
            />

            <input
              type="submit"
              value="Iniciar sesión"
              className="form-control mb-3 login-button"
            />
          </form>
          <div className="d-flex flex-row justify-content-center text-contain">
            <p className="mx-3 qa">¿No tienes cuenta? </p>
            <Link to="register" className="text-center text-decoration-none">
              <span className="register-log">Register</span>
            </Link>
          </div>
        </Col>
      ) : (
        <AlertComponent />
      )}
    </>
  );

  return (
    <div className="login-container">
      <Container>
        <Row>
          <Col
            xl={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={loginImg} alt="loginImg" className="loginImg" />
          </Col>
          <Col
            xl={6}
            className="d-flex flex-row justify-content-around align-items-center"
          >
            {succes ? <AlertComponent /> : renderForm}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
