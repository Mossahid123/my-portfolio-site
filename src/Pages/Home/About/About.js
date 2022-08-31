import React from 'react';
import me from '../../../Assets/my-photo/about-me.jpg'
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={me} alt="about me" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon" />
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>
                        <article className="about_card">
                            <FiUsers className="about_icon" />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className="about_card">
                            <VscFolderLibrary className="about_icon" />
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>
                    </div>
                    <p>
                        Hello !! My name is Abdullah Al Mahmud. I want to gain confidence
                        and fame using my potential in this position, and express my
                        innovative creative skills for self and company growth. I am a
                        hardworking and quick learner person. I believe hard work is the
                        only way to success. Love to learn new technology and try to improve
                        myself.
                    </p>
                    <a href="https://m.me/mahmud2640" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;