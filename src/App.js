import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import NavigationBar from './components/NavigationBar/NavigationBar'
import CardHolderLarge from './components/CardHolderLarge/CardHolderLarge'
import CardHolderSmall from './components/CardHolderSmall/CardHolderSmall'
import { BrowserRouter as Router } from 'react-router-dom'
import AnswerHolderContainer from './components/AnswerHolder/AnswerHolderContainer';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <React.Fragment>
      <Router>
      <NavigationBar/>
      <Container className="">
      
      <CardHolderLarge/>
      <CardHolderSmall/>
      <AnswerHolderContainer/>
      </Container>
      <Footer></Footer>
      </Router>
    </React.Fragment>
  );
}

export default App;
