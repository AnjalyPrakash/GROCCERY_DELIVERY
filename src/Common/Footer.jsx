import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Common/Footer.css'

function Footer() {
    return (
        <>
            <div className='footer'>
                <Container>
                    <Row>
                        <Row>
                            <div className='mt-3 d-flex'>
                                <Col md={6}>
                                    <div className='flex-column'>
                                        <h4>Consulting Agency For Our Agency</h4>
                                        <h5>the quick fox jumps over the lazy dog</h5>
                                    </div>
                                </Col>
                                <Col md={6} className='ms-5'>
                                    <button className='btn btn-primary mt-2 p-2'>Contact Us</button>
                                </Col>
                            </div>
                        </Row>
                        <Col md={2} className='mt-4'>
                            <p className='mt-2 fw-bold'>Company Info</p>
                            <p className='mt-2'>About Us</p>
                            <p className='mt-2'>Carrier</p>
                            <p className='mt-2'>We are Hiring</p>
                            <p className='mt-2'>Blog</p>
                        </Col>
                        <Col md={2} className='mt-4'>
                            <p className='mt-2 fw-bold'>Legal</p>
                            <p className='mt-2'>About Us</p>
                            <p className='mt-2'>Carrier</p>
                            <p className='mt-2'>We are Hiring</p>
                            <p className='mt-2'>Blog</p>
                        </Col>
                        <Col md={2} className='mt-4'>
                            <p className='mt-2 fw-bold'>Features</p>
                            <p className='mt-2'>About Us</p>
                            <p className='mt-2'>Carrier</p>
                            <p className='mt-2'>We are Hiring</p>
                            <p className='mt-2'>Blog</p>
                        </Col>
                        <Col md={2} className='mt-4'>
                            <p className='mt-2 fw-bold'>Resources</p>
                            <p className='mt-2'>About Us</p>
                            <p className='mt-2'>Carrier</p>
                            <p className='mt-2'>We are Hiring</p>
                            <p className='mt-2'>Blog</p>
                        </Col>
                        <Col md={2} className='mt-4'>
                            <p className='mt-2 fw-bold'>Get in Touch</p>
                            <p className='mt-2'><i class="fa-solid fa-phone me-2"></i>(480) 555-0103</p>
                            <p className='mt-2'><i class="fa-solid fa-location-dot me-2"></i>4517 Washington</p>
                            <p className='mt-2'><i class="fa-solid fa-envelope me-2"></i>debra.holt@example.com</p>
                        </Col>
                    </Row>
                    <div className='container'>
                        <Row className='mt-3 d-flex justify-content-center align-items-center me-auto'>
                            <Col md={6}>
                                <div className='d-flex'>
                                    <p className='fw-bold'>Made with Love by Finland All Right Reserved</p>
                                </div>
                            </Col>
                            <Col md={6} >
                                <div className='text-info justify-content-end'>
                                    <i class="fa-brands fa-instagram me-3 "></i>
                                    <i class="fa-brands fa-facebook me-3 "></i>
                                    <i class="fa-brands fa-twitter me-3 "></i>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer