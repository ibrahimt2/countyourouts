const {shuffle} = require("../../utils/shuffle");

function generateAnswerOption() {
    let answerArr = [];
    let cAnswer = 5
    let possibleAnswerArr = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]);
    possibleAnswerArr.splice(possibleAnswerArr.indexOf(cAnswer), 1);

    answerArr.push(cAnswer);
    answerArr.push(possibleAnswerArr[Math.floor(Math.random() * possibleAnswerArr.length)])
    answerArr.push(possibleAnswerArr[Math.floor(Math.random() * possibleAnswerArr.length)])
    answerArr.push(possibleAnswerArr[Math.floor(Math.random() * possibleAnswerArr.length)])
    answerArr.push(possibleAnswerArr[Math.floor(Math.random() * possibleAnswerArr.length)])

    shuffle(answerArr)
    console.log(answerArr);
    return answerArr;
  }

generateAnswerOption();