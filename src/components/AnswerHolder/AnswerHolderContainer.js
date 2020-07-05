import React from "react";
import AnswerHolder from "./AnswerHolder";
import PropTypes from "prop-types";
const { shuffle } = require("../../utils/shuffle");

class AnswerHolderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false};

    this.setShow = this.setShow.bind(this);
  }

  setShow(newShow) {
    this.setState({
      show: newShow,
    });
  }

  handleClose = () => this.setShow(false);
  handleShow = () => this.setShow(true);

  render() {
    return (
      <AnswerHolder
        setAnswerOptions={this.props.setAnswerOptions}
        setAnswerCorrectness={this.props.setAnswerCorrectness}
        setNewFlopScenario={this.props.setNewFlopScenario}
        handleShow={this.handleShow}
        handleClose={this.handleClose}
        show={this.state.show}
        answerOptions={this.props.answerOptions}
        answerCorrectness={this.props.answerCorrectness}
        outCards={this.props.outCards}
        drawName={this.props.drawName}
        drawDescription={"Also on my dick while your at it motherfucker"}
        outsNumber={this.props.outsNumber}
      />
    );
  }
}

AnswerHolder.propTypes = {
  outs: PropTypes.array,
  drawName: PropTypes.string,
  drawDescription: PropTypes.string,
  outsNumber: PropTypes.number,
};

export default AnswerHolderContainer;
