import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import NavigationBar from './components/NavigationBar/NavigationBar'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import OutCounterWidgetContainer from './components/OutCounterWidget/OutCounterWidgetContainer'
import SettingsDropdownContainer from './components/SettingsDropdown/SettingsDropdownContainer';


function App() {
  return (
    <React.Fragment>
      <Router>
      <NavigationBar/>
      <Container>
      <OutCounterWidgetContainer/>
      </Container>
      {/* <SettingsDropdownContainer/> */}
      </Router>
      {/* <Footer></Footer> */}
    </React.Fragment>
  );
}

export default App;
