import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../../../assets/img/logo.png'
import './footer.scss'

const Footer = props => {
    return (
        <div>
            <Container>
                <section className="footer-sec">
                    <div className="content">
                        <div className="area-one">
                            <img src={Logo} alt={'Link Development'} className="logo" />
                            <p>We make technology produce productive, adaptable and sustainable business experiences.</p>
                        </div>
                        <div className="area-two">
                            <p className="footer-title">Company</p><br/>
                            <div className="footer-links">
                                <p>About</p>
                                <p>Careers</p>
                                <p>Mobile</p>
                            </div>
                        </div>
                        <div className="area-three">
                            <p className="footer-title">Contact</p><br/>
                            <div className="footer-links">
                                <p>Help/FAQ</p>
                                <p>Press</p>
                                <p>Affilates</p>
                            </div>
                        </div>
                        <div className="area-four">
                            <p className="footer-title">Media</p><br/>
                            <div className="footer-links">
                                <p>News</p>
                                <p>Photo</p>
                                <p>Video</p>
                            </div>
                        </div>
                        <div className="area-five">
                            <i class="fab fa-lg fa-facebook-f"></i>
                            <p>Discover our app</p>
                        </div>
                    </div>
                    <Row>
                        <Col md={12}>
                            <div className="copyright">
                                <p>All rights reserved@Linkdevelopment.com</p>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </div>
    )
}

export default Footer