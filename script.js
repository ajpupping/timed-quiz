// To Do List

// create questions array [x]
// object with question and then options array and answer property [x]

//{ example
//  question: what is the best way to listen to music?
//  options: [spotify, apple music, physical media, radio]
//  answer: apple music
//}

//currentQuestion = 0

// questions[currentQuestion].question, questions[currentQuestion].answer

// create question element
// append option elements
// event handler => need to check if clicked option is answer
// does target value === answer

// where are we in our question list
// need to track where with the index

// no jquery or bootstrap for this assignment 

// does not matter if it is fair
// time left is the score 
// wrong answer time penalty should make it worth it to answer correctly

// need a function for starting the timer 
// need a function for starting the questions 
// both those get called on quiz start 

// at the end of quiz save time score and display high scores 
// need to ask for user input to name high score 
// local storage

// first focus on showing one question and then the next question 
// do not need to shuffle questions 
// does not need to be mobile responsive 
// just clean and simple design 

// easiest way to show high scores is to link a second html page
// see slack note 


var questions = ['question 0', 'question 1', 'question 2', 'question 3', 'question 4']

var question0 = {
    question: questions[0],
    choices: ['choice A', 'choice B', 'choice C', 'choice D'],
    answer: choices[2]
}

var question1 = {
    question: questions[1],
    choices: ['choice A', 'choice B', 'choice C', 'choice D'],
    answer: choices[0]
}

var question2 = {
    question: questions[2],
    choices: ['choice A', 'choice B', 'choice C', 'choice D'],
    answer: choices[3]
}

var question3 = {
    question: questions[3],
    choices: ['choice A', 'choice B', 'choice C', 'choice D'],
    answer: choices[1]
}

var question4 = {
    question: questions[4],
    choices: ['choice A', 'choice B', 'choice C', 'choice D'],
    answer: choices[1]
}

// displays questions one at a time, checks if answers are correct
function startQuiz() {
};

// starts timer, obviously 
function startTimer() {
};

getElementById("start")