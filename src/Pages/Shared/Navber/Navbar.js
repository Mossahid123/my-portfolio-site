import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { ImBlog } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <Link
        as={Link}
        to="/home"
        onClick={() => setActiveNav("home")}
        className={activeNav === "home" ? "active" : ""}
      >
        <AiOutlineHome />
      </Link>
      <Link
        as={Link}
        to="/blog"
        onClick={() => setActiveNav("blog")}
        className={activeNav === "blog" ? "active" : ""}
      >
        <ImBlog />
      </Link>
      <Link
        as={Link}
        to="/add-review"
        onClick={() => setActiveNav("add-review")}
        className={activeNav === "add-review" ? "active" : ""}
      >
        <RiServiceLine />
      </Link>
      <Link
        as={Link}
        to="/login"
        onClick={() => setActiveNav("login")}
        className={activeNav === "login" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>
    </nav>
  );
};

export default Navbar;