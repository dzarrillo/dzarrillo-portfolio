import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="portfolio-card middle">
      <div className="front">
        <h2 className="project-title">{props.title}</h2>
        <img className="project-img" src={props.url} alt="Project" />
      </div>
      <div className="back">
        <div className="back-content">
          <h4 className="back-title">{props.title}</h4>
          <h6 className="back-description">{props.description}</h6>
          {/* <div > */}
          <p className="back-description">{props.tech}</p>

          <a
            className="back-tech"
            href={props.linkto}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            className="back-tech"
            href={props.linkgithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
