import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

const SettingsDropdown = (props) => (
  <React.Fragment>
    <Dropdown>
      <Dropdown.Toggle variant="white" id="dropdown-basic" style={{ "font-size": "x-small" }}>>
      <img
              src={require("../../assets//icons/gear.svg")}
              width="30rem"
              height="auto"
              className="d-inline-block"
              alt="Pokerout Logo"
            />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Container>
          <Row>
            <Col xs={3} className="p-1 pl- m-0">
              <p className="my-auto" style={{ "font-size": "x-small" }}>
                Draw
              </p>
            </Col>
            <Col className="align-center my-auto p-0 m-0"></Col>
            <Col xs={2} className="p-1 m-0 float-right my-auto align-center">
              <p className="my-auto"  style={{ "font-size": "x-small" }}>
                Prob
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={4} className="p-1 pl-0 m-0">
              <p className="my-auto" style={{ "font-size": "x-small" }}>
                Inside Straight
              </p>
            </Col>
            <Col className="align-center my-auto p-0 m-0">
              <Form.Group className="p-0 m-0" controlId="formBasicRange">
                <Form.Control variant="primary" type="range" min={0} max={10} onChange={e => props.setInsideStraightFreq(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col xs={2} className="p-1 m-0 float-right my-auto align-center">
              <p className="my-auto" style={{ "font-size": "x-small" }}>
                {props.getInsideStraightProb().toFixed(1)}%
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={4} className="p-1 pl-0 m-0">
              <p className="my-auto" style={{ "font-size": "x-small" }}>
                Open Straight
              </p>
            </Col>
            <Col className="align-center my-auto p-0 m-0">
              <Form.Group className="p-0 m-0" controlId="formBasicRange">
                <Form.Control variant="primary" type="range" min={0} max={10} onChange={e => props.setOpenStraightFreq(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col xs={2} className="p-1 m-0 float-right my-auto align-center">
              <p className="my-auto" style={{ "font-size": "x-small" }}>
              {props.getOpenStraightProb().toFixed(1)}%
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={4} className="p-1 pl-0 m-0">
              <p className="my-auto" style={{ "font-size": "x-small" }}>
                Flush
              </p>
            </Col>
            <Col className="align-center my-auto p-0 m-0">
              <Form.Group className="p-0 m-0" controlId="formBasicRange">
                <Form.Control variant="primary" type="range" min={1} max={10} onChange={e => props.setFlushDrawFreq(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col xs={2} className="p-1 m-0 float-right my-auto align-center">
              <p className="my-auto" style={{ "font-size": "x-small" }}>
              {props.getFlushDrawProb().toFixed(1)}%
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={4} className="p-1 pl-0 m-0">
              <p className="my-auto" style={{ "font-size": "x-small" }}>
                1P to 2P
              </p>
            </Col>
            <Col className="align-center my-auto p-0 m-0">
              <Form.Group className="p-0 m-0" controlId="formBasicRange">
                <Form.Control variant="primary" type="range" min={0} max={10} onChange={e => props.setOnePairToTwoPairFreq(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col xs={2} className="p-1 m-0 float-right my-auto align-center">
              <p className="my-auto" style={{ "font-size": "x-small" }}>
              {props.getOnePairToTwoPairProb().toFixed(1)}%
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={4} className="p-1 pl-0 m-0">
              <p className="my-auto" style={{ "font-size": "x-small" }}>
                2P to Trips
              </p>
            </Col>
            <Col className="align-center my-auto p-0 m-0">
              <Form.Group className="p-0 m-0" controlId="formBasicRange">
                <Form.Control variant="primary" type="range" min={0} max={10} onChange={e => props.setTwoPairToFullhouseFreq(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col xs={2} className="p-1 m-0 float-right my-auto align-center">
              <p className="my-auto" style={{ "font-size": "x-small" }}>
              {props.getTwoPairToFullhouseProb().toFixed(1)}%
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={4} className="p-1 pl-0 m-0">
              <p className="my-auto" style={{ "font-size": "x-small" }}>
                Trips To Full
              </p>
            </Col>
            <Col className="align-center my-auto p-0 m-0">
              <Form.Group className="p-0 m-0" controlId="formBasicRange">
                <Form.Control variant="primary" type="range" min={0} max={10} onChange={e => props.setTripsToFullhouseOrQuadsFreq(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col xs={2} className="p-1 m-0 float-right my-auto align-center">
              <p className="my-auto" style={{ "font-size": "x-small" }}>
              {props.getTripsToFullhouseOrQuadsProb().toFixed(1)}%
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={4} className="p-1 pl-0 m-0">
              <p className="my-auto" style={{ "font-size": "x-small" }}>
                No Hits
              </p>
            </Col>
            <Col className="align-center my-auto p-0 m-0">
              <Form.Group className="p-0 m-0" controlId="formBasicRange">
                <Form.Control variant="primary" type="range" min={0} max={10} onChange={e => props.setNoHitsFreq(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col xs={2} className="p-1 m-0 float-right my-auto align-center">
              <p className="my-auto" style={{ "font-size": "x-small" }}>
              {props.getNoHitsProb().toFixed(1)}%
              </p>
            </Col>
          </Row>
        </Container>
      </Dropdown.Menu>
    </Dropdown>
  </React.Fragment>
);

export default SettingsDropdown;
