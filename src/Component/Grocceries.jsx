import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/img1.png'
import img3 from '../Images/img3.png'
import '../Component/Grocceries.css'
import BestSeller from './BestSeller';
import img2 from '../Images/img2.jpeg'
import img7 from '../Images/img7.png'
import img8 from '../Images/img8.png'
import img6 from '../Images/img6.png'
import img5 from '../Images/img5.png'


function Grocceries() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ height: '670px', width: '100%' }} alt="" />
                    <Carousel.Caption className='d-flex justify-content-center align-items-center flex-column' style={{ height: '80vh' }}>
                        <h1 className='fw-bold mb-3'>GROCERIES DELIVERY</h1>
                        <h3>We know how large objects will act, but things on a <br /> small scale just do not act that way</h3>
                        <button className='btn btn-primary mt-2 p-3'>Start Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://b.zmtcdn.com/data/dish_photos/912/5600c15850e7c3b3f22b2d9363659912.jpg" style={{ height: '670px', width: '100%' }} alt="" />
                    <Carousel.Caption className='d-flex justify-content-center align-items-center flex-column' style={{ height: '80vh' }}>
                        <h1 className='fw-bold mb-3'>GROCERIES DELIVERY</h1>
                        <h3>We know how large objects will act, but things on a <br /> small scale just do not act that way</h3>
                        <button className='btn btn-primary mt-2 p-3'>Start Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container >
                <Row className='mt-5 mb-5 d-flex justify-content-center align-items-center'>
                    <Col md={3} className='card shadow' style={{ width: '350px' }}>
                        <Container >
                            <Row className='d-flex justify-content-center align-items-center'>
                                <div className='d-flex'>
                                    <Col md={6}>
                                        <p className='mt-5'>Your Space</p>
                                        <h4>Unique <br /> Life</h4>
                                        <p>Explore Items</p>
                                    </Col>
                                    <Col md={6}>
                                        <img src={img1} alt="no image" style={{ height: '200px', width: '100%' }} />
                                    </Col>
                                </div>
                            </Row>
                        </Container>
                    </Col>
                    <Col md={1}>
                    </Col>
                    <Col md={3} className='card shadow mt-3' style={{ width: '350px' }}>
                        <Container className='d-flex justify-content-center align-items-center'>
                            <Row className='d-flex justify-content-center align-items-center'>
                                <div className='d-flex'>
                                    <Col md={6}>
                                        <p className='mt-5'>Your Space</p>
                                        <h4>Elements <br /> Style</h4>
                                        <p>Explore Items</p>
                                    </Col>
                                    <Col md={6}>
                                        <img src={img3} alt="no image" style={{ height: '200px', width: '100%' }} />
                                    </Col>
                                </div>
                            </Row>
                        </Container>
                    </Col>
                    <Col md={1}>
                    </Col>
                    <Col md={4} className='card shadow mt-3' style={{ width: '350px' }}>
                        <Container className='d-flex justify-content-center align-items-center'>
                            <Row className='d-flex justify-content-center align-items-center'>
                                <div className='d-flex'>
                                    <Col md={6}>
                                        <p className='mt-5'>Ends Today</p>
                                        <h4>Elements <br /> Style</h4>
                                        <p>Explore Items</p>
                                    </Col>
                                    <Col md={6}>
                                        <img src={img7} alt="no image" style={{ height: '200px', width: '100%' }} />
                                    </Col>
                                </div>
                            </Row>
                        </Container>
                    </Col>
                </Row>

                <Row>
                    <Col md={3} className='div-1 mb-4 rounded'>
                        <h4 className='mt-3'>FURNITURE</h4>
                        <p>5 items</p>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col md={3}>
                                <h4 className='fw-bold d-flex justify-content-center align-items-center'>BEST SELLER</h4>
                            </Col>
                            <Col md={2}>
                                <h5 className='d-flex justify-content-center align-items-center'>Men</h5>
                            </Col>
                            <Col md={2}>
                                <h5 className='d-flex justify-content-center align-items-center'>Women</h5>
                            </Col>
                            <Col md={2}>
                                <h5 className='d-flex justify-content-center align-items-center'>Accessories</h5>
                            </Col>
                            <Col md={3} className='d-flex justify-content-center align-items-center'>
                                <button className='btn'><i class="icon fa-regular fa-circle-left fa-2x me-2"></i></button>
                                <button className='btn'><i class="icon fa-regular fa-circle-right fa-2x"></i></button>
                            </Col>
                        </Row>
                        <hr />
                        <BestSeller />
                        <BestSeller />
                    </Col>
                </Row>


                <Row className='mb-3'>
                    <Col md={6}>
                        <img src="https://www.shutterstock.com/image-vector/delivery-man-ride-scooter-motorcycle-600nw-462541747.jpg" style={{ width: '100%' }} alt="no image" />
                    </Col>
                    <Col md={6} className='text-center d-flex justify-content-center align-items-center flex-column'>
                        <h3>Most Popular</h3>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio, cumque, quas laborum ab cum voluptas blanditiis assumenda ptatibus voluptas?</h5>
                        <img src={img2} alt="no image" style={{ height: '200px', textShadow: '' }} />
                        <h4 className='mt-3'>English Department</h4>
                        <h6>$16.8 <span className='text-success'>$16.6</span></h6>
                    </Col>
                </Row>

                <Row className='mt-2 mb-3'>
                    <Col md={3}>
                        <div className='d-flex'>
                            <h2 className='me-3 mt-2 fw-bold text-danger'>1.</h2>
                            <div className='flex-column'>
                                <h4>Easy to Use</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='d-flex'>
                            <h2 className='me-3 mt-2 fw-bold text-danger'>2.</h2>
                            <div className='flex-column'>
                                <h4>Easy to Use</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='d-flex'>
                            <h2 className='me-3 mt-2 fw-bold text-danger'>3.</h2>
                            <div className='flex-column'>
                                <h4>Easy to Use</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='d-flex'>
                            <h2 className='me-3 mt-2 fw-bold text-danger'>4.</h2>
                            <div className='flex-column'>
                                <h4>Easy to Use</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className='mt-4 mb-3'>
                    <Col md={9}>
                        <Row>
                            <Col md={3}>
                                <h4 className='fw-bold d-flex justify-content-center align-items-center'>BEST SELLER</h4>
                            </Col>
                            <Col md={2}>
                                <h5 className='d-flex justify-content-center align-items-center'>Men</h5>
                            </Col>
                            <Col md={2}>
                                <h5 className='d-flex justify-content-center align-items-center'>Women</h5>
                            </Col>
                            <Col md={2}>
                                <h5 className='d-flex justify-content-center align-items-center'>Accessories</h5>
                            </Col>
                            <Col md={3} className='d-flex justify-content-center align-items-center'>
                                <button className='btn'><i class="icon fa-regular fa-circle-left fa-2x me-2"></i></button>
                                <button className='btn'><i class="icon fa-regular fa-circle-right fa-2x"></i></button>
                            </Col>
                        </Row>
                        <hr />
                        <BestSeller />
                        <BestSeller />
                    </Col>
                    <Col md={3} className='div-2 rounded'>
                        <h4 className='mt-3'>FURNITURE</h4>
                        <p>5 items</p>
                    </Col>
                </Row>

                <Row className='mb-3'>
                    <Col md={6} className='text-center mt-3 d-flex justify-content-center align-items-center flex-column'>
                        <h3>Most Popular</h3>
                        <h5 className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio, cumque, quas laborum ab cum voluptas blanditiis assumenda ptatibus voluptas?</h5>
                        <img src={img8} alt="no image" style={{ height: '200px', borderRadius: '100px' }} />
                        <h4 className='mt-3'>English Department</h4>
                        <h5><i class="fa-solid fa-cloud-arrow-down me-2"></i>15 Sales</h5>
                        <h6>$16.8 <span className='text-success'>$16.6</span></h6>
                        <div>
                            <button className='btn'><i class="fa-solid fa-circle" style={{ color: 'lightblue' }}></i></button>
                            <button className='btn'><i class="fa-solid fa-circle" style={{ color: 'green' }}></i></button>
                            <button className='btn'><i class="fa-solid fa-circle" style={{ color: 'orange' }}></i></button>
                            <button className='btn'><i class="fa-solid fa-circle" style={{ color: 'black' }}></i></button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src="https://t4.ftcdn.net/jpg/01/82/87/05/360_F_182870558_1mPzZMcmXQ2iiRgNTerpPZdrL3h5Fum7.jpg" style={{ width: '100%', height: '600px' }} alt="no image" />
                    </Col>
                </Row>


                <div className='mb-5'>
                    <Row className='mt-5 text-secondary '>
                        <Col md={2} className='d-flex justify-content-center align-items-center mt-2'>
                            <i class="fa-brands fa-aws fa-5x"></i>
                        </Col>
                        <Col md={2} className='d-flex justify-content-center align-items-center mt-2'>
                            <i class="fa-brands fa-hooli fa-5x"></i>
                        </Col>
                        <Col md={2} className='d-flex justify-content-center align-items-center mt-2'>
                            <i class="fa-brands fa-stripe fa-5x"></i>
                        </Col>
                        <Col md={2} className='d-flex justify-content-center align-items-center mt-2'>
                            <i class="fa-brands fa-reddit-alien fa-5x"></i>
                        </Col>
                        <Col md={2} className='d-flex justify-content-center align-items-center mt-2'>
                            <i class="fa-brands fa-pied-piper-hat fa-5x"></i>
                        </Col>
                        <Col md={2} className='d-flex justify-content-center align-items-center mt-2'>
                            <i class="fa-brands fa-lyft fa-5x"></i>
                        </Col>
                    </Row>
                </div>

            </Container >

            <Container className='mb-4 d-flex justify-content-center align-items-center'>
            <Row className='mt-5 mb-4 ' >
                    <h3 className='mt-2 mb-2'>BESTSELLER PRODUCTS</h3>
                    <hr />
                    <Col md={3} className='d-flex justify-content-center align-items-center flex-column'>
                        <img src={img7} alt="no image" style={{ height: '200px',width:'100%' }} />
                        <div className='text-center mt-2'>
                            <h5>Graphic Design</h5>
                            <h6>English Department</h6>
                            <h6>$16.8 <span className='text-success'>$16.6</span></h6>
                        </div>
                    </Col>
                    <Col md={3} className='d-flex justify-content-center align-items-center flex-column'>
                        <img src={img3} alt="no image" style={{ height: '200px',width:'100%' }} />
                        <div className='text-center mt-2'>
                            <h5>Graphic Design</h5>
                            <h6>English Department</h6>
                            <h6>$16.8 <span className='text-success'>$16.6</span></h6>
                        </div>
                    </Col>
                    <Col md={3} className='d-flex justify-content-center align-items-center flex-column'>
                        <img src={img6} alt="no image" style={{ height: '200px',width:'100%' }} />
                        <div className='text-center mt-2'>
                            <h5>Graphic Design</h5>
                            <h6>English Department</h6>
                            <h6>$16.8 <span className='text-success'>$16.6</span></h6>
                        </div>
                    </Col>
                    <Col md={3} className='d-flex justify-content-center align-items-center flex-column'>
                        <img src={img5} alt="no image" style={{ height: '200px',width:'100%' }} />
                        <div className='text-center mt-2'>
                            <h5>Graphic Design</h5>
                            <h6>English Department</h6>
                            <h6>$16.8 <span className='text-success'>$16.6</span></h6>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='mb-4 d-flex justify-content-center align-items-center'>
                <Row>
                    <Col md={4}>
                        <img src="https://media.istockphoto.com/id/1221101939/photo/delivery-concept-asian-man-hand-accepting-a-delivery-boxes-from-professional-deliveryman-at.jpg?s=612x612&w=0&k=20&c=jvZ_phbXmzOrCCZiGn8ZQO99a5skBJlclbujI5jGam8=" style={{ width: '100%', height: '300px' }} alt="no image" />
                        <div className='d-flex'>
                            <p className='text-info me-2'>google</p>
                            <p className='me-1'>Trending</p>
                            <p className='me-1'>New</p>
                        </div>
                        <h4>Lorem ipsum dolor sit amet consectetu.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur ! <br /> Lorem ipsumluptatum laboriosam esse, quod accusantium eos dolor. Ipsam esse numquam quo.</p>
                            <div className=' d-flex ms-auto'>
                                <p className='me-5'><i class="fa-solid fa-clock me-1 text-info"></i>22 April 2022</p>
                                <p><i class="fa-solid fa-chart-area text-success"></i>10 comments</p>
                            </div>
                    </Col>
                    <Col md={4}>
                        <img src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709164800&semt=ais" style={{ width: '100%', height: '300px' }} alt="no image" />
                        <div className='d-flex'>
                            <p className='text-info me-2'>google</p>
                            <p className='me-1'>Trending</p>
                            <p className='me-1'>New</p>
                        </div>
                        <h4>Lorem ipsum dolor sit amet consectetu.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur ! <br /> Lorem ipsumluptatum laboriosam esse, quod accusantium eos dolor. Ipsam esse numquam quo.</p>
                            <div className=' d-flex ms-auto'>
                                <p className='me-5'><i class="fa-solid fa-clock me-1 text-info"></i>22 April 2022</p>
                                <p><i class="fa-solid fa-chart-area text-success"></i>10 comments</p>
                            </div>
                    </Col>
                    <Col md={4}>
                        <img src="https://5.imimg.com/data5/SELLER/Default/2021/4/KX/UP/WX/120959975/online-food-delivery-app-500x500.png" style={{ width: '100%', height: '300px' }} alt="no image" />
                        <div className='d-flex'>
                            <p className='text-info me-2'>google</p>
                            <p className='me-1'>Trending</p>
                            <p className='me-1'>New</p>
                        </div>
                        <h4>Lorem ipsum dolor sit amet consectetu.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur ! <br /> Lorem ipsumluptatum laboriosam esse, quod accusantium eos dolor. Ipsam esse numquam quo.</p>
                            <div className=' d-flex ms-auto'>
                                <p className='me-5'><i class="fa-solid fa-clock me-1 text-info"></i>22 April 2022</p>
                                <p><i class="fa-solid fa-chart-area text-success"></i>10 comments</p>
                            </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Grocceries