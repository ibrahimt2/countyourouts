import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import "./AnswerHolder.css";
import Modal from "react-bootstrap/Modal";
import { putCardStringGetImage } from "../../utils/cardSrc";
import QuestionTooltip from "./QuestionTooltip";
import AnswerOptions from "./AnswerOptions";

let cardSrc = require("../../utils/cardSrc");

class AnswerHolder extends React.Component {
  render() {
    let outsItems = this.props.outCards.map((outItem) => (
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
                <Row className="justify-content-center">
                  {this.props.displayAnswerCorrectnessIcon(
                    this.props.answerCorrectness
                  )}
                </Row>
                <Row className="justify-content-center mt-3">
                  <h6 className="text-center main-font-family">{this.props.drawName}</h6>
                </Row>
                <Row className="justify-content-center">
                  <h6 className="text-center align-middle main-font-family">
                    {this.props.outCards.length} OUTS
                  </h6>
                </Row>
                <Row className="justify-content-center">
                  <div id="outsWrapper">
                    <div id="outsInnerWrapper">{outsItems}</div>
                  </div>
                </Row>
                <Row className="float-right">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      this.props.handleClose();
                      this.props.setNewFlopScenario();
                    }}
                    className="mx-0 my-1 main-font-family"
                  >
                    Next Hand
                  </Button>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer className="p-0 m-0"></Modal.Footer>
          </Modal>
          <Row>
            <Col xs={0} sm={2} md={3} lg={4} xl={4} className=""></Col>
            <Col xs={12} sm={8} md={6} lg={4} xl={4}>
              <Container fluid className="cardHolder pb-1">
                <QuestionTooltip/>
                <AnswerOptions
                  handleShow={this.props.handleShow}
                  answerOptions={this.props.answerOptions}
                />
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
