import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutimg from "../../assets/aboutImg.png";
import { Card } from "react-bootstrap";

// Styles
import "./about.Styles.scss";
const About = () => {
  //className="d-flex flex-row justify-content-center align-items-center"
  return (
    <Container className="container-about">
      <Row xl={12} className="about-section-1">
        <Row xl={12}>
          <Col>
            <h2 className="mx-2 title-about">Nosotros</h2>
          </Col>
        </Row>
        <Row xl={12}>
          <Col xl={6}>
            <p className="mx-2 descrip-about">
              Somos profesionales en la distribución de productos eléctricos de
              alta, media y baja tensión, telecomunicaciones y cableado UTP
              estructurado en Cali y otras ciudades de Colombia. Eléctricos del
              Valle S.A, es una empresa certificada conforme a la norma ISO
              9001:2015; Empleamos alrededor de 150 personas altamente
              calificadas con operaciones en las ciudades de Cali, Barranquilla,
              Bogotá, Pereira y sus respectivos entornos. Somos importadores de
              productos de alta calidad y representantes de las marcas más
              prestigiosas en electricidad y telecomunicaciones y líderes en en
              la prestación del servicio de cableado UTP estructurado en Cali y
              a nivel nacional. Por ese motivo, para las personas que estén
              buscando una empresa especialista en soluciones para cableado UTP
              estructurado en Cali y en otras ciudades del país, Eléctricos del
              Valle S.A es su mejor opción.
            </p>
          </Col>
          <Col
            xl={6}
            className="d-flex justify-content-center align-items-start"
          >
            <img
              src={aboutimg}
              alt="about-img"
              width={585}
              height={715}
              className="img-about d-block"
            />
          </Col>
        </Row>
      </Row>

      <div className="container-section-2 my-5">
        <Card xl={6} className="mision-container">
          <Card.Title className="mision"> <span className="text-center">Mision</span> </Card.Title>
          <Card.Text xl={6} className="mision-descrip">
           <p className="text-center">
           Eléctricos del Valle S.A suministra productos, servicios y
            soluciones innovadoras para el Sector Eléctrico y de
            Telecomunicaciones, con disponibilidad y variedad de mercancía de
            excelente calidad, propiciando crecimiento a sus accionistas,
            Card.Textaboradores, clientes y proveedores, basado en una labor de
            mejoramiento continuo en cada una de sus operaciones y con personal
            calificado y comprometido en el desempeño de sus funciones. Las
            operaciones empresariales se realizan dentro de un esquema de
            transparencia y seguridad para el Estado, la Comunidad y el Medio
            Ambiente.
           </p>
          </Card.Text>
        </Card>
        <Card xl={6} className="vision-container">
          <Card.Title className="vision"><span className="text-center">Vision</span> </Card.Title>
          <Card.Text xl={6} className="vision-descrip d-flex justify-content-center">
           <p className="text-center"> Eléctricos del Valle S.A, en el 2022 será una de las cinco empresas
            más reconocidas a nivel nacional, en el suministro de productos,
            servicios y soluciones innovadoras para el Sector Eléctrico y de
            Telecomunicaciones, generando valor económico a sus accionistas,
            dentro de un entorno y cultura de calidad que beneficie a sus
            clientes, proveedores y empleados.</p>
          </Card.Text>
        </Card>
      </div>

      <Row className="container-section-3 my-5">
        <Col>
          <h3 className="valores text-center my-3">Valores</h3>
        </Col>
        <Row className="d-flex flex-row justify-content-around align-items-center">
          <Card style={{width: "18rem", height: "12rem"}}>
            <Card.Title>Respeto</Card.Title>
            <Card.Text>
              Reconocemos el valor del ser en todas las personas con quienes
              interactuamos.
            </Card.Text>
          </Card>
          <Card style={{width: "18rem", height: "14rem"}}>
            <Card.Title>Actitud de servicio</Card.Title>
            <Card.Text>
            La amabilidad, la cortesía, la calidez en el saludo, la buena disposición para resolver las necesidades o inquietudes tanto de clientes internos como externos, son los diferenciadores en los cuales sustentamos nuestra oferta.
            </Card.Text>
          </Card>
          <Card style={{width: "18rem", height: "14rem"}}>
            <Card.Title>calidad</Card.Title>
            <Card.Text>
            Nuestros procesos evolucionan en función del mejoramiento continuo, en la búsqueda constante de la satisfacción de nuestros clientes, con productos de primera calidad que cumplen con toda los requisitos legales y reglamentarios.
            </Card.Text>
          </Card>
        </Row>
        <Row className="d-flex flex-row justify-content-around align-items-center my-5">
        <Card style={{width: "18rem", height: "14rem"}}>
            <Card.Title>Trabajo en equipo</Card.Title>
            <Card.Text>
            Nuestros procesos evolucionan en función del mejoramiento continuo, en la búsqueda constante de la satisfacción de nuestros clientes, con productos de primera calidad que cumplen con toda los requisitos legales y reglamentarios.
            </Card.Text>
          </Card>
          <Card style={{width: "18rem", height: "14rem"}}>
            <Card.Title>Lealtad</Card.Title>
            <Card.Text>
            Nuestros procesos evolucionan en función del mejoramiento continuo, en la búsqueda constante de la satisfacción de nuestros clientes, con productos de primera calidad que cumplen con toda los requisitos legales y reglamentarios.
            </Card.Text>
          </Card>
          <Card style={{width: "18rem", height: "14rem"}}>
            <Card.Title>Desarrollo de talento humano</Card.Title>
            <Card.Text>
            Nuestros procesos evolucionan en función del mejoramiento continuo, en la búsqueda constante de la satisfacción de nuestros clientes, con productos de primera calidad que cumplen con toda los requisitos legales y reglamentarios.
            </Card.Text>
          </Card>
        </Row>
      </Row>
    </Container>
  );
};

export default About;
