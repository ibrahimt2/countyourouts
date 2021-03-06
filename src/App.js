import React from "react";
import "./App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import OutCounterWidgetContainer from "./components/OutCounterWidget/OutCounterWidgetContainer";
import SettingsDropdownContainer from "./components/SettingsDropdown/SettingsDropdownContainer";
import WhatAreOuts from './static-pages/WhatAreOuts'

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar/>
        <Container fluid={true}>
        <Row>
            <Col xs={0} sm={2} md={3} lg={3} xl={3}></Col>
          <Col className="m-1">
            <Container fluid>
              <Switch>
                <Route exact path="/" component={OutCounterWidgetContainer}></Route>
                <Route exact path="/what-are-outs" component={WhatAreOuts}></Route>
              </Switch>
              {/* <WhatAreOuts/> */}
            </Container>
          </Col>
          <Col xs={0} sm={2} md={3} lg={3} xl={3}></Col>
        </Row>
        </Container>

        {/* <SettingsDropdownContainer/> */}
      </Router>
      {/* <Footer></Footer> */}
    </React.Fragment>
  );
}

export default App;
