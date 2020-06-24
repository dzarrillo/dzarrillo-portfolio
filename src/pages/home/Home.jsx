import React from "react";
import "./Home.css";
import Slide from "react-reveal/Slide";

const Home = () => {
  return (
    <div className="home-container">
      <Slide right>
        <h3 className={"port-title"}>Hi, I'm Don</h3>
        <h4>
          A freelance web developer specialized in front-end and back-end
          development.
        </h4>
      </Slide>

      <Slide left>
        <p>
          Four years ago, I founded DZartek LLC. During that time, I also
          developed Full stack web sites and Android apps. These apps were
          designed using react, restful web services, MongoDB, SQLite, google
          maps and Firebase technology. Currently there are six free Android
          apps in the Google store posted under DZartek.
        </p>
      </Slide>
      <Slide right>
        <p>
          Prior to founding DZartek, I worked ten years at Credit-Suisse in the
          IT department. While at Credit-Suisse, I facilitated solutions to
          problems with “live trades" and managed the batch night cycle for Asia
          Pacific. In addition, if any trade deadlines were missed, I
          immediately routed and assigned an alert to the responsible department
          to ensure that the appropriate corrective resolution(s) took place.
        </p>
      </Slide>

      <Slide left>
        <p>
          Prior to Credit-Suisse, I was a VB.net Windows applications lead
          Developer for BHI, Kforce, NCO, and Property Services.
        </p>
      </Slide>
      <Slide right>
        <p>
          I received my B.S. in Information Systems with a minor in business
          from Bloomfield College, successfully completed a full-stack web
          coding boot camp at Rutgers University and recieved an Android
          Nanodegree certificate from Udacity. I also hold various
          certifications from Udemy, NYU, PACE, Microsoft, and Lynda.com.
        </p>
      </Slide>
    </div>
  );
};

export default Home;
