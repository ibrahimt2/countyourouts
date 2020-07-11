import React from "react";
import OutCounterWidget from "./OutCounterWidget";
import { generateFlopScenario } from "poker-draw-generator/drawGenerator";
import { shuffle } from "../../utils/shuffle";
import generateInsideStraight from "poker-draw-generator/generateInsideStraight";

class OutCounterWidgetContainer extends React.Component {
  constructor(props) {
    super(props);

    let initialFreq = 5;
    let initialFlop = generateFlopScenario(
      initialFreq,
      initialFreq,
      initialFreq,
      initialFreq,
      initialFreq,
      initialFreq,
      initialFreq
    );
    console.log(initialFlop + "INITIAL FLOP");
    let initialAnswerOptions = this.generateAnswerOptions(
      initialFlop.outCards.length
    );
    console.log(initialAnswerOptions + "ANSWER OPTIONS");

    this.state = {
      flopInformation: initialFlop,
      answerOptions: initialAnswerOptions,
      answerCorrectness: false,
      insideStraightFreq: initialFreq,
      openStraightFreq: initialFreq,
      flushDrawFreq: initialFreq,
      noHitsFreq: initialFreq,
      tripsToFullhouseOrQuadsFreq: initialFreq,
      onePairToTwoPairFreq: initialFreq,
      twoPairToFullhouseFreq: initialFreq,
    };

    this.setNewFlopScenario = this.setNewFlopScenario.bind(this);
    this.setAnswerCorrectness = this.setAnswerCorrectness.bind(this);
    this.setInsideStraightFreq = this.setInsideStraightFreq.bind(this);
    this.setOpenStraightFreq = this.setOpenStraightFreq.bind(this);
    this.setFlushDrawFreq = this.setFlushDrawFreq.bind(this);
    this.setNoHitsFreq = this.setNoHitsFreq.bind(this);
    this.setTripsToFullhouseOrQuadsFreq = this.setTripsToFullhouseOrQuadsFreq.bind(
      this
    );
    this.setOnePairToTwoPairFreq = this.setOnePairToTwoPairFreq.bind(this);
    this.setTwoPairToFullhouseFreq = this.setTwoPairToFullhouseFreq.bind(this);
  }

  setInsideStraightFreq(updateVal) {
    this.setState({
      insideStraightFreq: updateVal,
    });
  }

  setOpenStraightFreq(updateVal) {
    this.setState({
      openStraightFreq: updateVal,
    });
  }

  setFlushDrawFreq(updateVal) {
    this.setState({
      flushDrawFreq: updateVal,
    });
  }

  setNoHitsFreq(updateVal) {
    this.setState({
      noHitsFreq: updateVal,
    });
  }

  setTripsToFullhouseOrQuadsFreq(updateVal) {
    this.setState({
      tripsToFullhouseOrQuadsFreq: updateVal,
    });
  }

  setOnePairToTwoPairFreq(updateVal) {
    this.setState({
      onePairToTwoPairFreq: updateVal,
    });
  }

  setTwoPairToFullhouseFreq(updateVal) {
    this.setState({
      twoPairToFullhouseFreq: updateVal,
    });
  }

  setNewFlopScenario() {
    let newFlopScenario = generateFlopScenario(
      this.state.insideStraightFreq,
      this.state.openStraightFreq,
      this.state.flushDrawFreq,
      this.state.noHitsFreq,
      this.state.tripsToFullhouseOrQuadsFreq,
      this.state.twoPairToFullhouseFreq,
      this.state.onePairToTwoPairOrTripsFreq
    );
    this.setState({
      flopInformation: newFlopScenario,
    });

    let newAnswerOptions = this.generateAnswerOptions(
      newFlopScenario.outCards.length
    );
    this.setState({
      answerOptions: newAnswerOptions,
    });
  }

  setAnswerCorrectness(newAnswerCorrectness) {
    this.setState({
      answerCorrectness: newAnswerCorrectness,
    });
  }

  generateAnswerOptions = (correctAnswer) => {
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
    possibleAnswerArr.splice(possibleAnswerArr.indexOf(correctAnswer), 1);

    answerArr.push(correctAnswer);
    answerArr.push(
      possibleAnswerArr.splice(
        Math.floor(Math.random() * possibleAnswerArr.length),
        1
      )[0]
    );
    answerArr.push(
      possibleAnswerArr.splice(
        Math.floor(Math.random() * possibleAnswerArr.length),
        1
      )[0]
    );
    answerArr.push(
      possibleAnswerArr.splice(
        Math.floor(Math.random() * possibleAnswerArr.length),
        1
      )[0]
    );
    answerArr.push(
      possibleAnswerArr.splice(
        Math.floor(Math.random() * possibleAnswerArr.length),
        1
      )[0]
    );
    console.log(answerArr + "ANSWER ARR INSIDE METHOD");
    //bundle this up with generateNewFlopScenario and pass it down why dont you
    //console.log(correctAnswer)
    //console.log(possibleAnswerArr)
    shuffle(answerArr);
    return answerArr;
  };

  render() {
    return (
      <OutCounterWidget
        insideStraightFreq={this.state.insideStraightFreq}
        openStraightFreq={this.state.openStraightFreq}
        flushDrawFreq={this.state.flushDrawFreq}
        noHitsFreq={this.state.noHitsFreq}
        tripsToFullhouseOrQuadsFreq={this.state.tripsToFullhouseOrQuadsFreq}
        onePairToTwoPairFreq={this.state.onePairToTwoPairFreq}
        twoPairToFullhouseFreq={this.state.twoPairToFullhouseFreq}
        setInsideStraightFreq={this.setInsideStraightFreq}
        setOpenStraightFreq={this.setOpenStraightFreq}
        setFlushDrawFreq={this.setFlushDrawFreq}
        setNoHitsFreq={this.setNoHitsFreq}
        setTripsToFullhouseOrQuadsFreq={this.setTripsToFullhouseOrQuadsFreq}
        setOnePairToTwoPairFreq={this.setOnePairToTwoPairFreq}
        setTwoPairToFullhouseFreq={this.setTwoPairToFullhouseFreq}
        setNewFlopScenario={this.setNewFlopScenario}
        setAnswerCorrectness={this.setAnswerCorrectness}
        setAnswerOptions={this.setAnswerOptions}
        answerCorrectness={this.state.answerCorrectness}
        answerOptions={this.state.answerOptions}
        holeCards={this.state.flopInformation.holeCards}
        flopCards={this.state.flopInformation.flopCards}
        drawName={this.state.flopInformation.name}
        outsNumber={this.state.flopInformation.outs}
        outCards={this.state.flopInformation.outCards}
      />
    );
  }
}

export default OutCounterWidgetContainer;
