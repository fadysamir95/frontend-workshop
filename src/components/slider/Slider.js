import React from 'react'
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap'
import Traveller from '../../assets/img/traveller1.png'
import Shape from '../../assets/img/shape-title.png'
import Play from '../../assets/img/play.png'
import sliderData from '../../data/banner.json'
import './slider.scss'

const Slider = props => {
    return (
        <div>
            <Carousel className="main-carousel">
                {
                    sliderData.map(item => {
                        return (
                            <Carousel.Item>
                                <Container>
                                    <Row>
                                        <Col md={7}>
                                            <div className="slider-caption">
                                                <p className="slider-category">{item.category}</p>
                                                <h2 className="slider-title">{item.title}</h2>
                                                <img src={Shape} alt={Shape} className="title-shape" />
                                                <p className="slider-brief">{item.brief}</p>
                                                <Button variant="primary" className="main-btn">Find out more</Button>{' '}
                                                <img src={Play} alt={'Play'} className="play-demo" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                                <div className="slider-img">
                                    <img className="d-block w-100" src={Traveller} alt="Traveller 1" />
                                </div>
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>

            <Carousel className="responsive-carousel d-none">
                {
                    sliderData.map(item => {
                        return (
                            <Carousel.Item>
                                <Container>
                                    <Row>
                                        <Col md={12}>
                                            <div className="slider-caption">
                                                <p className="slider-category">{item.category}</p>
                                                <h2 className="slider-title">{item.title}</h2>
                                                <p className="slider-brief">{item.brief}</p>
                                                <Button variant="primary" className="main-btn">Find out more</Button>{' '}
                                                <img src={Play} alt={'Play'} className="play-demo" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                        <div className="slider-img">
                                            <img className="d-block w-100" src={Traveller} alt={'Traveller'} />
                                        </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>
        </div>
    )
}

export default Slider