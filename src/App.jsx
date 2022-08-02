import React from "react";
import { Row, Col } from "react-bootstrap";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import NavbarComponent from "./components/Navbar/NavbarComponent";

const App = () => {
  return (
    <>
      <Row xxl={12} xl={12}>
        <NavbarComponent>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="nosotros" exact element={<About />} />
          </Routes>
        </NavbarComponent>
      </Row>
    </>
  );
};

export default App;
