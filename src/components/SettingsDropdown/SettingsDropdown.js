import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const SettingsDropdown = (props) => (
  <React.Fragment>
    <Container fluid className="mx-0 px-0 mt-1">
      <Row>
        {/* <Col xs={0} sm={2} md={3} lg={3} xl={3}></Col> */}
        {/* <Col xs={12} sm={8} md={6} lg={6} xl={6}> */}
          <ButtonGroup size="sm" style={{ width: "100%" }}>
            <Button variant="primary" className="m-0 p-0">
              <p className="my-auto main-font-family x-small-font m-0 p-0">
                Normal
              </p>
            </Button>
            <Button className="m-0 p-0">
              <p className="my-auto main-font-family x-small-font m-0 p-0">
                Blitz
              </p>
            </Button>
            <Button className="m-0 p-0">
              <p className="my-auto main-font-family x-small-font m-0 p-0">
                Marathon
              </p>
            </Button>
            <Dropdown>
              <Dropdown.Toggle
                variant="primary"
                id="dropdown-basic"
                style={{ "font-size": "xx-small" }}
              >
                <img
                  src={require("../../assets//icons/gearicon.svg")}
                  width="15rem"
                  height="auto"
                  className="d-inline-block"
                  alt="Pokerout Logo"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Container fluid>
                  <Row>
                    <Col xs={3} className="p-1 pl- m-0">
                      <p className="my-auto settings-dropdown-font">
                        Draw
                      </p>
                    </Col>
                    <Col className="align-center my-auto p-0 m-0"></Col>
                    <Col
                      xs={2}
                      className="p-1 m-0 float-right my-auto align-center"
                    >
                      <p className="my-auto settings-dropdown-font">
                        Prob
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={4} className="p-1 pl-0 m-0">
                      <p className="my-auto settings-dropdown-font">
                        Inside Straight
                      </p>
                    </Col>
                    <Col className="align-center my-auto p-0 m-0">
                      <Form.Group
                        className="p-0 m-0"
                        controlId="formBasicRange"
                      >
                        <Form.Control
                          variant="primary"
                          type="range"
                          min={0}
                          max={10}
                          onChange={(e) =>
                            props.setInsideStraightFreq(e.target.value)
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col
                      xs={2}
                      className="p-1 m-0 mr-1 float-right my-auto align-center"
                    >
                      <p className="my-auto settings-dropdown-font">
                        {props.getInsideStraightProb().toFixed(1)}%
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={4} className="p-1 pl-0 m-0">
                      <p className="my-auto settings-dropdown-font">
                        Open Straight
                      </p>
                    </Col>
                    <Col className="align-center my-auto p-0 m-0">
                      <Form.Group
                        className="p-0 m-0"
                        controlId="formBasicRange"
                      >
                        <Form.Control
                          variant="primary"
                          type="range"
                          min={0}
                          max={10}
                          onChange={(e) =>
                            props.setOpenStraightFreq(e.target.value)
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col
                      xs={2}
                      className="p-1 m-0 mr-1 float-right my-auto align-center"
                    >
                      <p className="my-auto settings-dropdown-font">
                        {props.getOpenStraightProb().toFixed(1)}%
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={4} className="p-1 pl-0 m-0">
                      <p className="my-auto settings-dropdown-font">
                        Flush
                      </p>
                    </Col>
                    <Col className="align-center my-auto p-0 m-0">
                      <Form.Group
                        className="p-0 m-0"
                        controlId="formBasicRange"
                      >
                        <Form.Control
                          variant="primary"
                          type="range"
                          min={1}
                          max={10}
                          onChange={(e) =>
                            props.setFlushDrawFreq(e.target.value)
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col
                      xs={2}
                      className="p-1 m-0 mr-1 float-right my-auto align-center"
                    >
                      <p className="my-auto settings-dropdown-font">
                        {props.getFlushDrawProb().toFixed(1)}%
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={4} className="p-1 pl-0 m-0">
                      <p className="my-auto settings-dropdown-font">
                        1P to 2P
                      </p>
                    </Col>
                    <Col className="align-center my-auto p-0 m-0">
                      <Form.Group
                        className="p-0 m-0"
                        controlId="formBasicRange"
                      >
                        <Form.Control
                          variant="primary"
                          type="range"
                          min={0}
                          max={10}
                          onChange={(e) =>
                            props.setOnePairToTwoPairFreq(e.target.value)
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col
                      xs={2}
                      className="p-1 m-0 mr-1 float-right my-auto align-center"
                    >
                      <p className="my-auto settings-dropdown-font">
                        {props.getOnePairToTwoPairProb().toFixed(1)}%
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={4} className="p-1 pl-0 m-0">
                      <p className="my-auto settings-dropdown-font">
                        2P to Trips
                      </p>
                    </Col>
                    <Col className="align-center my-auto p-0 m-0">
                      <Form.Group
                        className="p-0 m-0"
                        controlId="formBasicRange"
                      >
                        <Form.Control
                          variant="primary"
                          type="range"
                          min={0}
                          max={10}
                          onChange={(e) =>
                            props.setTwoPairToFullhouseFreq(e.target.value)
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col
                      xs={2}
                      className="p-1 m-0 mr-1 float-right my-auto align-center"
                    >
                      <p className="my-auto settings-dropdown-font">
                        {props.getTwoPairToFullhouseProb().toFixed(1)}%
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={4} className="p-1 pl-0 m-0">
                      <p className="my-auto settings-dropdown-font">
                        Trips To Full
                      </p>
                    </Col>
                    <Col className="align-center my-auto p-0 m-0">
                      <Form.Group
                        className="p-0 m-0"
                        controlId="formBasicRange"
                      >
                        <Form.Control
                          variant="primary"
                          type="range"
                          min={0}
                          max={10}
                          onChange={(e) =>
                            props.setTripsToFullhouseOrQuadsFreq(e.target.value)
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col
                      xs={2}
                      className="p-1 m-0 mr-1 float-right my-auto align-center"
                    >
                      <p className="my-auto settings-dropdown-font">
                        {props.getTripsToFullhouseOrQuadsProb().toFixed(1)}%
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={4} className="p-1 pl-0 m-0">
                      <p className="my-auto settings-dropdown-font">
                        No Hits
                      </p>
                    </Col>
                    <Col className="align-center my-auto p-0 m-0">
                      <Form.Group
                        className="p-0 m-0"
                        controlId="formBasicRange"
                      >
                        <Form.Control
                          variant="primary"
                          type="range"
                          min={0}
                          max={10}
                          onChange={(e) => props.setNoHitsFreq(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col
                      xs={2}
                      className="p-1 m-0 mr-1 float-right my-auto align-center"
                    >
                      <p className="my-auto settings-dropdown-font">
                        {props.getNoHitsProb().toFixed(1)}%
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Dropdown.Menu>
            </Dropdown>
          </ButtonGroup>
        {/* </Col> */}
        {/* <Col xs={0} sm={2} md={3} lg={3} xl={3}></Col> */}
      </Row>
    </Container>
  </React.Fragment>
);

export default SettingsDropdown;
