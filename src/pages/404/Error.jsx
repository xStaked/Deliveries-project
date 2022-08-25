import React from "react";
import errorImg from "../../assets/404.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {  AiFillHome } from "react-icons/ai";
import "./error.Styles.scss";
const Error = () => {
  return (
    <div className="container-error">
      <img
        src={errorImg}
        alt="error"
        width={647}
        height={449}
        className="my-5"
      />
      <div>
        <Link to="/">
          <Button className="inicio d-flex flex-row justify-content-center align-items-center">
            <AiFillHome className="mx-2"/>
            <span>Inicio</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
