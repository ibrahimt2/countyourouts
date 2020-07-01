import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import "./AnswerHolder.css";
import Modal from "react-bootstrap/Modal";
import { putCardStringGetImage } from "../../utils/cardSrc";

let cardSrc = require("../../utils/cardSrc");

class AnswerHolder extends React.Component {
  render() {

    let outsItems = this.props.outs.map((outItem) => (
      <img
        className="card border border-dark mx-auto inline-block"
        src={putCardStringGetImage[outItem]}
        style={{
          width: "100%",
          height: "auto",
          "max-width": "50px",
        }}
      />
    ));

    return (
      <React.Fragment>
        <Container fluid className="mx-0 px-0 mt-1">
          <Modal
            show={this.props.show}
            onHide={this.props.handleClose}
            className="modal-dialog text-center"
          >
            <Modal.Body>
              <Container>
                <h6 className="text-left">{this.props.answerFeedback}</h6>
                <h6 className="text-left">Draw Name: {this.props.drawName}</h6>
                <p className="text-left">{this.props.drawDescription}</p>
                <h6 className="text-center align-middle">
                  {this.props.outs.length} OUTS
                </h6>
                {/* <p>Wrong!</p>
              <p><a>Scenario: 'Two Pair to Fullhouse'</a></p>
              <p>Description: </p> */}
                <div id="outsWrapper">
                  <div id="outsInnerWrapper">{outsItems}</div>
                </div>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                size="sm"
                onClick={this.props.handleClose}
              >
                Next Hand
              </Button>
            </Modal.Footer>
          </Modal>
          <Row>
            <Col xs={0} sm={2} md={3} lg={4} xl={4} className=""></Col>
            <Col xs={12} sm={8} md={6} lg={4} xl={4}>
              <Container fluid className="cardHolder pb-1">
                <h6 className="text-center mb-1">How many outs do you have?</h6>
                <Row xs={5} sm={5} md={5} lg={5} xl={5} className="">
                  <Col className="px-1">
                    <Button
                      variant="dark"
                      block
                      onClick={this.props.handleShow}
                    >
                      12
                    </Button>{" "}
                  </Col>
                  <Col className="px-1">
                    <Button
                      variant="dark"
                      block
                      onClick={this.props.handleShow}
                    >
                      4
                    </Button>{" "}
                  </Col>
                  <Col className="px-1">
                    <Button
                      variant="dark"
                      block
                      onClick={this.props.handleShow}
                    >
                      5
                    </Button>{" "}
                  </Col>
                  <Col className="px-1">
                    <Button
                      variant="dark"
                      block
                      onClick={this.props.handleShow}
                    >
                      19
                    </Button>{" "}
                  </Col>
                  <Col className="px-1">
                    <Button
                      variant="dark"
                      block
                      onClick={this.props.handleShow}
                    >
                      2
                    </Button>{" "}
                  </Col>
                </Row>
              </Container>
            </Col>

            <Col xs={0} sm={2} md={3} lg={4} xl={4}></Col>
          </Row>
        </Container>

      </React.Fragment>
    );
  }
}

AnswerHolder.propTypes = {
  answerFeedback: PropTypes.string,
  outs: PropTypes.array,
  drawName: PropTypes.string,
  drawDescription: PropTypes.string,
};

export default AnswerHolder;
