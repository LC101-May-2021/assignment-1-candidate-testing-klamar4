var input = require('readline-sync');
var candidateName = "";

function askForName() {
  const name = input.question('What is your name?');
  candidateName = name;
  return name;
}

let questions = ["Who was the first woman in space?", "True or false: 5 km == 5000 meters?", "(5+3)/2*10 = ?", "Given the array [8, 'orbit', 'Trajectory', 45] what entry is at index 2?", "What is the minimum crew size for the ISS?"];
let userAnswers = [];
let correctAnswers = ["sally ride", "true", "40", "trajectory", "3"];


function askQuestions() {
  for (let i = 0; i < questions.length; i++) {
    var answer = input.question(questions[i])
    var toLowercase = answer.toLocaleLowerCase();
    userAnswers.push(toLowercase);
  }
}

function gradeQuiz() {
  let totalCorrect = 0;
  console.log(`Candidate Name: ${candidateName}`)
  for (let i = 0; i < correctAnswers.length; i++) {
    console.log(`${i} ) ${questions[i]}`);
    console.log(`Your Answer: ${userAnswers[i]}`)
    console.log(`Correct Answer: ${correctAnswers[i]}`)
    if(userAnswers[i] === correctAnswers[i]){ 
      totalCorrect++;
  }
}
console.log(`>>> Overall Grade: ${(totalCorrect * 100) / correctAnswers.length}% (${totalCorrect} of ${correctAnswers.length} responses correct) <<<`)
  let result = "";
  if(totalCorrect > 2){
    result = "PASSED"
  } else {
    result = "FAILED";
  }
  console.log(`>>> Status: ${result} <<<`)
}

function runProgram() {
  askForName(); 
  askQuestions();
  gradeQuiz();
}

module.exports = {
  runProgram: runProgram
};