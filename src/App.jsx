import React from "react";
import { Row, Col } from "react-bootstrap";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <>
      <Row xxl={12} xl={12}>
        <NavbarComponent>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="nosotros" exact element={<About />} />
            <Route path="/contacto" exact element={<Contact/>} />
          </Routes>
        </NavbarComponent>
      </Row>
    </>
  );
};

export default App;
