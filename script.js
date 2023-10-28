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


var questions = [{
    question: 'question 0',
    choices: ['choice A', 'choice B', 'choice C', 'choice D'],
    answer: 'choice B'
},
{
    question: 'question1',
    choices: ['choice A', 'choice B', 'choice C', 'choice D'],
    answer: 'choice C'
},
{
    question: 'question2',
    choices: ['choice A', 'choice B', 'choice C', 'choice D'],
    answer: 'choice D'
},
{
    question: 'question3',
    choices: ['choice A', 'choice B', 'choice C', 'choice D'],
    answer: 'choice A'
},
{
    question: 'question4',
    choices: ['choice A', 'choice B', 'choice C', 'choice D'],
    answer: 'choice C'
}];

var startButton = document.getElementById('startButton');
var timeEl = document.getElementById('time')
var timeLeft;
var timeInterval;
var index = 0
var answerEl = document.getElementById('answerContainer')

// displays questions one at a time, checks if answers are correct
function startQuiz() {
    timeLeft = 60
    timeEl.textContent = timeLeft
    document.getElementById('welcomeMessage').classList.add('hide')
    renderQuiz()
}

function renderQuiz() {
    document.getElementById('questionTitle').textContent = questions[index].question
    answerEl.innerHTML = ''
    questions[index].choices.forEach(function(choice){
        var btn = document.createElement('button')
        btn.textContent = choice
        btn.onclick = checkAnswer
        answerEl.append(btn)
    })
}

function checkAnswer(event) {
    console.log('clicked')
    if(event.target.textContent !== questions[index].answer) {
        timeLeft -= 10
        if(timeLeft <= 0) {
            timeLeft = 0
            timeEl.textContent = timeLeft
            endQuiz()
        }
    } // else, add feedback
    index++ 
    if(index===questions.length){
        endQuiz()
    } else {
        renderQuiz()
    }
}

// starts timer
function startTimer() {
    timeInterval = setInterval(function() {
        timeLeft--
        timeEl.textContent = timeLeft
        if(timeLeft <= 0) {
            endQuiz()
        }
    }, 1000)
    
}

function endQuiz() {
    clearInterval(timeInterval)
}

startButton.addEventListener('click', startQuiz)
startButton.addEventListener('click', startTimer)