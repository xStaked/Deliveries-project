import React from "react";
import { Row, Col } from "react-bootstrap";
import Home from "./pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/about/About";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import FollowProduct from "./pages/followProduct/FollowProduct";
import BackOffice from "./pages/BackOffice/Admin";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Row xxl={12} xl={12}>
        <NavbarComponent>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/nosotros" exact element={<About />} />
            <Route path="/contacto" exact element={<Contact />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/backoffice" exact element={ <BackOffice/> } />
            <Route path="/followProduct"  element={ !token ? <Navigate replace to="/login"/> : <FollowProduct/> } />
          </Routes>
        </NavbarComponent>
      </Row>
    </>
  );
};

export default App;
