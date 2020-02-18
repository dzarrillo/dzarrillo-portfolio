import React from "react";
import "./Skills.css";
// Icons
import Css from "../../assets/icons/css3.png";
import Html from "../../assets/icons/html5.png";
import Bootstrap from "../../assets/icons/bootstrap.png";
import Material from "../../assets/icons/materialize.png";
import Node from "../../assets/icons/nodejs.png";
import Reactjs from "../../assets/icons/react.png";
import Jquery from "../../assets/icons/jquery.png";
import Express from "../../assets/icons/express.png";
import Mongo from "../../assets/icons/mongodb.png";
import Mysql from "../../assets/icons/mysql.png";
import GitHub from "../../assets/icons/github.png";
import Heroku from "../../assets/icons/heroku.png";
import VScode from "../../assets/icons/visual-studio.png";
import Android from "../../assets/icons/Android_Studio.png";
import Firebase from "../../assets/icons/firebase.png";
import Sqlite from "../../assets/icons/sqlite.png";
//Transitions
import Roll from "react-reveal/Roll";

const htmlData = [
  { img: Html, title: "HTML" },
  { img: Css, title: "CSS" },
  { img: Material, title: "Material-ui" },
  { img: Bootstrap, title: "Bootstrap" }
];
const javaScriptdata = [
  { img: Reactjs, title: "React.js" },
  { img: Node, title: "Node.js" },
  { img: Express, title: "Express.js" },
  { img: Jquery, title: "Jquery.js" }
];
const backend = [
  { img: Mongo, title: "Mongo" },
  { img: Mysql, title: "MySQL" },
  { img: Firebase, title: "Firebase" },
  { img: Sqlite, title: "SQLite" }
];
const other = [
  { img: VScode, title: "Visual Studio" },
  { img: Android, title: "Android Studio" },
  { img: GitHub, title: "GitHub" },
  { img: Heroku, title: "Heroku" }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <Roll left>
        <h1 className="top-skill-title">Skills</h1>
      </Roll>

      <div className="skills-card-container">
        {htmlData.map(data => {
          return (
            <Roll key={data.title} right>
              <div className="skill-card">
                <img className="skill-image" src={data.img} alt="Skill"></img>
                <h5 className="skill-title">{data.title}</h5>
              </div>
            </Roll>
          );
        })}

        {javaScriptdata.map(data => {
          return (
            <Roll key={data.title} right>
              <div className="skill-card">
                <img className="skill-image" src={data.img} alt="Skill"></img>
                <h5 className="skill-title">{data.title}</h5>
              </div>
            </Roll>
          );
        })}

        {backend.map(data => {
          return (
            <Roll key={data.title} right>
              <div className="skill-card">
                <img className="skill-image" src={data.img} alt="Skill"></img>
                <h5 className="skill-title">{data.title}</h5>
              </div>
            </Roll>
          );
        })}

        {other.map(data => {
          return (
            <Roll key={data.title} right>
              <div className="skill-card">
                <img className="skill-image" src={data.img} alt="Skill"></img>
                <h5 className="skill-title">{data.title}</h5>
              </div>
            </Roll>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
