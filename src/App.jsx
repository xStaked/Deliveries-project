import React from "react";
import { Row, Col } from "react-bootstrap";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import NavbarComponent from "./components/Navbar/NavbarComponent";

const App = () => {
  return (
    <>
      <NavbarComponent>
        <Row xxl={12} xl={12}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="nosotros" exact element={<About />} />
          </Routes>
        </Row>
      </NavbarComponent>
    </>
  );
};

export default App;
