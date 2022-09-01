import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import logo from "../../assets/logo.png";
// Styles
import "./Navbar.Styles.scss";
import { useEffect } from "react";
import { useState } from "react";

const NavbarComponent = ({ children }) => {
  const [token, setToken] = useState();

  const navigate = useNavigate();
  const removeToken = async () => {
    await localStorage.removeItem("token");
    await localStorage.removeItem("id");
    navigate("/", { replace: true });
    window.location.reload();
  };

  useEffect(() => {
    window.localStorage.getItem("token") ? setToken(true) : setToken(false);
  }, []);

  return (
    <>
      {/* <NavLogin children={children} removeToken={removeToken} /> */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="link">
              Incio
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="nosotros">
                {/* <Link to="nosotros" className="link"> */}
                  Nosotros
                {/* </Link> */}
              </Nav.Link>
              <Nav.Link href="contacto">
                {/* <Link to={"contacto"} className="link"> */}
                  Contactanos
                {/* </Link> */}
              </Nav.Link>
            </Nav>
            {/* <Nav>
              <Nav.Link>
                {" "}
                <img src={'src/assets/output-onlinepngtools.png'} alt="logo" width={200} height={110} />{" "}
              </Nav.Link>
            </Nav> */}
            {token ? (
              <Nav className="d-flex flex-column justify-content-center align-items-center">
                <Nav>
                  <Link
                    to="followProduct"
                    className="shipping my-2 text-center"
                  >
                    <TbTruckDelivery className="shipping-icon" />
                    <span className="shipping-text mx-1">
                      Seguir tu producto
                    </span>
                  </Link>
                </Nav>
                <Nav>
                  <Link
                    to="home"
                    className="logout my-2 text-center"
                    onClick={removeToken}
                  >
                    <FiLogOut className="logout-icon" />
                    <span className=" text-center">Salir</span>
                  </Link>
                </Nav>
              </Nav>
            ) : (
              <Nav className="d-flex flex-column justify-content-center align-items-center">
                <Nav>
                  <Nav.Link className="login text-center mx-2" href="login">
                    {" "}
                    <BsFillArrowRightCircleFill className="login-icon mx-1" />{" "}
                    {/* <Link to="login" className="link"> */}
                      <span className="text-login">Login</span>
                    {/* </Link> */}
                  </Nav.Link>
                  <Nav.Link className="register text-center" href="register">
                    <BsFillArrowLeftCircleFill className="register-icon mx-1" />
                    {/* <Link to="register"> */}
                      <span className="register-text">Register</span>
                    {/* </Link> */}
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Link
                    to="followProduct"
                    className="shipping my-2 text-center"
                  >
                    <TbTruckDelivery className="shipping-icon" />
                    <span className="shipping-text mx-1">
                      Seguir tu producto
                    </span>
                  </Link>
                </Nav>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
};

export default NavbarComponent;

