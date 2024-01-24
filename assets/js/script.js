
// questions

const quizQuestions = [
  {
    question: 'What are the types of data in JavaScript?',
    possibleAnswers: [
      '1: strings, numbers, and booleans',
      '2: strings, numbers, booleans, undefined, and null',
      '3: strings, numbers, booleans, undefined, null, objects, and arrays',
      '4: strings, numbers, booleans, objects, and arrays',
    ],
    correctAnswer: 2,
    incorrectAnswers: [0, 1, 3],
  },
  {
    question: 'Arrays in JavaScript can be used to store _____',
    possibleAnswers: [
      '1: other arrays',
      '2: booleans',
      '3: numbers and strings',
      '4: all of the above',
    ],
    correctAnswer: 3,
    incorrectAnswers: [0, 1, 2, 3],
  },
  {
    question: 'String values must be enclosed within _____ when being assigned to variables.',
    possibleAnswers: [
      '1: square brackets',
      '2: curly brackets',
      '3: quotes',
      '4: parentheses',
    ],
    correctAnswer: 2,
    incorrectAnswers: [0, 1, 3],
  },
  {
    question: 'To match a specific class attribute, what punctuation mark do you use to start a selector?',
    possibleAnswers: [
      '1: .',
      '2: ,',
      '3: #',
      '4: ;',
    ],
    correctAnswer: 0,
    incorrectAnswers: [1, 2, 3],
  },
  {
    question: 'To match a specific Id attribute, what punctuation mark to you use to start a selector?',
    possibleAnswers: [
      '1: .',
      '2: ,',
      '3: ;',
      '4: #',
    ],
    correctAnswer: 3,
    incorrectAnswers: [0, 1, 2],
  },
  {
    question: 'A very useful tool during development and debugging for printing content to the debugger is:',
    possibleAnswers: [
      '1: console.log',
      '2: JavaScript',
      '3: terminal',
      '4: for loops',
    ],
    correctAnswer: 0,
    incorrectAnswers: [1, 2, 3],
  },
  {
    question: 'The condition of an if/else statement is enclosed within ______',
    possibleAnswers: [
      '1: Quotes',
      '2: Parentheses',
      '3: Curly Brackets',
      '4: Square Brackets',
    ],
    correctAnswer: 1,
    incorrectAnswers: [0, 2, 3],
  },
  {
    question: 'What is the following output of code: console.log(3 + "3")',
    possibleAnswers: [
      '1: 6',
      '2: NaN',
      '3: 9',
      '4: 33',
    ],
    correctAnswer: 0,
    incorrectAnswers: [0, 1, 2, 3],
  },
  {
    question: 'What does the Math.random() function do in JavaScript',
    possibleAnswers: [
      '1: It doesnt do anything.',
      '2: It rounds a number down to the nearest integer.',
      '3: It creates any random number.',
      '4: It generates a random floating-point number between 0 and 1.',
    ],
    correctAnswer: 3,
    incorrectAnswers: [0, 1, 2],
  },
  {
    question: 'How many pixels is 1em?',
    possibleAnswers: [
      '1: 41px;',
      '2: 32px;',
      '3: 16px;',
      '4: 21px;',
    ],
    correctAnswer: 2,
    incorrectAnswers: [0, 1, 3],
  },
];



let secondsLeft = 60;
let currentQuestion = 0;
let score = 0;

function startQuiz() {
  // hide our starter container and show our quiz container
  document.getElementById('landing').style.display = 'none';
  document.querySelector('.container').style.display = 'block';

  // start our timer / countdown
 
  var timerInterval = setInterval(function () {
    const timeEl = document.querySelector('.time');
    secondsLeft--;
    if (secondsLeft > 0) {
      timeEl.textContent = 'Time: ' + secondsLeft;
    } else {
      timeEl.textContent = '';
    }

    if (currentQuestion > quizQuestions.length - 1 || secondsLeft <= 0) {
      clearInterval(timerInterval);
      const container = document.querySelector('.container');
      container.innerHTML = `<p>All done! You got ${score} out of ${quizQuestions.length} questions correct.<p>`;

      // show our high score form
      document.querySelector('.highScore').style.display = 'block';
    }
  }, 1000);

  showQuestion();
}

function showQuestion() {
  const questionText = document.getElementById('questions');
  questionText.textContent = quizQuestions[currentQuestion].question;

  const possibleAnswers = document.querySelectorAll('.answer');
  possibleAnswers.forEach((answer, index) => {
    answer.textContent = quizQuestions[currentQuestion].possibleAnswers[index];
  });

  const response = document.getElementById('response');
}

function evaluateAnswer(selected) {
  const response = document.getElementById('response');

  if (selected === quizQuestions[currentQuestion].correctAnswer) {
    response.textContent = 'Correct!';
    score++;
  } else {
    response.textContent = 'Incorrect!';
    secondsLeft -= 10;
  }

  currentQuestion++;
  showQuestion();
}


// This section is unfinished

function submitHighScore() {   
var initialsInput = document.getElementById('initials').value.trim();
if (initialsInput !== '') {
    var savedScore = JSON.parse(window.localStorage.getItem('initialsInput', 'score')) || [];   
} 



var userInitials = {
    userScore: savedScore,
}

window.localStorage.getItem('userInitials', JSON.stringify(userInitials));

// create a new object userInitials maybe to put save userInitials to local storage and stringify it. Direct it to next page/area. 


localStorage.setItem('initialsInput', 'score');


}







