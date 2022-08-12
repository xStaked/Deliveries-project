import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import addressIcon from "../../assets/contactICONS/Address.png";
import img1 from "../../assets/contactICONS/img1.png";
import img2 from "../../assets/contactICONS/img2.png";
import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import "./contact.Styles.scss";
const Contact = () => {
  return (
    <Container className="contact-container">
      <Row className="text-left m-3">
        <h2 className="contact-title">Contacto</h2>
      </Row>
      <Row className="d-flex justify-content-around addres-img">
        <Col className="d-flex flex-row justify-content-center align-items-center">
          <img src={addressIcon} alt="addressIcon" className="mx-4" />
          <div className="d-flex flex-column">
            <span className="location">Cali - Sede Sur</span>
            <span className="tel"> Tel: (602) 485 82 88 </span>
            <span className="horarios-1">
              {" "}
              <span className="horarios">Horarios</span> L-V: 8:00-12:45pm y
              2-4:45pm
            </span>
            <span className="horarios-2"> S: 8:00-12:45pm</span>
          </div>
        </Col>
        <Col>
          <img
            src={img1}
            alt="img1"
            width={585}
            height={495}
            className="img1"
          />
        </Col>
      </Row>
      <Row className="d-flex justify-content-around align-items-center">
        <Col className="m-2 d-flex justify-content-center align-items-center">
          <img src={addressIcon} alt="addressIcon" />
          <div className="d-flex flex-column">
            <span className="location">Cali- Sede centro</span>
            <span className="tel"> Tel: (602) 485 82 88 </span>
            <span className="horarios-1">
              <span className="horarios">Horarios</span> L-V: 8:00-12pm y
              1:30-5:00pm
            </span>
            <span className="horarios-2">S: 8:00-12:00pm</span>
          </div>
        </Col>
        <Col className="m-2 d-flex justify-content-center align-items-center">
          <img src={addressIcon} alt="addressIcon" />
          <div className="d-flex flex-column">
            <span className="location">Barranquilla, Atlantico</span>
            <span className="tel"> Tel: (605) 385 20 99 </span>
            <span className="horarios-1">
              <span className="horarios">Horarios</span> L-V: 8-12:30pm y
              1:30-5:15pm
            </span>
            <span className="horarios-2"> S: 8:00-12:00pm</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="m-5 d-flex justify-content-center align-items-center">
          <img src={addressIcon} alt="addressIcon" />
          <div className="d-flex flex-column">
            <span className="location">Pereira, Risaralda </span>
            <span className="tel"> Cel: (+57) 316 453 5301 </span>
            <span className="horarios-1">
              <span className="horarios">Horarios</span> L-V: 8-12:30pm y
              1:30-5:00pm
            </span>
            <span className="horarios-2"> S: 8:00-12:00pm</span>
          </div>
        </Col>
        <Col className="m-5 d-flex justify-content-center align-items-center">
          <img src={addressIcon} alt="addressIcon" />
          <div className="d-flex flex-column">
            <span className="location">Bogotá, Cundinamarca </span>
            <span className="tel"> Tel: (601) 745 73 12 </span>
            <span className="horarios-1">
              {" "}
              <span className="horarios">Horarios</span> L-V: 7:30-12:30pm y
              1:30-5pm
            </span>
            <span className="horarios-2"> S: 8:00-12:00pm</span>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <img src={img2} alt="img2" width={500} height={500}  className="img2"/>
        </Col>

        <Col >
            <h3 className="redes-title">Redes sociales</h3>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <a>
              <BsFacebook className="icon" />
            </a>
            <a>
              <FiInstagram className="icon" />
            </a>
            <a>
              <BsLinkedin className="icon" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
