import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

class Footer extends React.Component {
  render() {
    return (
      <div className="fixed-bottom">
        <Navbar bg="light" variant="light" className="m-0 py-0">
          <Container>
            <Navbar.Brand>Footer</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
