import React from "react";
import { Row, Col } from "react-bootstrap";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Row xxl={12} xl={12}>
        <Home />
      </Row>
    </>
  );
};

export default App;
