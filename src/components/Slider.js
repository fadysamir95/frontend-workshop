import React from 'react'
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap'
import Traveller from '../assets/img/traveller1.png'
import Shape from '../assets/img/shape-title.png'
import './Slider.css'

const Slider = props => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col md={7}>
                                <div className="slider-caption">
                                    <p className="slider-category">Marking</p>
                                    <h2 className="slider-title">25 Years of Business Growth</h2>
                                    <img src={Shape} alt={Shape} className="title-shape" />
                                    <p className="slider-brief">Link Development, the global technology solutions provider and an A15 company, unveiled today that it has recently marked its Silver Jubilee anniversary.</p>
                                    <Button variant="primary" className="main-btn">Find out more</Button>{' '}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="slider-img">
                        <img className="d-block w-100" src={Traveller} alt="Traveller 1" />
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col md={7}>
                                <div className="slider-caption">
                                    <p className="slider-category">Marking</p>
                                    <h2 className="slider-title">25 Years of Business Growth</h2>
                                    <img src={Shape} alt={Shape} className="title-shape" />
                                    <p className="slider-brief">Link Development, the global technology solutions provider and an A15 company, unveiled today that it has recently marked its Silver Jubilee anniversary.</p>
                                    <Button variant="primary" className="main-btn">Find out more</Button>{' '}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="slider-img">
                        <img className="d-block w-100" src={Traveller} alt="Traveller 1" />
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col md={7}>
                                <div className="slider-caption">
                                    <p className="slider-category">Marking</p>
                                    <h2 className="slider-title">25 Years of Business Growth</h2>
                                    <img src={Shape} alt={Shape} className="title-shape" />
                                    <p className="slider-brief">Link Development, the global technology solutions provider and an A15 company, unveiled today that it has recently marked its Silver Jubilee anniversary.</p>
                                    <Button variant="primary" className="main-btn">Find out more</Button>{' '}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="slider-img">
                        <img className="d-block w-100" src={Traveller} alt="Traveller 1" />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider