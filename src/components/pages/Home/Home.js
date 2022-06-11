import React from 'react'
import Header from '../../layout/Header/Header'
import Slider from '../../Slider'
import Services from '../../Services'
import Cards from '../../Cards'
import Footer from '../../layout/Footer/Footer'
import Decore from '../../../assets/img/top-nav-decor.png'
import './Home.css'

const Home = props => {
    return (
        <div>
            <div className="decore"><img src={Decore} alt="Decore" /></div>
            <Header />
            <Slider/>
            <Services />
            <Cards />
            <Footer />
        </div>
    )
}

export default Home