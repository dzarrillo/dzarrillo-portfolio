import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import NoMatch from "./pages/nomatch/NoMatch";
import Portfolio from "./pages/portfolio/Portfolio";
import Skills from "./pages/skills/Skills";
import Layout from "./pages/layout/Layout";
import Sidebar from "./components/sidebar/SideBar";
import MyResume from "./pages/resume/MyResume";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Layout>
          <Row className="section-a">
            <Col sm={12} md={4}>
              <Sidebar></Sidebar>
            </Col>
            <Col sm={12} md={8}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/resume" component={MyResume} />
                <Route component={NoMatch} />
              </Switch>
            </Col>
          </Row>
          
          {/* <hr></hr>

          <Row id="resume" className="justify-content-center row-resume" >
            <MyResume></MyResume>
          </Row> */}
        </Layout>
      </Router>
    </div>
  );
}

export default App;
