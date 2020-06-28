import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import './NavigationBar.css'


class NavigationBar extends React.Component {
    render() {
        return(
        <Navbar bg="light" variant="light" className="m-0 py-0">
        <Navbar.Brand href="/">
            <img
            src={require('../../assets/pokerOutLogo.svg')}
            width="100rem"
            height="auto"
            className="d-inline-block"
            alt="Pokerout Logo"
            />
        </Navbar.Brand>
        
        <Nav className="mr-auto" >
                    <Nav.Item>
                        <Link className="font-x-small text-decoration-none" to="/"><Nav.Link href="/">Home</Nav.Link></Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="font-x-small text-decoration-none" to="/"><Nav.Link href="/about">About</Nav.Link></Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Link className="font-x-small text-decoration-none" to="/"><Nav.Link href="/contact">Contact</Nav.Link></Link>
                    </Nav.Item>
                </Nav>
        
    </Navbar>
        )
    }
}

export default NavigationBar;
