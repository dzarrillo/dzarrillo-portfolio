import React from "react";
import "./SideBar.css";
import Image from "react-bootstrap/Image";
import DonPhoto from "../../assets/photos/don2.jpg";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";

import GithubIcon from "../../assets/icons/github_black.png";
import LinkedInIcon from "../../assets/icons/linkedin_black.png";
import TwitterIcon from "../../assets/icons/twitter.png";
//Transitions
import Fade from "react-reveal/Fade";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <Fade left>
        <NavLink to="/home">
          <Image
            style={{width: "40%"}}
            className="image-container"
            src={DonPhoto}
            roundedCircle
          ></Image>
        </NavLink>

        <h1 className="name-title">Don Zarrillo Jr.</h1>
        <h5 className="job-title">Full-Stack Web Developer</h5>

        <NavLink to="/portfolio">
          <Button name={"Portfolio"}></Button>
        </NavLink>

        {/* <Button className="button" name={"Portfolio"}> </Button> */}
        <NavLink to="/skills">
          <Button name={"Skills"}></Button>
        </NavLink>

        <NavLink to="/resume">
          <Button name={"Resume"}></Button>
        </NavLink>

        <NavLink to="/contact">
          <Button name={"Contact Me"}></Button>
        </NavLink>

        {/* <i class="far fa-envelope"></i> */}
        <h5 className="name-title">Get in Touch</h5>
        <Fade>
          <a
            className="touch"
            href="https://www.linkedin.com/in/donaldzarrillojr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image style={{ width: 35 }} src={LinkedInIcon} rounded></Image>
          </a>
          <a
            className="touch"
            href="https://github.com/dzarrillo?tab=repositories"
            target="_top"
          >
            <Image style={{ width: 35 }} src={GithubIcon} rounded></Image>
          </a>

          <a
            className="touch"
            href="https://twitter.com/@donzarrillojr?ref_src=twsrc%5Etfw"
            target="_top"
          >
            <img style={{ width: 35 }} src={TwitterIcon} alt="Email"></img>
          </a>
          <script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              />
        </Fade>
      </Fade>
    </div>
  );
};

export default SideBar;
