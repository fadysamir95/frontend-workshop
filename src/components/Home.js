import React from 'react';
// import Cards from './Cards';
import Header from './Header';
import Slider from './Slider';
import Decore from '../assets/img/top-nav-decore.png';
import './Home.css';

const Home = props => {
    return (
        <div>
            <div className="decore"><img src={Decore} alt="Decore" /></div>
            <Header />
            <Slider/>
            {/* <Cards /> */}
        </div>
    )
}

export default Home
