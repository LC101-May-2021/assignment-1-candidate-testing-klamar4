var input = require('readline-sync');
var candidateAnswers = [];
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
function askForName() {
  const name = input.question('What is your name?');
  // TODO 1.1b: Ask for candidate's name //
  return name;
}
let candidateName = askForName();
// console.log("Greetings" + candidateName + "!");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
//let question = input.question ("Who was the first American woman in space? ");
//let correctAnswer = "Sally Ride";
//let candidateAnswer = questions + [];
let questions = ["Who was the first woman in space?", "True or false: 5 km == 5000 meters?", "(5+3)/2*10 = ?", "Given the array [8, 'orbit', 'Trajectory', 45] what entry is at index 2?", "What is the minimum crew size for the ISS?"];
let userAnswers = [];
let correctAnswers = ["sally ride", "true", "40", "trajectory", "3"];


function askQuestions() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++) {
    userAnswers.push(input.question(questions[i]));
 }

}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let totalCorrect = 0;
  console.log(`Candidate Name: ${candidateName}`)
  for (let i = 0; i < correctAnswers.length; i++) {
    console.log(`${i} ) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`)
    console.log(`Correct Answer: ${correctAnswers[i]}`)
    if(candidateAnswers[i] === correctAnswers[i]){ 
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
  // const result = totalCorrect > 2 ? "PASSED" : "FAILED";
  console.log(`>>> Status: ${result} <<<`)
}
askQuestions();
gradeQuiz(userAnswers);
//let candidateAnswers = questions + "";
 
//   if (candidateAnswers === correctAnswers) {
//   console.log("Correct!");
// } else {
//   console.log("Sorry! Try again");
// }

//console.log("Your answer: " + candidateAnswers);
//console.log("Correct answer: " + correctAnswers);

function runProgram() {
  askForName(); 
  askQuestions();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  runProgram: runProgram
};