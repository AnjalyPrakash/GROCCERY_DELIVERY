import React from 'react'
import { Col, Row } from 'react-bootstrap';
import img3 from '../Images/img3.png'
import '../Component/Grocceries.css'
import img6 from '../Images/img6.png'
import img7 from '../Images/img7.png'

function BestSeller() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <Row>
                    <Col md={4} className='d-flex justify-content-center align-items-center flex-column mb-3'>
                        <img src={img3} alt="no image" style={{ height: '200px',width:'100%' }} />
                        <div className='text-center'>
                            <h5>Graphic Design</h5>
                            <h6>English Department</h6>
                            <h6>$16.8 <span className='text-success'>$16.6</span></h6>
                        </div>
                    </Col>
                    <Col md={4} className='d-flex justify-content-center align-items-center flex-column mb-3'>
                        <img src={img6} alt="no image" style={{ height: '200px',width:'100%' }} />
                        <div className='text-center'>
                            <h5>Graphic Design</h5>
                            <h6>English Department</h6>
                            <h6>$16.8 <span className='text-success'>$16.6</span></h6>
                        </div>
                    </Col>
                    <Col md={4} className='d-flex justify-content-center align-items-center flex-column mb-3'>
                        <img src={img7} alt="no image" style={{ height: '200px',width:'100%' }} />
                        <div className='text-center'>
                            <h5>Graphic Design</h5>
                            <h6>English Department</h6>
                            <h6>$16.8 <span className='text-success'>$16.6</span></h6>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default BestSeller