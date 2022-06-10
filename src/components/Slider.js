import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Traveller from '../assets/img/traveller1.png';
import './Slider.css';

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
                                    <p className="slider-brief">Link Development, the global technology solutions provider and an A15 company, unveiled today that it has recently marked its Silver Jubilee anniversary.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="slider-img">
                        <img className="d-block w-100" src={Traveller} alt="Traveller 1" />
                    </div>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </div>
    )
}

export default Slider
