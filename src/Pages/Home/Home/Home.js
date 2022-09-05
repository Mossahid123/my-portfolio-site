import React from 'react';
import Experience from '../../../Components/Experience/Experience';
import Particle from '../../../Components/Particles/Particles';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Particle />
            <Banner />
            <About />
            <Experience />
            <Portfolio />
        </div>
    );
};

export default Home;