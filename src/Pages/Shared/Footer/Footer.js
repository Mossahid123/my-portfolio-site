import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <a href="#top" className="footer_logo">
        Mahmud
      </a>

      <ui className="permalinks">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ui>
      <div className="footer_socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
        <a href="https://instragram.com">
          <FaInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Dev-Mahmud. All rights reserved. (2020-{year})</small>
      </div>
    </footer>
  );
};

export default Footer;
