import React from 'react';
import Experience from '../../../Components/Experience/Experience';
import Particle from '../../../Components/Particles/Particles';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Particle />
            <Banner />
            <About />
            <Experience />
        </div>
    );
};

export default Home;