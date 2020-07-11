// import React from "react";
// import OutCounterWidget from "./OutCounterWidget";
// import { generateFlopScenario } from "poker-draw-generator/drawGenerator";
// import {shuffle } from '../../utils/shuffle'

// const OutCounterWidgetContainer = (props) => {

//   const [insideStraightFreq, setInsideStraightFreq] = useState(5);
//   const [openStraightFreq, setOpenStraightFreq] = useState(5);
//   const [flushDrawFreq, setFlushDrawFreq] = useState(5);
//   const [noHitsFreq, setNoHitsFreq] = useState(5);
//   const [
//     tripsToFullhouseOrQuadsFreq,
//     setTripsToFullhouseOrQuadsFreq,
//   ] = useState(5);
//   const [onePairToTwoPairFreq, setOnePairToTwoPairFreq] = useState(5);
//   const [twoPairToFullhouseFreq, setTwoPairToFullhouseFreq] = useState(5);
//   const [flopInformation, setFlopInformation] = useState(generateFlopScenario())

//   constructor(props) {
//     super(props);

//     let initialFlop = generateFlopScenario();
//     console.log(initialFlop + 'INITIAL FLOP');
//     let initialAnswerOptions = this.generateAnswerOptions(initialFlop.outs);
//     console.log(initialAnswerOptions+ 'ANSWER OPTIONS');


//     this.state = {
//       flopInformation: initialFlop,
//       answerOptions: initialAnswerOptions,
//       answerCorrectness: false
//     };

//     this.setNewFlopScenario = this.setNewFlopScenario.bind(this);
//     this.setAnswerOptions = this.setAnswerOptions.bind(this);
//     this.setAnswerCorrectness = this.setAnswerCorrectness.bind(this)
//   }

//   setNewFlopScenario() {
//     let newFlopScenario = generateFlopScenario(); 
//     this.setState({
//       flopInformation: newFlopScenario,
//     });

//     let newAnswerOptions = this.generateAnswerOptions(newFlopScenario.outCards.length);
//     this.setState({
//       answerOptions: newAnswerOptions
//     });
//   }

//   setAnswerOptions() {
    
//   } 

//   setAnswerCorrectness(newAnswerCorrectness) {
//     this.setState({
//       answerCorrectness: newAnswerCorrectness
//     })
//   }

//   generateAnswerOptions = (correctAnswer) => {
//     let answerArr = [];
//     let possibleAnswerArr = Array.from([
//       1,
//       2,
//       3,
//       4,
//       5,
//       6,
//       7,
//       8,
//       9,
//       10,
//       11,
//       12,
//       13,
//       14,
//       15,
//       16,
//       17,
//       18,
//       19,
//       20,
//       21,
//     ]);
//     possibleAnswerArr.splice(
//       possibleAnswerArr.indexOf(correctAnswer),
//       1
//     );
    
//     answerArr.push(correctAnswer);
//     answerArr.push(possibleAnswerArr.splice(Math.floor(Math.random() * possibleAnswerArr.length), 1)[0]);
//     answerArr.push(possibleAnswerArr.splice(Math.floor(Math.random() * possibleAnswerArr.length), 1)[0]);
//     answerArr.push(possibleAnswerArr.splice(Math.floor(Math.random() * possibleAnswerArr.length), 1)[0]);
//     answerArr.push(possibleAnswerArr.splice(Math.floor(Math.random() * possibleAnswerArr.length), 1)[0]);
//     console.log(answerArr + "ANSWER ARR INSIDE METHOD")
//       //bundle this up with generateNewFlopScenario and pass it down why dont you
//     //console.log(correctAnswer)
//     //console.log(possibleAnswerArr)
//     shuffle(answerArr);
//     return answerArr;
//   };
  

//   render() {
//     return (
//       <OutCounterWidget
//         setNewFlopScenario={this.setNewFlopScenario}
//         setAnswerCorrectness={this.setAnswerCorrectness}
//         setAnswerOptions={this.setAnswerOptions}
//         answerCorrectness={this.state.answerCorrectness}
//         answerOptions={this.state.answerOptions}
//         holeCards={this.state.flopInformation.holeCards}
//         flopCards={this.state.flopInformation.flopCards}
//         drawName={this.state.flopInformation.name}
//         outsNumber={this.state.flopInformation.outs}
//         outCards={this.state.flopInformation.outCards}
//       />
//     );
//   }
// }

// export default OutCounterWidgetContainer;
