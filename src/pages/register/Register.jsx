import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import signUp from "../../assets/signup.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./register.Styles.scss";
const Register = () => {
  const RenderRegister = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [alert, setAlert] = useState();

    const handleChangeEmail = (e) => {
      setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
      setPassword(e.target.value);
    };
    const handleChangePasswordConfirm = (e) => {
      setPasswordConfirm(e.target.value);
    };

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   postRegister();
    // };

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

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = () => {
      postRegister();
    };

    return (
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="title-login">Registro</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <input
            {...register("email", { required: true })}
            placeholder="Correo electronico"
            className="form-control mb-3"
            name="email_user"
            onChange={handleChangeEmail}
          />
          {errors.email && (
            <span className="text-danger" style={{ marginTop: "-1rem" }}>
              El email es requerido
            </span>
          )}

          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Contraseña"
            className="form-control mb-3"
            name="password_user"
            onChange={handleChangePassword}
          />
          {errors.password && (
            <span className="text-danger" style={{ marginTop: "-1rem" }}>
              La contraseña es requerida
            </span>
          )}

          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Confirmar Contraseña"
            className="form-control mb-3"
            name="password_user"
            onChange={handleChangePasswordConfirm}
          />
          {errors.password && (
            <span className="text-danger" style={{ marginTop: "-1rem" }}>
              La contraseña es requerida
            </span>
          )}

          <input
            type="submit"
            value="Registrar"
            className="form-control mb-3 login-button"
            disabled={!(password === passwordConfirm)}
          />
          {password !== passwordConfirm ? (
            <p className="match-pass"> Las contaseñas deben ser iguales </p>
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
