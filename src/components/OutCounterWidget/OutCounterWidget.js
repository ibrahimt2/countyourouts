import React from "react";
import AnswerHolderContainer from "../AnswerHolder/AnswerHolderContainer";
import CardHolderLarge from "../CardHolderLarge/CardHolderLarge";
import CardHolderSmall from "../CardHolderSmall/CardHolderSmall";

class OutCounterWidget extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CardHolderLarge flopCards={["3d", "4c", "Ad", "redBack", "redBack"]} />
        <CardHolderSmall holeCards={["As", "Qd"]} />
        <AnswerHolderContainer />
      </React.Fragment>
    );
  }
}

export default OutCounterWidget;