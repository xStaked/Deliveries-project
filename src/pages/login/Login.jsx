import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import loginImg from "../../assets/loginIMG.png";
import vector from "../../assets/vector 3.png";
import axios from "axios";
// Styles
import "./Login.Styles.scss";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState("");
  const [auth, setAuth] = useState({});
  const [succes, setSucces] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // User Login info
  useEffect(() => {
    setErrorMessages("");
  },[email, password]);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
      // const response = await axios.post("https://api-rest-full-deliveries.herokuapp.com/users?login=true&suffix=use",
      // JSON.stringify({email_user: email, password_user: password}), {
      //   headers: { "Content-Type": "application/json" },
      //   withCredentials: true
      // }
      // );
      // console.log(JSON.stringify( response?.data ));
      // // const accessToken = response?.data?.token_user;
      // setAuth({ email, password, accessToken });
      // setSucces(true);
      const headers = { 
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
    };
      axios.post("https://api-rest-full-deliveries.herokuapp.com/users?login=true&suffix=use",{
        email, password
      })
      .then(response => {
        console.log(response.data);
        // setAuth({ email, password, accessToken: response.data.token_user });
        // setSucces(true);
      })
      .catch (error => {
        console.log(error);
        // setErrorMessages(error.response.data.message);
      })
    // }
    // catch (error) {
    
    //   if(error.response.status === 401) {
    //     setErrorMessages({
    //       email: "Email or password is incorrect",
    //     });
    //   }

    //   if(!error?.response) {
    //     setErrorMessages("No server response")
    //   }

    // }
  }

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
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
          onChange={onChangeEmail}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="form-control mb-3"
          required
          onChange={onChangePassword}
        />

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
          {succes ? <div>User is successfully logged in</div> : renderForm}
        </Row>
      </Container>
      ;
    </div>
  );
};
export default Login;
