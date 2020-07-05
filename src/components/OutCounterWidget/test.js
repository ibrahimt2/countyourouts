const {shuffle} = require("../../utils/shuffle");

let generateAnswerOptions = (correctAnswer) => {
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
    possibleAnswerArr.indexOf(correctAnswer),
    1
  );
  
  answerArr.push(correctAnswer);
  console.log(typeof correctAnswer)
  answerArr.push(possibleAnswerArr.splice(Math.floor(Math.random() * possibleAnswerArr.length), 1)[0]);
  answerArr.push(possibleAnswerArr.splice(Math.floor(Math.random() * possibleAnswerArr.length), 1)[0]);
  answerArr.push(possibleAnswerArr.splice(Math.floor(Math.random() * possibleAnswerArr.length), 1)[0]);
  answerArr.push(possibleAnswerArr.splice(Math.floor(Math.random() * possibleAnswerArr.length), 1)[0]);
    //bundle this up with generateNewFlopScenario and pass it down why dont you
  console.log(correctAnswer)
  console.log(possibleAnswerArr)
  shuffle(answerArr);
  return answerArr;
};

console.log(generateAnswerOptions(4))