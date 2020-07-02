import React from "react";
import OutCounterWidget from "./OutCounterWidget";
import { generateFlopScenario } from "poker-draw-generator/drawGenerator";

class OutCounterWidgetContainer extends React.Component {
  constructor(props) {
    super(props);

    let initialFlop = generateFlopScenario();
    console.log(initialFlop);

    this.state = {
      flopInformation: initialFlop,
    };

    this.generateNewFlopScenario = this.generateNewFlopScenario.bind(this);
  }

  generateNewFlopScenario() {
    let newFlopScenario = generateFlopScenario();
    this.setState({
      flopInformation: newFlopScenario,
    });
  }

  render() {
    return (
      <OutCounterWidget
        generateNewFlopScenario={this.generateNewFlopScenario}
        holeCards={this.state.flopInformation.holeCards}
        flopCards={this.state.flopInformation.flopCards}
        drawName={this.state.flopInformation.name}
        outsNumber={this.state.flopInformation.outs}
      />
    );
  }
}

export default OutCounterWidgetContainer;
