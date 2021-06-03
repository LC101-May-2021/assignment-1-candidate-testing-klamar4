const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = input.question ("What is your name?");
console.log("Greetings" + candidateName + "!");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
//let question = input.question ("Who was the first American woman in space? ");
//let correctAnswer = "Sally Ride";
//let candidateAnswer = questions + [];
let questions = input.question [
  ["Who was the first woman in space?"], 
  ["True or false: 5 km == 5000 meters?"], 
  ["(5+3)/2*10 = ?"], 
  ["Given the array [8, 'orbit', 'Trajectory', 45] what entry is at index 2?"], 
  ["What is the minimum crew size for the ISS?"]
];

let correctAnswers = [
  ["Sally Ride"], 
  true, 
  40, 
  "trajectory", 
  3];
let candidateAnswers = questions + "";
  
  if (candidateAnswers === correctAnswers) {
  console.log("Correct!");
} else {
  console.log("Sorry! Try again");
}

console.log("Your answer: " + candidateAnswers);
console.log("Correct answer: " + correctAnswers);
function askForName() {
  // TODO 1.1b: Ask for candidate's name //

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};