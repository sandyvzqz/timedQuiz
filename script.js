//declare global variables for easier access
var startBtn = document.getElementById("start-btn");
var time = 75;
var timeRemaining = true;
var countdownStart = false;
var countdownTimer = document.getElementById("countdownTimer");
var startContainer = document.getElementById("startContainer");
var quizContainer = document.getElementById("quizContainer");
var quizQuestion = document.getElementById("quizQuestion");
var userChoice = document.getElementById("userChoice");
var answerChoice1 = document.getElementById("answerChoice1");
var answerChoice2 = document.getElementById("answerChoice2");
var answerChoice3 = document.getElementById("answerChoice3");
var answerChoice4 = document.getElementById("answerChoice4");
//var score = document.getElementById("score");
var highScores = [];
var output="";
let i=0;
var score=0;
// var timeLeft = document.getElementById("timeLeft");
var timer = document.getElementById("timer");
var scoreBoard = document.getElementById("scoreBoard");

//Store all coding questions inside of a questions array
var questions = [
    {
        question:"Which of the following methods would be BEST to get all elements with the same class?",
        answerChoice:["1. querySelector()", "2. getElementsById()", "3. getElementsByName()", "4. getElementsByClass()"],
        correctAnswer: 3
    },
    {
        question:"Which HTML element tag is used to link JavaScript code?",
        answerChoice:["1. <meta>","2. <script.js>","3. <script>","4. <style>"],
        correctAnswer: 2
    },
    {
        question:"In CSS, what is the name for the relative unit that is based on its parent's font size?",
        answerChoice:["1. em","2. vh","3. rem","4. vw"],
        correctAnswer: 0
    },
    {
        question:"Which of the following is NOT a built-in pop-up message box in JavaScript?",
        answerChoice:["1. alert()","2. submit()","3. prompt()","4. confirm()"],
        correctAnswer: 1
    },
    {
        question:"Which JavaScript variable declaration's value CANNOT be updated?",
        answerChoice:["1. var","2. let","3. const","4. all of the above"],
        correctAnswer: 2
    }
];

//function for timed quiz countdown 
var countdownInterval = setInterval(startTimer, 1000);
function startTimer(){
    if (countdownStart){
        time--;}
    if (time<=0){
        endQuiz();
        time=0;
        }   
    timer.innerHTML = time;
};

//event listener for when user starts the quiz
// countdown timer begins and remaining time is now visible
startBtn.addEventListener("click", function(){
    quizContainer.style.display= "block";
    startContainer.style.display= "none";
    countdownTimer.style.display= "block";
    scoreBoard.style.display="block";
    document.getElementById("score").innerHTML= score; //!!!!!??????!!!????!!?!?
    startTimer();
    showQuestions();
    countdownStart= true;
});

//function to display hidden quiz questions
function showQuestions(){
    quizQuestion.textContent = questions[i].question;
    answerChoice1.textContent= questions[i].answerChoice[0];
    answerChoice2.textContent= questions[i].answerChoice[1];
    answerChoice3.textContent= questions[i].answerChoice[2];
    answerChoice4.textContent= questions[i].answerChoice[3];
};

//event listener for user selection of multiple choice questions
//function for correct or incorrect answer choice
answerChoice1.addEventListener("click", function(event){
    event.stopPropagation();
    correctAnswer = questions[i].correctAnswer;
    console.log("correctAnswer "+ correctAnswer);
    //if statement for correct answer, congratulatory message appears for 1 second, score is increased
    if(0===correctAnswer){
        document.getElementById("score").innerHTML= "Hip! Hip! Hooray!";
        msgTimeout(function(){
            document.getElementById("score").innerHTML = "";
            },
            1000
        );
        score++;
        document.getElementById("score").innerHTML= score;
    // else statement for wrong answer, incorrect message appears for 1 second, 10 second time deduction
    } else{
        timeRemaining -= 10;
        userChoice.innerHTML = "Sorry, that's incorrect!";
        msgTimeout(function(){
            document.getElementById("score").innerHTML = "";
            },
            1000
        );
    }
    if (i >= questions.length-1) {
        endQuiz();
    }else{
        i++;
        showQuestions();
    };
});