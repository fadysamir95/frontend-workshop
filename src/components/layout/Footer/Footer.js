import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../../../assets/img/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { BsApple } from 'react-icons/bs'
import googlePlay from '../../../assets/img/icons/google-play.png'
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
                            <div className="icons">
                                <FaFacebookF />
                                <FaInstagram />
                                <FaTwitter />
                            </div>
                            <p>Discover our app</p>
                            <div class="d-flex">
                                {/* Google Play */}
                                <div class="d-flex justify-content-center align-items-center app-download">
                                    <div className="icon-wrapper"><img src={googlePlay} alt={'Google Play'} className="google-play-img" /></div>
                                    <div class="text-wrapper">
                                        <p>GET IT</p>
                                        <p>GOOGLE PLAY</p>
                                    </div>
                                </div>
                                {/* Apple Store */}
                                <div class="d-flex justify-content-center align-items-center app-download play-store">
                                    <div className="icon-wrapper"><BsApple className="mr-2" /></div>
                                    <div class="text-wrapper">
                                        <p>Available on</p>
                                        <p>Apple</p>
                                    </div>
                                </div>
                            </div>
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