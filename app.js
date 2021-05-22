function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
};

function Quiz(Question) {
  this.questions = questions;
  this.score = 0;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isFinish = function () {
  return this.questions.length === this.questionIndex;
};

Quiz.prototype.guess = function (answer) {
  var Question = this.getQuestion();
  if (Question.checkAnswer(answer)) {
    this.score++;
  }
  this.questionIndex++;
};

var q1 = new Question(
  "What is the most popular software language?",
  ["c#", "nodejs", "JavaScript", "Python"],
  "JavaScript"
);

var q2 = new Question(
  "Which is the oldest programming language ?",
  ["Java", "FORTRAN", ".C++", "Php"],
  "FORTRAN"
);

var q3 = new Question(
  "What language should a software developer know?",
  ["English", "Italian", "German", "French"],
  "English"
);

var q4 = new Question(
  "What is the most spoken language in the world?",
  ["English", "Italian", "German", "Chinese"],
  "Chinese"
);

var questions = [q1, q2, q3, q4];

var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {
  if (quiz.isFinish()) {
    showScore();
    finallnote();
  } else {
    var Question = quiz.getQuestion();
    var choices = Question.choices;

    document.querySelector("#question").textContent = Question.text;

    for (var i = 0; i < choices.length; i++) {
      var element = document.querySelector("#choice" + i);
      element.innerHTML = choices[i];

      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
}
function guess(id, guess) {
  var btn = document.getElementById(id);
  btn.onclick = function () {
    quiz.guess(guess);
    loadQuestion();
  };
}

function showScore() {
  var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;

  document.querySelector(".card-body").innerHTML = html;
}

function showProgress() {
  var totalquestion = quiz.questions.length;

  var questionNumber = quiz.questionIndex + 1;

  document.querySelector("#progress").innerHTML =
    " Question " + questionNumber + " / " + totalquestion;
}

function finallnote() {
  document.querySelector(".finally").innerHTML = "Exam is over :)";
}
