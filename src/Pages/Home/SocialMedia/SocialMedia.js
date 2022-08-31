import React from 'react';
import './SocialMedia.css'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const SocialMedia = () => {
    return (
        <div className="header_socials">
            <a
                href="https://www.linkedin.com/in/md-hossain-sarker-539170241/"
                rel="noreferrer"
                target="_blank"
                
            >
                <BsLinkedin />
            </a>
            <a href="https://github.com/Mossahid123" rel="noreferrer" target="_blank">
                <FaGithub />
            </a>
            <a
                href="https://www.facebook.com/mossahid.hossain"
                rel="noreferrer"
                target="_blank"
            >
                <SiFacebook />
            </a>
        </div>
    );
};

export default SocialMedia;