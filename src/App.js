import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import NavigationBar from './components/NavigationBar/NavigationBar'
import CardHolderLarge from './components/CardHolderLarge/CardHolderLarge'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
      <Router>
      <NavigationBar/>
      <Container>
      
      <CardHolderLarge/>
      </Container>
      </Router>
    </React.Fragment>
  );
}

export default App;
