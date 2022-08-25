import React, { useState, useEffect } from "react";
import { Container, Row, Col, Placeholder } from "react-bootstrap";
import loginImg from "../../assets/loginIMG.png";
import { Link } from "react-router-dom";
import axios from "axios";
// Styles
import "./Login.Styles.scss";
import Alerts from "../../components/Alerts/Alerts";

const Login = () => {
  const [succes, setSucces] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState();
  const token = localStorage.getItem("token");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    // <Placeholder as="p" animation="grow" variant="dark" />;
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
        setResponse(res.data);
      })
      .catch(console.err);
  };

  useEffect(() => {
    if (response) {
      localStorage.setItem("token", response.detalle[0].token_user);
      localStorage.setItem("id", response.detalle[0].id_user);
    }
  }, [response]);

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
        <Alerts type="success" />
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
            {succes ? <Alerts type="success" /> : renderForm}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
