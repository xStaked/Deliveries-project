import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb"
import { Link } from "react-router-dom"
// Styles
import "./Navbar.Styles.scss";

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="nosotros">Nosotros</Link>
            <Nav.Link href={"about"}>Contactanos</Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link>
              {" "}
              <img src="" alt="logo" />{" "}
            </Nav.Link>
          </Nav> */}
          <Nav className="d-flex flex-column justify-content-center align-items-center">
            <Nav>
            <Nav.Link href="#deets" className="login text-center mx-2">
              {" "}
              <BsFillArrowRightCircleFill className="login-icon mx-1" />{" "}
              <span className="text-login">Login</span>
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="#memes"
              className="register text-center"
            >
              <BsFillArrowLeftCircleFill className="register-icon mx-1" />
              <span className="register-text">Register</span>
            </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes" className="shipping my-2 text-center">
                <TbTruckDelivery className="shipping-icon"/>
                <span className="shipping-text mx-1">Seguir tu producto</span>
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
