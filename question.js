

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

var title =questions[0];
var questionsD = document.querySelector("#questionDisplay");
var startQuiz = document.querySelector("#start_quiz");
var displayChoices = document.querySelector("#displayChoices");

function start() {
   if(startQuiz == onclick) {
    alert("You have 5 min");
   }
   renderQuestions()
//    showQuestions(questions, quizContainer);

}
startQuiz.addEventListener("click",start);

function renderQuestions(){
    questionsD.innerHTML = "";
    for (var i = 0; i < questions.length; i ++) {
        var questionsArray = questions[i];

         var li = document.createElement("li");
         li.textContent = questionsArray.title;
        //  li.textContent = questionsArray.choices;

         li.setAttribute("data-index", i);
        
         questionsD.appendChild(li);
         renderChoices()
         
    }

}

function renderChoices(){
    displayChoices.innerHTML = "";
    
    for (var i = 0; i< questions.length;i++){
        var questionsArray = questions[i];
        var li =document.createElement("li");
        li.textContent = questionsArray.choices;
        var radioButtons = document.createElement ("button");
        radioButtons.setAttribute("type","radio");
        li.appendChild(radioButtons);
        questionsD.append(li);
    }

}
console.log(questions);

// var quizContainer = document.querySelector("#secondTry")

// function showQuestions(questions, quizContainer){
// 	// we'll need a place to store the output and the answer choices
// 	var output = [];
// 	var choices;

// 	// for each question...
// 	for(var i=0; i<questions.length; i++){
		
// 		// first reset the list of answers
// 		choices = [];

// 		// for each available answer to this question...
// 		for(letter in questions[i].choices){

// 			// ...add an html radio button
// 			choices.push(
// 				'<div>'
// 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// 					+ letter + ': '
// 					+ questions[i].choices[letter]
// 				+ '</div>'
// 			);
// 		}

// 		// add this question and its answers to the output
// 		output.push(
// 			 '<div>' + questions[i].title + '</div>'  
// 			+ '<div>' + choices.join('') + '</div>'
// 		);
// 	}

// 	// finally combine our output list into one string of html and put it on the page
// 	quizContainer.innerHTML = output.join('');
// }


// showQuestions(questions, quizContainer);