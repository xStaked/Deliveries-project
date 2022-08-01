import React from 'react'
import { Row, Col } from "react-bootstrap"
import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import { BsFacebook } from "react-icons/bs"
import imgDelivery from "../../assets/Messenger-bro.png"
// Styles 
import "./Footer.Styles.scss"
const Footer = () => {
  return (
    <>
        <Row xl={12} className="container-footer">
            <Col xl={3}>
                img logo
            </Col>
            <Col xl={6} className="d-flex flex-column justify-content-center align-items-center">
                <h3 className='my-2'>!Siguenos en nuestreas redes!</h3>
                <Col className='d-flex flex-row justify-content-center align-items-center'>
                    <AiFillInstagram className='icon-ig mx-4 mb-4'/>
                    <FaLinkedin className='icon-li mx-4 mb-4'/>
                    <BsFacebook className='icon-fb mx-4 mb-4'/>
                </Col>
            </Col>
            <Col xl={3}>
                <img 
                // src={imgDelivery}
                alt="img-delivery"
                width={150}
                height={150}
                />
            </Col>
        </Row>
    </>
  )
}

export default Footer