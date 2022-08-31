import React from 'react';
import './Banner.css'
import Typed from "react-typed";

const Banner = () => {
    return (
        <header id="top">
      <div id="text" className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Mossahid Hussain</h1>
        <h5 className="text-light">
          <Typed
            strings={[
              "Full Stack Developer",
              "Front-End Web Developer",
              "MERN Stack Developer",
              "React Developer",
              "Freelancer",
            ]}
            loop
            typeSpeed={50}
            backSpeed={40}
          />
        </h5>
        {/* <CTA />
        <Social /> */}
        {/* <div className="me">
          <img src={me} alt="me" />
        </div> */}
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
    );
};

export default Banner;