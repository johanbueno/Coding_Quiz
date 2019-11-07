

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script", "<javascript>", "<js>", "<scripting>"],
        answer: "<script>"
    },
    {
        title: "Where is the correct place to insert a JavaScript?",
        choices: ["The <body> section  ", "The <head> section", "Both the <head> section and the <body> section are correct ",],
        answer: "Both the <head> section and the <body> section are correct  ",

    },
    {
        title: "The external JavaScript file must contain the <script> tag.",
        choices: ["False", "True"],
        answer: "False",
    },
    {
        title: "How do you write Hello World in an alert box?",
        choices: ["alert('Hello World')",
            "alertBox('Hello World')",
            "msgBox('Hello World')",
            "msg('Hello World')",],
        answer: "alert('Hello World')"
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: ["function myFunction()", "function:myFunction()", "function = myFunction()"],
        answer: "function myFunction()",
    },
    {
        title: "How does a WHILE loop start?",
        choices: ["while (i <= 10; i++)  ", "while i = 1 to 10", "while (i <= 10)  "],
        answer: "while (i <= 10)",
    },
    {
        title: "How does a FOR loop start?",
        choices: ["for i = 1 to 5", "for (i = 0; i <= 5; i++) ", "for (i <= 5; i++)", "for (i = 0; i <= 5)",],
        answer: "for (i = 0; i <= 5; i++) ",
    },
    {
        title: "How can you add a comment in a JavaScript?",
        choices: ["<!--This is a comment-->", "'This is a comment", "//This is a comment"],
        answer: "//This is a comment",
    },
    {
        title: "How do you round the number 7.25, to the nearest integer?",
        choices: ["rnd(7.25)", "Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)"],
        answer: "Math.round(7.25)",
    },
    {
        title: "What is the correct way to write a JavaScript array?",
        choices: ['var colors = ["red", "green", "blue"]', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = "red", "green", "blue"',],
        answer: 'var colors = ["red", "green", "blue"] '
    },
    {
        title: "How can you detect the client's browser name?",
        choices: ["navigator.appName ", "browser.name", "client.navName",],
        answer: "navigator.appName  "
    },
]
var startQuiz = document.querySelector("#start_quiz");
var questionsD = document.querySelector("#questionDisplay");
var displayChoices = document.querySelector("#displayChoices");
var result = document.querySelector("#result");
var i = 0;
startQuiz.addEventListener("click", start);

function start() {
    if (startQuiz == true) {
        alert("You have 5 min");

    }
    renderQuestions()
}


function renderQuestions() {
    questionsD.innerHTML = "";
    for (var i = 0; i < 1; i++) {
        var li = document.createElement("li");
        li.textContent = questions[0].title;
        questionsD.appendChild(li);
        renderChoices()
    }

    function renderChoices() {
        displayChoices.innerHTML = "";
        for (var i = 0; i < 1; i++) {

            var txt = "";
            var choices = questions[0].choices;
            choices.forEach(myFunction);
            document.getElementById("displayChoices").innerHTML = txt;

            function myFunction(value) {
                txt = txt + "<input type=radio>" + value + "<br>";
            }

        }
    }

    console.log(questions[0].choices);

}
var timeEl = document.querySelector("#time");
var secondsLeft = 100;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      result();
    }

  }, 1000);
}
function result() {
    timeEl.textContent = " ";
  
    var inputEl = document.createElement("input");
  inputEl.setAttribute("type","text");
    
    result.appendChild(inputEl);
  
  }
  
  setTime();