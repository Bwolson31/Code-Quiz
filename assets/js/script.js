

var timeEl = document.querySelector(".time");
var quizEl = document.querySelector(".quiz");
var quiz = document.querySelector(".quizBox");
// const questionText = document.querySelector(".questionText");
var secondsLeft = 60; 
var startbtn = document.querySelector(".start");




const quizQuestions = [
    {question: "What are the types of data in JavaScript?",
possibleAnswers: ["1: strings, numbers, and booleans",
    "2: strings, numbers, booleans, undefined, and null",
    "3: strings, numbers, booleans, undefined, null, objects, and arrays",
    "4: strings, numbers, booleans, objects, and arrays"],
correctAnswer: 2,
},
{question: "question",
possibleAnswers: ["1: incorrect",
    "2: incorrect",
    "3: incorrect",
    "4: correct"],
correctAnswer: 3
},
{question: "question",
possibleAnswers: ["1: incorrect",
    "2: incorrect",
    "3: correct",
    "4: incorrect"],
correctAnswer: 2
},
{question: "question",
possibleAnswers: ["1: correct",
    "2: incorrect",
    "3: incorrect",
    "4: incorrect"],
correctAnswer: 0
},
{question: "question",
possibleAnswers: ["1: incorrect",
    "2: incorrect",
    "3: incorrect",
    "4: correct"],
correctAnswer: 3
},
{question: "question",
possibleAnswers: ["1: correct",
    "2: incorrect",
    "3: incorrect",
    "4: correct"],
correctAnswer: 0
},
{question: "question",
possibleAnswers: ["1: incorrect",
    "2: correct",
    "3: incorrect",
    "4: correct"],
correctAnswer: 1
},
{question: "question",
possibleAnswers: ["1: correct",
    "2: incorrect",
    "3: incorrect",
    "4: correct"],
Answer: 0
},
{question: "question",
possibleAnswers: ["1: incorrect",
    "2: incorrect",
    "3: incorrect",
    "4: correct"],
correctAnswer: 3
},
{question: "question",
possibleAnswers: ["1: incorrect",
    "2: incorrect",
    "3: correct",
    "4: correct"],
correctAnswer: 2
},]

let currentQuestion = 0;
let score= 0;


function generateQuiz(){
function showQuestion() {
    const questionText = document.getElementById("questions");
    questionText.textContent = quizQuestions[currentQuestion].question;


const possibleAnswers = document.querySelectorAll(".answer");
possibleAnswers.forEach((answer, index) => {
    answer.textContent = quizQuestions[currentQuestion].possibleAnswers[index];
});

const response = document.getElementById("response");
response.textContent = "";
}

function evaluateAnswer(selected) {
    const response = document.getElementById("response");
    if (selected === quizQuestions[currentQuestion].correctAnswer) {
        response.textContent ="Correct!";
        score++;

    } else {response.textContent = "Incorrect!";
}



    var timerInterval = setInterval(function() {
        currentQuestion++; 
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
        // incorrectAnswers.forEach()



        if(secondsLeft > 0) {
            showQuestion();
        
        } if (!currentQuestion < quizQuestions.length || secondsLeft === 0) { 
            clearInterval(timerInterval);
            const container = document.querySelector(".container");
        container.innerHTML = `<p>You got ${score} out of ${quizQuestions.length} questions correct.<p>`}
        }, 1000);
}}


startbtn.addEventListener ('click', generateQuiz);

// showQuestion();

// var highScore =

// localStorage.setItem("highScore");


