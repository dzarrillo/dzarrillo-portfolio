import React from "react";
import Container from "react-bootstrap/Container";


const Layout = (props) => (
    <Container className="container" fluid  >
      {props.children} 
    </Container>
);

export default Layout;