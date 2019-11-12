
//  questions
var questions = [
     {
        title: "How does a FOR loop start?",
        choices: ["for i = 1 to 5", "for (i = 0; i <= 5; i++) ", "for (i <= 5; i++)", "for (i = 0; i <= 5)",],
        answer: "for (i = 0; i <= 5; i++) ",
    },
    {
        title: "How do you write Hello World in an alert box?",
        choices: ["alert('Hello World')", "alertBox('Hello World')", "msgBox('Hello World')", "msg('Hello World')",],
        answer: "alert('Hello World')"
    },

    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
   

    {
        title: "How do you round the number 7.25, to the nearest integer?",
        choices: ["rnd(7.25)", "Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)"],
        answer: "Math.round(7.25)",
    },
    {
        title: "What is the correct way to write a JavaScript array?",
        choices: ['var colors = ["red", "green", "blue"]', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = "red", "green", "blue"',],
        answer: 'var colors = ["red", "green", "blue"]'
    },
    
]
var startQuiz = document.querySelector("#start_quiz");
var questionsD = document.querySelector("#questionDisplay");
var displayChoices = document.querySelector("#displayChoices");
var result = document.querySelector("#result");
var score = document.querySelector("#score");
var initialsD = document.querySelector('#initials');
var todoR = document.querySelector('#todos');
var todoInput =document.querySelector('#todo_text');
var todoForm = document.querySelector("#todo-form");
var i = 0;

startQuiz.addEventListener("click", function(){
    renderQuestions();
    setTime();
})
 
//  function to bring first question
function renderQuestions() {

    questionsD.innerHTML = "";
    var p = document.createElement("p");
    p.textContent = questions[i].title;
    p.setAttribute("questionsD", i);
    questionsD.appendChild(p);
    renderChoices()
}
//  function to bring the choices according to the questions
function renderChoices() {
    displayChoices.innerHTML = "";
    for (var j = 0; j < 4; j++) {

        var choicesd = questions[i].choices[j];
        var li = document.createElement("li");
        li.setAttribute("displayChoices", j)

        var button = document.createElement("button");
        button.textContent = choicesd;
        button.setAttribute("class", "buttonChoices")
        displayChoices.appendChild(button);
    }

}
//  Jquery Eventlistener for the buttons 
$(".buttonChoices").on("click", function () {
    var element = event.target;
    var userPick = element.textContent;
    console.log(userPick);

    if (userPick === questions[i].answer) {
        result.innerHTML = "";
        var msm = document.createTextNode("CORRECT");
        result.appendChild(msm);
        i++
        renderQuestions();
        initials ();

    } else {

        msm = document.createTextNode("WRONG");
        result.appendChild(msm)
        i++
        secondsLeft -= 15;
        displayTime();
        renderQuestions();
        initials ();
    }
})

function initials (){
    if (questions[questions.length-1].title=== true);
    initialsD.innerHTML= "";
    score.innerHTML="";
    var userScore = document.createElement("div");
    var userName = document.createElement("input");
    userScore.getAttribute("type","number");
    userScore.textContent = "Your score is:"+" "+secondsLeft +" " ;
    userName.getAttribute("type","text");
    score.appendChild(userScore);
    // initialsD.appendChild(userName);
}

console.log(questions[questions.length-1].title);
// I tried to stored the user initals with scores :(
    // sorry I tried
    // var todos = [];
    // init();
    // function renderTodos() {
    //     todoR.innerHTML = "";
      
    //     for (var i = 0; i < todos.length; i++) {
    //       var todo = todos[i];
    //       var li = document.createElement("li");
    //       li.textContent = todo;
    //       li.setAttribute("data-index", i);
    //       todoR.appendChild(li);
    //     }
    //   }
    // function init() {
    //     var storedTodos = JSON.parse(localStorage.getItem("todos"));
      
    //     if (storedTodos !== null) {
    //       todos = storedTodos;
    //     }
      
    //     renderTodos();
    //   }

    //   function storeTodos() {

    //     localStorage.setItem("todos", JSON.stringify(todos));
    //   }

    // todoInput.addEventListener("submit", function(event) {
    //     event.preventDefault();
      
    //     var todoText = todoInput.value.trim();
      

    //     if (todoText === "") {
    //       return;
    //     }
      

    //     todos.push(todoText);
    //     todoInput.value = "";
      

    //     storeTodos();
    //     renderTodos();
    //   });
    
//  function for timer set to 75 seconds
var timeEl = document.querySelector("#time");
var secondsLeft = 75;
var timerInterval;
function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        displayTime();
    }, 1000);
}


function displayTime() {
    if (secondsLeft < 0) {
        clearInterval(timerInterval);
        secondsLeft = 0;

    }
    
    timeEl.textContent = secondsLeft + " seconds left";
}

