

var timeEl = document.querySelector(".time");
var quizEl = document.querySelector(".quiz");

var secondsLeft = 60; 

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
        if(seconds=== 0) {
            clearInterval(timerInterval);

        }
    }, 1000);

}


let quizQuestions = [
    {question: "What are the types of data in JavaScript?",
answers: {
    a: "strings, numbers, and booleans",
    b: "strings, numbers, booleans, undefined, and null",
    c: "strings, numbers, booleans, undefined, null, objects, and arrays",
    d: "strings, numbers, booleans, objects, and arrays"
} }
]

function generateQuiz {


}

// setTime();