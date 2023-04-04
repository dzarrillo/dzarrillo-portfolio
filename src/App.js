import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
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
      <HashRouter>
        <Layout>
          <Row className="section-a">
            <Col sm={12} md={4}>
              <Sidebar></Sidebar>
            </Col>
            <Col sm={12} md={8}>
              {/* <HashRouter> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/resume" element={<MyResume />} />
                {/* <Route component={NoMatch} /> */}
              </Routes>
              {/* </HashRouter> */}
            </Col>
          </Row>

          {/* <hr></hr>

          <Row id="resume" className="justify-content-center row-resume" >
            <MyResume></MyResume>
          </Row> */}
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
