var startButton = document.getElementById('startButton');
var timeEl = document.getElementById('time');
var timeLeft;
var timeInterval;
var currentQuestion = 0;
var answerEl = document.getElementById('answerContainer');
var playAgainEl = document.getElementById('playAgainButton');
var nameInput = document.getElementById('name-input');
var playerName = document.getElementById('player-name');
var scoreListEl = document.getElementById('score-list');
var clearEl = document.getElementById('clearButton');
var score;

var highScores = [];

var questions = [{
    question: 'Which types of data can be stored in an array?',
    choices: ['strings', 'booleans', 'numbers', 'all of these'],
    answer: 'all of these'
},
{
    question: 'What type of data must be stored in quotes?',
    choices: ['numbers', 'booleans', 'strings', 'functions'],
    answer: 'strings'
},
{
    question: 'The code to be executed by a function is contained in?',
    choices: ['curly brackets', 'parentheses', 'quotes', 'commas'],
    answer: 'curly brackets'
},
{
    question: 'Which tool can be used for debugging?',
    choices: ['console log', 'bool prop', 'python', 'terminal'],
    answer: 'console log'
},
{
    question: 'Where in the html file should the script link be placed?',
    choices: ['meta', 'header', 'body', 'footer'],
    answer: 'body'
}];

// displays questions one at a time, checks if answers are correct
function startQuiz() {
    timeLeft = 60
    timeEl.textContent = timeLeft
    document.getElementById('welcomeMessage').classList.add('hide')
    renderQuiz()
}

function renderQuiz() {
    document.getElementById('showQuestions').classList.add('show')
    document.getElementById('questionTitle').textContent = questions[currentQuestion].question
    answerEl.innerHTML = ''
    questions[currentQuestion].choices.forEach(function (choice) {
        var btn = document.createElement('button')
        btn.className = 'answerButton'
        btn.textContent = choice
        btn.onclick = checkAnswer
        answerEl.append(btn)
    })
}

function checkAnswer(event) {
    if (event.target.textContent !== questions[currentQuestion].answer) {
        timeLeft -= 10
        if (timeLeft <= 0) {
            timeLeft = 0
            timeEl.textContent = timeLeft
            endQuiz()
        }
    }
    currentQuestion++
    if (currentQuestion === questions.length) {
        endQuiz()
    } else {
        renderQuiz()
    }
}

// starts timer
function startTimer() {
    timeInterval = setInterval(function () {
        timeLeft--
        timeEl.textContent = timeLeft
        if (timeLeft <= 0) {
            endQuiz()
        }
    }, 1000)
}

// hides questions and shows high scores
function endQuiz() {
    clearInterval(timeInterval)
    document.getElementById('questionContainer').classList.add('hide')
    document.getElementById('showScores').classList.add('show')
    renderScores();
    storeScores();
}

function renderScores() {
    for (let i = 0; i < highScores.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('class', 'list-item')
        li.textContent = playerName, score
        ul.append(li)
    }
}

function storeScores() {
    localStorage.setItem('scores', JSON.stringify(timeLeft))
    score = timeLeft
    var result = {player: playerName, score: score}
    var savedScores = localStorage.getItem('highscore') 
    var highScores 
    if (savedScores) {
        highScores = JSON.parse(savedScores)
    } else {
        highScores = []
    }
    highScores.push(result)   
    highScores.sort((a, b) => b.score- a.score) 
    highScores.slice(0, 5) 

    localStorage.setItem('highscore', JSON.stringify(highScores)) 

    console.log(highScores)
}

//empty high scores array
function clearScores() {
    highScores = []
}

function playAgain() {
    location.reload();
}

startButton.addEventListener('click', startQuiz)
startButton.addEventListener('click', startTimer)
playAgainEl.addEventListener('click', playAgain)

playAgainEl.addEventListener('click', function(event) {
    event.stopPropagation();
})

clearEl.addEventListener('click', clearScores)

clearEl.addEventListener('click', function(event) {
    event.stopPropagation();
})

nameInput.addEventListener('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
})


nameInput.addEventListener('click', renderScores)
