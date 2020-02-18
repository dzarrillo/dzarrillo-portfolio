import React from "react";

import BooCamp from "../../assets/photos/boocamp.jpg";
import Burger from "../../assets/photos/burger-logo.png";
import Healthy from "../../assets/photos/PurposelyHealthy.png";
import ClickyGame from "../../assets/photos/clickygame.png";
import KearaKorner from "../../assets/photos/kearakorner.jpg";
import DZartek from "../../assets/photos/dzartek.jpg";
import Denise from "../../assets/photos/denise.jpg";
//Transitions
import Roll from "react-reveal/Roll";
import "./Portfolio.css";

const Projects = [
  {
    count: 0,
    url: Denise,
    title: "Denise Portfolio",
    description: "Personal digital portfolio",
    summary:
      "Built a custom web site for client that allows users to browse all the services and reach out to the proprietor directly for services using React.js, Material-UI, Edamam API and Sendgrid API.",
    linkto: "http://denise-portfolio.s3-website-us-east-1.amazonaws.com/",
    linkgithub: "https://github.com/dzarrillo?tab=repositories",
    tech: "A personal digital portfolio that was developed using HTML and CSS."
  },
  {
    count: 1,
    url: DZartek,
    title: "DZartek",
    description: "",
    summary: "",
    linkto: "http://dzartek.com/",
    linkgithub: "https://github.com/dzarrillo/DZartek",
    tech: "This site was developed using HTML and CSS."
  },
  {
    count: 2,
    url: Healthy,
    title: "Purposely Healthy",
    description: "Certified Health & Life Coach ",
    summary:
      "Built a custom web site for a health coach that allows users to browse all the services and reach out to the proprietor directly for services using React.js, Material-UI, Edamam API and Sendgrid API.",
    linkto: "http://www.purposelyhealthy.net/home",
    linkgithub: "https://github.com/dzarrillo?tab=repositories",
    tech:
      "This app was created using react.js, material-ui for styling and axios for the api call recipes."
  },
  {
    count: 3,
    url: KearaKorner,
    title: "Keara's Korner",
    description: "Ecommerce site",
    summary: "The summary for the project will go here",
    linkto: "https://kearaskorner.herokuapp.com",
    linkgithub: "https://github.com/dzarrillo/KearasKorner",
    tech:
      "Ecommerce site used for selling clothes was developed using react.js, redux.js & firebase."
  },
  {
    count: 4,
    url: Burger,
    title: "Burger",
    description:
      "Burger app that let's you create and then order your own burger",
    summary:
      "The Burger app allows you to create your own burger and shows the cost of each item you select for your burger." +
      "  Once completed making your burger you can submit your order to be filled.",
    linkto: "https://dzarrillo.github.io/burger-basics/",
    linkgithub: "https://github.com/dzarrillo/burger-basics",
    tech:
      "This app was created with react.js for the front-end and firebase database."
  },
  {
    count: 5,
    url: BooCamp,
    title: "BooCamp",
    description:
      "Boo!camp Spot allows users to view haunted places from around the world. ",
    summary:
      "Each place has a card with its title, location, description, and image. " +
      "Places can be filtered by type (Building, Forests, Prisons, etc.). " +
      "After clicking the card, the user is directed to the places" +
      " page, which also shows reviews and accounts from other users who have visited." +
      "Users who have signed up can create new places as well as submit their own " +
      "reviews. On the user's profile page, places and reviews created by the user " +
      "can be edited or deleted. Other information, such as the user's avatar image, " +
      "username, and 'boo day' (date of sign up) is also displayed.",
    linkto: "https://boocamp-spot.herokuapp.com/",
    linkgithub: "https://github.com/dzarrillo?tab=repositories",
    tech: "This app uses a node.js, express, handlebars and MySQL database."
  },
  {
    count: 6,
    url: ClickyGame,
    title: "Clicky game",
    description: "Memory game.",
    summary:
      "Click on the images to gain points. Try to remember which images you have already clicked. If you click the same image twice, it's game over! ",
    linkto: "https://dzarrillo.github.io/clickygame/",
    linkgithub: "https://github.com/dzarrillo/clickygame",
    tech:
      "This site uses ReactJS to dynamically update a player's score and the positioning of tiles through state."
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Roll left>
        <div className="title-container">
          <h1 className="top-portfolio-title">Portfolio</h1>
        </div>
      </Roll>

      <div className="portfolio-card-container">
        {Projects.map(project => {
          return (
            <Roll key={project.title} right>
              <div className="portfolio-card middle">
                <div className="front">
                  <h2 className="project-title">{project.title}</h2>
                  <img
                    className="project-img"
                    src={project.url}
                    alt="Project"
                  />
                </div>
                <div className="back">
                  <div className="back-content">
                    <h4 className="back-title">{project.title}</h4>
                    <h6 className="back-description">{project.description}</h6>
                    <p className="back-description">{project.tech}</p>

                    <a
                      className="back-tech"
                      href={project.linkto}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                    <a
                      className="back-tech"
                      href={project.linkgithub}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Roll>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
