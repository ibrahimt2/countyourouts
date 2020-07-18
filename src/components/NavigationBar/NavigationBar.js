import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

class NavigationBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="white" expand="md" className="my-0 py-1">
          <Navbar.Brand href="/">
            <img
              src={require("../../assets//icons/pokerOutLogo.svg")}
              width="100rem"
              height="auto"
              className="d-inline-block"
              alt="Pokerout Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="../../../public/wiki-pages/what-are-outs.html" className="m-0 py-1 ">
                <Link
                  className="main-font-family m-0 py-0 nav-link text-decoration-none"
                  to="../../../public/wiki-pages/what-are-outs.html"
                >
                  Practice
                </Link>
              </Nav.Link>
              <Nav.Link href="../../../public/wiki-pages/what-are-outs.html" className="m-0 py-1">
                <Link
                  className="main-font-family m-0 py-0 nav-link text-decoration-none"
                  to="../../../public/wiki-pages/what-are-outs.html"
                >
                  What Are Outs?
                </Link>
              </Nav.Link>
              <Nav.Link href="../../../public/wiki-pages/what-are-outs.html" className="m-0 py-1">
                <Link
                  className="main-font-family m-0 py-0 nav-link text-decoration-none"
                  to="../../../public/wiki-pages/what-are-outs.html"
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div class="main-accent-nav"></div>
      </React.Fragment>
    );
  }
}

export default NavigationBar;

//;pp