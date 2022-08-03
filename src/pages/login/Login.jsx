import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import loginImg from "../../assets/loginIMG.png";
import vector from "../../assets/vector 3.png";

// Styles
import "./Login.Styles.scss";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <Col
      xl={5}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h3 className="title-login">Login</h3>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <input
          type="text"
          placeholder="Nombre de Usuario"
          className="form-control mb-3"
          required
        />
        {renderErrorMessage("uname")}

        <input
          type="password"
          placeholder="Contraseña"
          className="form-control mb-3"
          required
        />
        {renderErrorMessage("pass")}

        <input
          type="submit"
          value="Iniciar sesión"
          className="form-control mb-3 login-button"
        />
      </form>
      <p>¿No tienes cuenta? </p>
      {/* <Link to="register">Register</Link> */}
    </Col>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
      </div>
      <Container>
        <Row>
          <Col xl={5}>
            <img src={loginImg} alt="loginImg" />
          </Col>
          <Col xl={1}>
            <img src={vector} alt="vector" />
          </Col>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}

        </Row>
      </Container>
      ;
    </div>
  );
};
export default Login;
