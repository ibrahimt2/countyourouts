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

const AnswerOptions = (props) => (
  <React.Fragment>
    <Row xs={5} sm={5} md={5} lg={5} xl={5} className="">
      <Col className="px-1 main-font-family">
        <Button

          variant="primary"
          block
          onClick={(e) => {
            props.handleShow(e);
          }}
          value={props.answerOptions[0]}
        >
          {props.answerOptions[0]}
        </Button>{" "}
      </Col>
      <Col className="px-1 main-font-family">
        <Button
          variant="primary"
          block
          onClick={(e) => {
            props.handleShow(e);
          }}
          value={props.answerOptions[1]}
        >
          {props.answerOptions[1]}
        </Button>{" "}
      </Col>
      <Col className="px-1 main-font-family">
        <Button
          variant="primary"
          block
          onClick={(e) => {
            props.handleShow(e);
          }}
          value={props.answerOptions[2]}
        >
          {props.answerOptions[2]}
        </Button>{" "}
      </Col>
      <Col className="px-1 main-font-family">
        <Button
          variant="primary"
          block
          onClick={(e) => {
            props.handleShow(e);
          }}
          value={props.answerOptions[3]}
        >
          {props.answerOptions[3]}
        </Button>{" "}
      </Col>
      <Col className="px-1 main-font-family">
        <Button
          variant="primary"
          block
          onClick={(e) => {
            props.handleShow(e);
          }}
          value={props.answerOptions[4]}
        >
          {props.answerOptions[4]}
        </Button>{" "}
      </Col>
    </Row>
  </React.Fragment>
);

export default AnswerOptions