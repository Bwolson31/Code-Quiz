

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
incorrectAnswers: [0, 1, 3] 
},
{question: "question",
possibleAnswers: ["1: incorrect",
    "2: incorrect",
    "3: incorrect",
    "4: correct"],
correctAnswer: 3,
incorrectAnswers: [0, 1, 2, 3]
},
{question: "question",
possibleAnswers: ["1: incorrect",
    "2: incorrect",
    "3: correct",
    "4: incorrect"],
correctAnswer: 2,
incorrectAnswers: [0, 1, 3]
},
{question: "question",
possibleAnswers: ["1: correct",
    "2: incorrect",
    "3: incorrect",
    "4: incorrect"],
correctAnswer: 0,
incorrectAnswers: [1, 2, 3,]
},
{question: "question",
possibleAnswers: ["1: incorrect",
    "2: incorrect",
    "3: incorrect",
    "4: correct"],
correctAnswer: 3,
incorrectAnswers: [0, 1, 2]
},
{question: "question",
possibleAnswers: ["1: correct",
    "2: incorrect",
    "3: incorrect",
    "4: incorrect"],
correctAnswer: 0,
incorrectAnswers: [1, 2, 3,]
},
{question: "question",
possibleAnswers: ["1: incorrect",
    "2: correct",
    "3: incorrect",
    "4: incorrect"],
correctAnswer: 1,
incorrectAnswers: [0, 2, 3]
},
{question: "question",
possibleAnswers: ["1: incorrect",
    "2: incorrect",
    "3: incorrect",
    "4: correct"],
correctAnswer: 0,
incorrectAnswers: [0, 1, 2, 3]
},
{question: "question",
possibleAnswers: ["1: incorrect",
    "2: incorrect",
    "3: incorrect",
    "4: correct"],
correctAnswer: 3,
incorrectAnswers: [0, 1, 2]
},
{question: "question",
possibleAnswers: ["1: incorrect",
    "2: incorrect",
    "3: correct",
    "4: incorrect"],
correctAnswer: 2,
incorrectAnswers: [0, 1, 3]
},]

function startQuiz(){
    document.getElementsByClassName("quizContainer").style.display="block";
}



let currentQuestion = 0;
let score = 0;
score =+


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
        timeEl.forEach(IncorrectAnswers) = - 10;



        if(secondsLeft > 0) {
            showQuestion();
        
        } if (!currentQuestion < quizQuestions.length || secondsLeft === 0) { 
            clearInterval(timerInterval);
            const container = document.querySelector(".container");
        container.innerHTML = `<p>All done!. You got ${score} out of ${quizQuestions.length} questions correct.<p>`
    }
        }, 1000);
}



showQuestion();

var highScore = JSON.parse(localStorage.getItem) ("")




localStorage.getItem("highScore");


