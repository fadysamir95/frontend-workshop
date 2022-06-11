import React from 'react'
import { Container } from 'react-bootstrap'
import servicesDecor from '../assets/img/services-decor.png'
import wordShape from '../assets/img/things-we-do.png'
import Transformation from '../assets/img/transformation.png'
import Envision from '../assets/img/envision.png'
import Dynamic from '../assets/img/dynamic365.png'
import Crafty from '../assets/img/crafty.png'
import servicesImg from '../assets/img/services.png'
import './Services.css'

const Services = props => {
    return (
        <div>
            <section className="services-sec">
                <div className="word-shape">
                    <img src={wordShape} alt={'Things We Do'} />
                </div>
                <div className="decor">
                    <img src={servicesDecor} alt={''} />
                </div>
                <div className="content">
                    <Container className="h-100">
                        <div className="grid-container">
                            <div className="grid-item-1">
                                <div className="items">
                                    <div className="col-one">
                                        <img src={Transformation} alt={''} />
                                    </div>
                                    <div className="col-two">
                                        <img src={Envision} alt={''} />
                                        <img src={Dynamic} alt={''} />
                                    </div>
                                    <div className="col-three">
                                        <img src={Crafty} alt={''} />
                                        <img src={servicesImg} alt={''} />
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item-2">
                                <h1>We Deliver<br/>Digital Productivity</h1>
                                <p>We craft technology solutions that digitally bond and transform the productivity of our customers and their citizens, workers, consumers and partners. </p>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </div>
    )
}

export default Services