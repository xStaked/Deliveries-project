import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import loginImg from "../../assets/loginIMG.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// Styles
import "./Login.Styles.scss";
import Alerts from "../../components/Alerts/Alerts";

const Login = () => {
  const [succes, setSucces] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState();
  const [alert, setSetAlert] = useState();
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  let navigate = useNavigate();
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailTest = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(
      email
    );

    if (!emailTest) {
      setError("Email invalido");
      return;
    } else {
      setError("");
    }

    login();
  };
  const endPoint =
    "https://api-electricosdelvalle.herokuapp.com/users?login=true&suffix=use";

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
      .catch(() => {
        setSetAlert(true);
      });
    setSetAlert(false);
  };

  useEffect(() => {
    if (response) {
      localStorage.setItem("token", response?.response[0].token_user);
      localStorage.setItem("id", response?.response[0].id_user);
      localStorage.setItem("id_rol", response?.response[0].id_rol_user);
      if (response.response[0].id_rol_user == 4) {
        navigate("/admin");
      } else {
        window.location.reload();
      }
      window.location.reload();
    }
  }, [response]);

  // JSX code for login form
  const renderForm = (
    <>
      {!token ? (
        <>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="title-login">Login</h3>
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <input
                // type="email"
                placeholder="Correo electronico"
                className="form-control mb-3"
                name="email_user"
                onChange={onChangeEmail}
              />

              {error && (
                <span
                  style={{
                    color: "red",
                    marginTop: "-.5rem",
                    marginBottom: ".5rem",
                  }}
                >
                  {" "}
                  {error}{" "}
                </span>
              )}
              <input
                type="password"
                placeholder="Contraseña"
                className="form-control mb-3"
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
              <Link to="/register" className="text-center text-decoration-none">
                <span className="register-log">Register</span>
              </Link>
            </div>
          </Col>
          {alert && (
            <Alert variant="danger">Usuario o contraseña incorrectos</Alert>
          )}
        </>
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
