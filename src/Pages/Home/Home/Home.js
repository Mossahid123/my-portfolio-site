import React from 'react';
import Experience from '../../../Components/Experience/Experience';
import Particle from '../../../Components/Particles/Particles';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Particle />
            <Banner />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Home;