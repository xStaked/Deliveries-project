import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import signUp from "../../assets/signup.png";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.Styles.scss";
const Register = () => {
  const RenderRegister = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

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
      postRegister();
    };

    console.log(
      email
    )

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
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="title-login">Registro</h3>
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
            onChange={handleChangeEmail}
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="form-control mb-3"
            required
            name="password_user"
            onChange={handleChangePassword}
          />

          <input
            type="password"
            placeholder="Confirmar Contraseña"
            className="form-control mb-3"
            required
            name="password_user"
            onChange={handleChangePasswordConfirm}
          />

          <input
            type="submit"
            value="Registrar"
            className="form-control mb-3 login-button"
            disabled={!(password === passwordConfirm)}
          />
        </form>
        <div className="d-flex flex-row justify-content-center text-contain">
          <p className="mx-3 qa">¿Ya tienes cuenta? </p>
          <Link to="/login" className="text-center text-decoration-none">
            <span className="register-log">Login</span>
          </Link>
        </div>
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
