import React from 'react';
import OutCounterWidget from './OutCounterWidget';
import {generateFlopScenario} from 'poker-draw-generator/drawGenerator';




class OutCounterWidgetContainer extends React.Component {
    
    constructor(props) {
        super(props);

        let initialFlop = generateFlopScenario();
        console.log(initialFlop)
        console.log('FIRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRED')

        this.state = {
            flopInformation: initialFlop
        }
    }

    render() {
        return (
            <OutCounterWidget holeCards={this.state.flopInformation.holeCards} flopCards={this.state.flopInformation.flopCards} drawName={this.state.flopInformation.name} outsNumber={this.state.flopInformation.outs}/>
        );

    }
}

export default OutCounterWidgetContainer