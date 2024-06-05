import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/pokeball-icon.png";
import {  FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Tanvi Sharma</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        
      </h4>
      <div className="profile-links">
        <a href="https://github.com/Tanvisharma31">
          <FaGithub />
        </a>
        <a href="https://instagram.com/tanvi.sharma._">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/tanvisharma31/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
