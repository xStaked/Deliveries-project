import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import signUp from "../../assets/signup.png";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.Styles.scss";
const Register = () => {
  const RenderRegister = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [alert, setAlert] = useState();
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPass, setErrorPass] = useState("");
    const handleChangeEmail = (e) => {
      setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
      setPassword(e.target.value);
    };
    const handleChangePasswordConfirm = (e) => {
      setPasswordConfirm(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        email
      );
      if (!emailTest) {
        setErrorEmail("Email invalido");
        return;
      } else {
        setErrorEmail("");
      }
      const passTest = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);
      if (!passTest) {
        setErrorPass("Contraseña invalida");
        return;
      } else {
        setErrorPass("");
      }
      if (password !== passwordConfirm) {
        setErrorPass("Las contraseñas no coinciden");
        return;
      } else {
        setErrorPass("");
      }

      postRegister();
    };

    const endpoint =
      "https://api-rest-full-deliveries.herokuapp.com/users?register=true&suffix=user";

    const headers = {
      Authorization: "+a#nWVm.v=zCg&C7B[pfL)ehJt*L8D",
    };

    const postRegister = () => {
      const data = new FormData();
      data.append("email_user", email);
      data.append("password_user", password);
      axios
        .post(endpoint, data, { headers })
        .then((res) => {
          setAlert(true);
        })
        .catch((err) => {
          setAlert(false);
        });
      setAlert(null);
    };

    return (
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="title-login">Registro</h3>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <input
            placeholder="Correo electronico"
            className="form-control mb-3"
            name="email_user"
            onChange={handleChangeEmail}
          />

          {errorEmail && (
            <span
              style={{
                color: "red",
                marginTop: "-.5rem",
                marginBottom: ".5rem",
              }}
            >
              {" "}
              {errorEmail}{" "}
            </span>
          )}

          <input
            type="password"
            placeholder="Contraseña"
            className="form-control mb-3"
            name="password_user"
            onChange={handleChangePassword}
          />
          {errorPass && (
            <span
              style={{
                color: "red",
                marginTop: "-.5rem",
                marginBottom: ".5rem",
              }}
            >
              {" "}
              {errorPass}{" "}
            </span>
          )}
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            className="form-control mb-3"
            name="password_user"
            onChange={handleChangePasswordConfirm}
          />

          {errorPass && (
            <span
              style={{
                color: "red",
                marginTop: "-.5rem",
                marginBottom: ".5rem",
              }}
            >
              {" "}
              {errorPass}{" "}
            </span>
          )}
          <input
            type="submit"
            value="Registrar"
            className="form-control mb-3 login-button"
            disabled={!(password === passwordConfirm)}
          />
          {password !== passwordConfirm ? (
            <p
              className="match-pass"
              style={{
                color: "red",
                marginTop: "-.5rem",
                marginBottom: ".5rem",
              }}
            >
              {" "}
              Las contaseñas deben ser iguales{" "}
            </p>
          ) : null}
        </form>
        <div className="d-flex flex-row justify-content-center text-contain">
          <p className="mx-3 qa">¿Ya tienes cuenta? </p>
          <Link to="/login" className="text-center text-decoration-none">
            <span className="register-log">Login</span>
          </Link>
        </div>
        {alert ? (
          <Alert variant="success">Registro exitoso</Alert>
        ) : alert != null && alert != true ? (
          <Alert variant="danger">Error al registrar</Alert>
        ) : null}
      </Col>
    );
  };

  return (
    <div className="container-register">
      <Container>
        <Row>
          <Col
            xl={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={signUp} alt="signUp" className="singupImg" />
          </Col>
          <Col
            xl={6}
            className="d-flex flex-row justify-content-around align-items-center"
          >
            <RenderRegister />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
