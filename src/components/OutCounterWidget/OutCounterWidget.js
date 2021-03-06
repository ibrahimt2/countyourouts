import React from "react";
import AnswerHolderContainer from "../AnswerHolder/AnswerHolderContainer";
import CardHolderLarge from "../CardHolderLarge/CardHolderLarge";
import CardHolderSmall from "../CardHolderSmall/CardHolderSmall";
import PropTypes from "prop-types";
import SettingsDropdownContainer from "../SettingsDropdown/SettingsDropdownContainer";

class OutCounterWidget extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SettingsDropdownContainer
        insideStraightFreq={this.props.insideStraightFreq}
        openStraightFreq={this.props.openStraightFreq}
        flushDrawFreq={this.props.flushDrawFreq}
        noHitsFreq={this.props.noHitsFreq}
        tripsToFullhouseOrQuadsFreq={this.props.tripsToFullhouseOrQuadsFreq}
        onePairToTwoPairFreq={this.props.onePairToTwoPairFreq}
        twoPairToFullhouseFreq={this.props.twoPairToFullhouseFreq}
        setInsideStraightFreq={this.props.setInsideStraightFreq}
        setOpenStraightFreq={this.props.setOpenStraightFreq}
        setFlushDrawFreq={this.props.setFlushDrawFreq}
        setNoHitsFreq={this.props.setNoHitsFreq}
        setTripsToFullhouseOrQuadsFreq={this.props.setTripsToFullhouseOrQuadsFreq}
        setOnePairToTwoPairFreq={this.props.setOnePairToTwoPairFreq}
        setTwoPairToFullhouseFreq={this.props.setTwoPairToFullhouseFreq}/>
        <CardHolderLarge
          flopCards={[
            this.props.flopCards[0],
            this.props.flopCards[1],
            this.props.flopCards[2],
            "redBack",
            "redBack",
          ]}
        />
        <CardHolderSmall
          holeCards={[this.props.holeCards[0], this.props.holeCards[1]]}
        />
        <AnswerHolderContainer
          setAnswerCorrectness={this.props.setAnswerCorrectness}
          setAnswerOptions={this.props.setAnswerOptions}
          setNewFlopScenario={this.props.setNewFlopScenario}
          answerCorrectness={this.props.answerCorrectness}
          answerOptions={this.props.answerOptions}
          outCards={this.props.outCards}
          outsNumber={this.props.outsNumber}
          drawName={this.props.drawName}
        />
      </React.Fragment>
    );
  }
}

OutCounterWidget.propTypes = {
  holeCards: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
  ]).isRequired,
  flopCards: PropTypes.oneOfType([PropTypes.string, PropTypes.string])
    .isRequired,
  answerFeedback: PropTypes.string,
  outs: PropTypes.array,
  drawName: PropTypes.string,
  drawDescription: PropTypes.string,
  outsNumber: PropTypes.number,
  generateNewFlopScenario: PropTypes.func,
};

export default OutCounterWidget;
