import React from 'react';
import './Banner.css'
import Typed from "react-typed";
import SocialMedia from '../SocialMedia/SocialMedia';
import Resume from '../Resume/Resume';

const Banner = () => {
    return (
        <header id="top">
            <div id="text" className="container header_container">
                <h5>Hello I'm</h5>
                <h1>
                    <Typed
                        strings={[
                            "Mossahid Hussain",

                        ]}
                        loop
                        typeSpeed={60}
                        backSpeed={50}
                    />
                </h1>
                <h5 className="text-light">
                    <Typed
                        strings={[
                            "Full Stack Developer",
                            "Front-End Web Developer",
                            "MERN Stack Developer",
                            "React Developer",
                        ]}
                        loop
                        typeSpeed={70}
                        backSpeed={60}
                    />
                </h5>
                <Resume />
                <SocialMedia />


            </div>
        </header>
    );
};

export default Banner;