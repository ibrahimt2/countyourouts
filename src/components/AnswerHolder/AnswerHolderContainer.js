import React from "react";
import AnswerHolder from "./AnswerHolder";
import PropTypes from "prop-types";
const { shuffle } = require("../../utils/shuffle");

class AnswerHolderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, answerCorrectness: false};

    this.setShow = this.setShow.bind(this);
    this.setAnswerCorrectness = this.setAnswerCorrectness.bind(this);
  }

  setAnswerCorrectness(answerCorrectness) {
    this.setState({
        answerCorrectness: answerCorrectness
    })
  }
  
  generateAnswerOptions = () => {
    let answerArr = [];
    let possibleAnswerArr = Array.from([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
    ]);
    possibleAnswerArr.splice(
      possibleAnswerArr.indexOf(this.props.outsNumber),
      1
    );
    
    answerArr.push(this.props.outsNumber);
    answerArr.push(possibleAnswerArr.splice(Math.floor(Math.random() * possibleAnswerArr.length), 1));
    answerArr.push(possibleAnswerArr.splice(Math.floor(Math.random() * possibleAnswerArr.length), 1));
    answerArr.push(possibleAnswerArr.splice(Math.floor(Math.random() * possibleAnswerArr.length), 1));
    answerArr.push(possibleAnswerArr.splice(Math.floor(Math.random() * possibleAnswerArr.length), 1));
      //bundle this up with generateNewFlopScenario and pass it down why dont you
    console.log(this.props.outsNumber)
    console.log(possibleAnswerArr)
    shuffle(answerArr);
    return answerArr;
  };

  setShow(newShow) {
    this.setState({
      show: newShow,
    });
  }

  handleClose = () => this.setShow(false);
  handleShow = () => this.setShow(true);

  render() {
    let answerArr = this.generateAnswerOptions();

    return (
      <AnswerHolder
        generateNewFlopScenario={this.props.generateNewFlopScenario}
        handleShow={this.handleShow}
        handleClose={this.handleClose}
        setAnswerCorrectness={this.setAnswerCorrectness}
        answerCorrectness={this.state.answerCorrectness}
        show={this.state.show}
        outs={["Ac", "3c", "4c", "Ac", "3c", "4c", "Ac", "3c", "4c"]}
        drawName={this.props.drawName}
        answerArr={answerArr}
        answerFeedback={"Suck on my balls"}
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
