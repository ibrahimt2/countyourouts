import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div className="main-footer">
        <Container fluid className="pt-3">
          <Row className="text-center justify-content-center">
            
              <a href="mailto:ibrahim.miraj@mail.mcgill.ca" target="_blank">
                <i class="fa fa-envelope"></i>
              </a>
              <div className="customDivider"> </div>
              <a
                href="https://www.linkedin.com/in/ibrahim-miraj-a16882182/"
                target="_blank"
              >
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/ibrahimt2" target="_blank">
                <i class="fa fa-github" target="_blank"></i>
              </a>
            
          </Row>
        </Container>
        {/* <Navbar bg="light" variant="light" className="m-0 py-0">
          <Container>
            <Navbar.Brand>Footer</Navbar.Brand>
          </Container>
        </Navbar> */}
      </div>
    );
  }
}

export default Footer;
