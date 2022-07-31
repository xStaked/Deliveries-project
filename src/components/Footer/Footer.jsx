import React from 'react'
import { Row, Col } from "react-bootstrap"
import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
// Styles 
import "./Footer.Styles.scss"
const Footer = () => {
  return (
    <>
        <Row xl={12}>
            <Col xl={3}>
                img increible
            </Col>
            <Col xl={6} className="d-flex flex-column justify-content-center align-items-center">
                <h3>!Siguenos en nuestreas redes!</h3>
                <Col>
                    <AiFillInstagram/>
                    <FaLinkedin/>
                    <FaFacebook/>
                </Col>
            </Col>
            <Col xl={3}>
                icon
            </Col>
        </Row>
    </>
  )
}

export default Footer