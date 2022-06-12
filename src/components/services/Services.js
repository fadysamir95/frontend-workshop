import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import servicesDecor from '../../assets/img/services-decor.png'
import wordShape from '../../assets/img/things-we-do.png'
import Transformation from '../../assets/img/transformation.png'
import Envision from '../../assets/img/envision.png'
import Dynamic from '../../assets/img/dynamic365.png'
import Crafty from '../../assets/img/crafty.png'
import servicesImg from '../../assets/img/services.png'
import './services.scss'

const Services = props => {
    return (
        <div>
            <section className="services-sec">
                {/* Section Decor */}
                <div className="word-shape">
                    <img src={wordShape} alt={'Things We Do'} />
                </div>
                {/* Section Decor */}
                <div className="decor">
                    <img src={servicesDecor} alt={''} />
                </div>
                <div className="content">
                    <Container className="h-100">
                        <div className="grid-container">
                            <div className="grid-item-1">
                                {/* All Services */}
                                <div className="items">
                                    {/* First Column */}
                                    <div className="col-one">
                                        <img src={Transformation} alt={'Transformation'} />
                                    </div>
                                    {/* Second Column */}
                                    <div className="col-two">
                                        <img src={Envision} alt={'Envision'} />
                                        <img src={Dynamic} alt={'Dynamic'} />
                                    </div>
                                    {/* Third Column */}
                                    <div className="col-three">
                                        <img src={Crafty} alt={'Crafty'} />
                                        <img src={servicesImg} alt={'servicesImg'} />
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item-2">
                                {/* Title */}
                                <h1 className="services-title">We Deliver<br/>Digital Productivity</h1>
                                {/* Brief */}
                                <p className="services-brief">We craft technology solutions that digitally bond and transform the productivity of our customers and their citizens, workers, consumers and partners. </p>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <section className="services-responsive-sec d-none">
                {/* Section Decor */}
                {/* <div className="word-shape">
                    <img src={wordShape} alt={'Things We Do'} />
                </div> */}
                {/* Section Decor */}
                {/* <div className="decor">
                    <img src={servicesDecor} alt={''} />
                </div> */}
                <div className="content">
                    <Container className="h-100">
                        <Row>
                            <Col md={12}>
                                <div className="grid-item-2">
                                    {/* Title */}
                                    <h1 className="services-title">We Deliver<br/>Digital Productivity</h1>
                                    {/* Brief */}
                                    <p className="services-brief">We craft technology solutions that digitally bond and transform the productivity of our customers and their citizens, workers, consumers and partners. </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {/* All Services */}
                            <Col md={12}>
                                <div className="d-flex justify-content-center mb-4"><img src={Transformation} alt={'Transformation'} /></div>
                                <div className="d-flex justify-content-center mb-4"><img src={Envision} alt={'Envision'} /></div>
                                <div className="d-flex justify-content-center mb-4"><img src={Dynamic} alt={'Dynamic'} /></div>
                                <div className="d-flex justify-content-center mb-4"><img src={Crafty} alt={'Crafty'} /></div>
                                <div className="d-flex justify-content-center mb-4"><img src={servicesImg} alt={'servicesImg'} /></div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    )
}

export default Services