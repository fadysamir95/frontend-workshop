import React from 'react'
import Header from '../../layout/Header/Header'
import Slider from '../../slider/Slider'
import Services from '../../services/Services'
import Cards from '../../cards/Cards'
import Footer from '../../layout/Footer/Footer'
import Decore from '../../../assets/img/top-nav-decor.png'
import './home.scss'

const Home = props => {
    return (
        <div>
            {/* Decoration on top */}
            <div className="decor-top"><img src={Decore} alt="Decore" /></div>
            
            {/* Header Component */}
            <Header />

            {/* Slider Component */}
            <Slider/>

            {/* Services Component */}
            <Services />

            {/* Cards Component */}
            <Cards />

            {/* Footer Component */}
            <Footer />
        </div>
    )
}

export default Home