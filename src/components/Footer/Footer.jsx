import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import imgDelivery from "../../assets/Messenger-bro.png";
import logo from "../../assets/logo.png";
// Styles
import "./Footer.Styles.scss";
const Footer = () => {
  return (
    <>
      <Row xl={12} className="container-footer">
        <Col
          xl={9}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h3 className="my-2">!Siguenos en nuestreas redes!</h3>
          <Col className="d-flex flex-row justify-content-center align-items-center">
            <a
              href="https://www.instagram.com/electricosdelvalle/"
              target="_blank"
            >
              <AiFillInstagram className="icon-ig mx-4 mb-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/electricosdelvalle/"
              target="_blank"
            >
              <BsFacebook className="icon-fb mx-4 mb-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100075822712887"
              target="_blank"
            >
              <FaLinkedin className="icon-li mx-4 mb-4" />
            </a>
          </Col>
        </Col>
        <Col xl={3}>
          <img
            src={logo}
            alt="img-delivery "
            width={150}
            height={150}
            className="my-3 rounded-pill"
          />
        </Col>
      </Row>
    </>
  );
};

export default Footer;
