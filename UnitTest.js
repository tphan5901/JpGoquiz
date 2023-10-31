<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" 
    crossorigin="anonymous">
    <!-- fonts -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" 
    integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" 
    crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <style>
        .start-screen{
          height: 80vh;
          padding: 40px;
            margin-left: 20%;
            margin-right: 20%;
            margin-top: 6%;
            border-radius: 20px;
        }
        .user-score{
          padding: 40px;
            margin-left: 20%;
            margin-right: 20%;
            margin-top: 10%;
            border-radius: 20px;
        }
        .score-container{
          padding: 40px;
            margin-left: 20%;
            margin-right: 20%;
            margin-top: 10%;
            border-radius: 20px;
        }
        .q{
            margin-top: 80%;
            border-radius: 5px;
            padding-left: 4%;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-right: 4%;
        }
        .restartBtn{
            margin-top: 80%;
            border-radius: 5px;
            padding-left: 4%;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-right: 4%;
        }
        .f{
            margin-top: 80%;
            border-radius: 5px;
            padding-left: 4%;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-right: 4%;
        }
        .options-div{
            width: 100%;
            padding: 1rem;
            margin: 0.1rem;
            text-align: left;
            border-radius: 4px;
            border: 1px solid;
        }
        .options-div:disabled{
            color: black;
            cursor: not-allowed;
        }
        .options-div:hover {
            background-color: rgb(255, 148, 9); 
            color: white;
        }
        .sato{
            width: 50%;
        }
        .k{
            margin-left: 43%;
        }
        .input{
            border-radius: 5px;
        }
        .hide{
            display: none;
        }
        .c{
            margin-right: 3%;
            border-radius: 5px;
        }
        .incorrect{
            background-color: white;
            color: rgb(255, 52, 52);
            border-color: rgb(255, 41, 41);
        }
        .correct{
            background-color: white;
            color: lightgreen;
            border-color:  lightgreen;
        }
        .question{
            font-weight: 600;
        }
        .questionscontainer{
            font-size: 20px;
            margin-left: 40px;
        }
        body{
            overflow-y: hidden;
        }
        .kamisato{
            width: 10%;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
        .kami{
            width: 50%;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
        #loader{
            margin-left: 40%;
            margin-top: 10%;
            width: 20%;
            animation: spin 0.0001s linear infinite;
        }
        @keyframes spin{
            0%{
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(360deg);
            }
        }
        .timer{
            margin-left: 63%;
        }
        .time-left{
            margin-left: 1%;
        }
        .scroller {
            height: 150px; /* Set the desired height for the scrollable container */
            overflow-y: auto;
        }
        .select-box {
            width: 20%;
            margin-left: 50%;
        }

        .content {
            width: 100%;
        }
        .scrollnavH{
            margin-left: 40%;
        }
        .scroller button {
            cursor: pointer;
            border-radius: 5px;
            background-color: rgb(32, 103, 236);
            color: white;
        }
        .scroller button:hover {
            cursor: pointer;
            background-color: #ffa339;
            color: white;
        }
        .container-mid{
            overflow-x: auto;
        }
        #divCountDownBar{
            width: 1300px;
            height: 14px;
            margin-left: 15%;
            margin-top: 2%;
            border: 2px black solid;
            background: white;
        }
        #divTimeLeft{
            float: left;
            background: rgb(0, 255, 170);
            height: 10px;
        }
        .time{
            margin-left: 70%;
        }
   
        .h1,
        .h2,
        .h3,
        .h4,
        .h5,
        .h6,
        .h7 {
            position: absolute;
            color: white;
        }

        .h1 {
            top: 15%;
            left: 25%;
            font-size: 60px;
            z-index: 1;
        }

        .h2 {
            top: 20%;
            font-size: 50px;
            right: 30%;
            z-index: 1; 
        }

        .h3 {
            top: 30%;
            left: 10%;
            z-index: 1; 
        }

        .h4 {
            top: 30%;
            right: 15%;
            font-size: 25px;
            z-index: 1; 
        }

        .h5 {
            top: 40%;
            left: 15%;
            font-size: 50px;
            z-index: 1; 
        }

        .h6 {
            top: 50%;
            font-size: 100px;
            right: 5%;
            z-index: 1; 
        }

        .h7 {
            top: 60%;
            left: 25%;
            font-size: 100px;
            z-index: 1; 
        }
    </style>

</head>
<body class="bg-dark d-flex" > <!--container-->

    <div class="ml-3 text-white" >
        <h1 class="text-white k" id="quizloading">Quiz is loading...</h1>
        <div id="divCountDownBar" >
            <div id="divTimeLeft" class="time1"></div>
        </div>
     
        <h1 class="h1" id="h1" >Lookin Lookin on </h1>
        <h2 class="h2"  id="h2">君だけの</h2>
        <h3 class="h3"  id="h3">Shakin shakin on</h3>
        <h4 class="h4"  id="h4">オリジナル</h4>
        <h5 class="h5" id="h5">Rockin Rockin on</h5>
        <h6 class="h6" id="h6">何度でも</h6>
        <h7 class="h7" id="h7">Baby going on!</h7> 
        <img src="./images/166997909516232207 - Copy.png" id="loader" class="kamisato">
           
    </div>

    <div id = "start-screen" class="bg-light start-screen hidden">
        <div class="header">
            <span class="questions text-dark">
                1 / 200questions
            </span>
            <div class="timer">
                <button class="btn-success c btn-outline-dark text-light mt-5 p-3 " onClick="toggleTimer()">Toggle timer</button>
                <img src="./images/pretty-innocent-blue-eyes-of-kamisato-ayaka-genshin-impact-wallpaper-2160x3840_206.jpg" class="kami">
                <span class="time-left text-dark"></span>
            </div>
            
            <div class="select-box">
                <h class="scrollnavH">Navigation</h>
                <div class="scroller" >
                    <ul id="options" >
                    </ul>
                </div>
            </div>
        </div>
   
        <div id="questionscontainer" class="questionscontainer">
           
        </div>

         <h class="mr-1">Your answer</h>
        <input type="text" class="p-2 input" id = "answer"> 
        <button id = "next" class="btn-info btn-outline-dark text-light q mt-5 ">Next</button>
        <button id = "previous" class="btn-primary btn-outline-dark text-light f mt-5 ">Previous</button>
        <button id = "submit" class="btn-warning btn-outline-dark text-light q mt-5 ">Check answers</button>
    </div>
    <div class="score-container hide text-light">
        <div id = "user-score">Score</div>
        <button id = "results" class="btn-info text-light restartBtn p-3">Results</button> 
        <button class="btn-primary restartBtn p-3"><a href="b+.html" class="text-light" style="text-decoration: none;">Restart</a></button>
        <button class="btn-warning text-light restartBtn p-3"><a href="level.html" class="text-light" style="text-decoration: none;">Quit</a></button>
    </div> 


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" s
    integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous">
  </script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
let timeLeft = document.querySelector(".time-left");
let questionContainer = document.getElementById("questionscontainer");
let nextBtn = document.getElementById("next");
let numofQuestions = document.querySelector(".questions");
let  displayContainer = document.getElementById("start-screen");
let answerContainer = document.getElementById("answercontainer");
const results = document.getElementById("results");
const scoreContainer = document.querySelector(".score-container");
const score = document.getElementById("user-score");
const loader = document.getElementById("loader");
const quizloading = document.getElementById("quizloading");
const submitBtn = document.getElementById("submit");
let questionsCount;
let previousBtn = document.getElementById("previous");
let scoreCount = 0;
let setTime = 7200;
let countDown;
let timerRunning = false; //bool stops timer from running 

const questionsStorage = [
    { id: "0", Question: "遊んじょ", answer: "あそんじよ", answer2: "asonjyo",},
    
];

function calcScore() {
    const maxQuestions = questionsStorage.length;
    return (scoreCount / maxQuestions) * 100;
}

const toggleTimer = () => {
    if (timerRunning) {
        clearInterval(countDown);
        timerRunning = false;
    } else {
        countDown = setInterval(() => {
            setTime--;
            timeLeft.innerHTML = `${setTime}s left`;
            if (setTime === 0) {
                clearInterval(countDown);
                checkAnswersOnTimeout();
            }
        }, 1000);
        timerRunning = true;
    }
};

const checkAnswersOnTimeout = () => {
    scoreCount = 0;
    for (let i = 0; i < questionsStorage.length; i++) {
        if (userAnswers[i] === questionsStorage[i].answer || userAnswers[i] === questionsStorage[i].answer2) {
            scoreCount++;
        }
    }
    displayContainer.classList.add("hide");
    scoreContainer.classList.remove("hide");

    const percentage = calcScore();
    score.innerHTML = "Your score is " + percentage.toFixed(2) + "%" + " out of 100%";
};

function displayCorrectAnswer() {
    for (let i = 0; i < questionsStorage.length; i++) {
                const questionDiv = document.querySelectorAll(".container-mid")[i];
                const correctAnswers = questionsStorage[i].answer + " or " + questionsStorage[i].answer2;
                const correctAnswerElement = document.createElement("button");
                correctAnswerElement.classList.add("correct");
                correctAnswerElement.innerHTML = "Correct Answer: " + correctAnswers;
                questionDiv.appendChild(correctAnswerElement);
            }
}


let userAnswers = new Array(questionsStorage.length).fill("");
const answerInput = document.getElementById("answer");


questionsStorage.forEach((question) => {
    question.submitted = false;
});


submitBtn.addEventListener("click", () => {
    if (answerInput.value === questionsStorage[questionsCount].answer || answerInput.value === questionsStorage[questionsCount].answer2) {
        displayCorrectAnswer(questionsCount);
        scoreCount = scoreCount - 1;
    }else{ 
        if(answerInput.value == ""){
        alert("Please enter an answer before checking answer. Btw, everytime you check answer, there will be a penalty of -1pt out of a 100 on your score. You can restart quiz anytime by refreshing the page");
        return;
        }
        displayCorrectAnswer(questionsCount);
        scoreCount--;
    }
});

let shouldClearAnswers = true;

function clearCorrectAnswers() {
    if (shouldClearAnswers) {
        const questionDiv = document.querySelectorAll(".container-mid")[questionsCount];
        const existingCorrectAnswers = questionDiv.querySelectorAll(".correct");

        existingCorrectAnswers.forEach(correctAnswer => {
            correctAnswer.remove();
        });
    }
}

nextBtn.addEventListener("click", () => {
            userAnswers[questionsCount] = answerInput.value.trim();

    if (questionsCount === questionsStorage.length - 1) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
      
        for (let i = 0; i < questionsStorage.length; i++) {
            if (userAnswers[i] === questionsStorage[i].answer || userAnswers[i] === questionsStorage[i].answer2) {
                scoreCount++;
            }
        }
        const percentage = calcScore();
        score.innerHTML = "Your score is " + percentage.toFixed(2) + "%" + " out of 100%"; 
        checkAnswer(questionsCount);
            }else{
                questionsCount++;
                numofQuestions.innerHTML = questionsCount + 1 + " of " + questionsStorage.length;
                answerInput.value = userAnswers[questionsCount] || "";
                clearCorrectAnswers();
                nextQuestion(questionsCount);
            } 
});

previousBtn.addEventListener("click", () => {
    if (questionsCount > 0) {
        // Save the user's answer for the current question
        userAnswers[questionsCount] = answerInput.value.trim();
        isSubmitClicked = false; 
        questionsCount--;

        numofQuestions.innerHTML = questionsCount + 1 + " of " + questionsStorage.length;
        previousQuestion(questionsCount);
        answerInput.value = userAnswers[questionsCount] || "";  // Load the user's answer for the previous question
        clearCorrectAnswers();
    }
});


const previousQuestion = (questionIndex) => {
    let quiz = document.querySelectorAll(".container-mid");

    quiz.forEach((card) => {
        card.classList.add("hide");
    });
    quiz[questionIndex].classList.remove("hide");
};

function displayQuestion(questionIndex) {
    const questionContainer = document.querySelectorAll(".container-mid");
    questionContainer.forEach((card) => {
        card.classList.add("hide");
    });
    questionContainer[questionIndex].classList.remove("hide");
    numofQuestions.innerHTML = questionsCount + 1 + " / " + questionsStorage.length;
    answerInput.value = userAnswers[questionsCount] || "";
    clearCorrectAnswers();
}

const nextQuestion = (questionIndex) => {
    let quiz = document.querySelectorAll(".container-mid");

    quiz.forEach((card) => {
        card.classList.add("hide");
    });
    quiz[questionIndex].classList.remove("hide");
}; 

function populateBox() {
    const options = document.getElementById("options");
    for (let i = 0; i < questionsStorage.length; i++) {
        const question = questionsStorage[i];
        const newButton = document.createElement("button");
        newButton.textContent = `Question ${i + 1}`;
        newButton.addEventListener("click", () => {
            // Save the user's answer for the current question
            userAnswers[questionsCount] = answerInput.value.trim();
            // Update the current question count and display the selected question
            questionsCount = i;
            displayQuestion(questionsCount);
        });
        options.appendChild(newButton);
    }
}

function createQuiz() {
    questionsStorage.sort(() => Math.random() - 0.5);

    for (let i of questionsStorage) {
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");      // Create a div to contain the question and answer input

        let question_div = document.createElement("p"); //dom create p(paragraph tag)
        question_div.classList.add("question");
        question_div.innerHTML = i.Question;
        div.appendChild(question_div);
        questionContainer.appendChild(div);
    }
}

populateBox();

function initial() {
    questionContainer.innerHTML = "";
    questionsCount = 0;
    scoreCount = 0;
    setTime = 2;
    createQuiz();
    displayQuestion(questionsCount);
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide"); 
    timeLeft.innerHTML = "2hr"; // Reset the timer display
    clearInterval(countDown); 
}

function initBarCount(){
    var divTimeLeft = document.getElementById("divTimeLeft");
    var divCountDownBar = document.getElementById("divCountDownBar");
    var startTimer = setInterval(barCount, 11);
    function barCount(){
        if(divTimeLeft.clientWidth < divCountDownBar.clientWidth){
                    divTimeLeft.style.width = divTimeLeft.clientWidth + 1 + "px";
                }else{
                    divTimeLeft.style.width = divCountDownBar.clientWidth + "px";
                    clearInterval(startTimer);
                }
            }
}

let musicRunning = false;

// Call this function in the playMusic function
function playMusic() {
    let audio = new Audio("audio.mp3");
    if (musicRunning) {
        audio.pause();
    } else {
        audio.play();
        musicRunning = true;
        fadeInAndOutElements();
    }
}


loader.addEventListener("click", () => {
  playMusic();
})

window.onload = () => {
    initBarCount();
    loader.style.display = "block";  // Show the loader initially
 
    setTimeout(() => {
        loader.style.display = "none";
        displayContainer.classList.remove("hidden");
        quizloading.classList.add("hide"); //classlist.add("hide") this adds the css style properties
        divTimeLeft.classList.add("hide"); 
        divCountDownBar.classList.add("hide"); 
        initial();
    }, 15000); 
};


function displayCorrectAnswerss() {
    shouldClearAnswers = false; // Set to false when displaying correct answers

    for (let i = 0; i < questionsStorage.length; i++) {
        const questionDiv = document.querySelectorAll(".container-mid")[i];
        const correctAnswers = questionsStorage[i].answer + " or " + questionsStorage[i].answer2;
        const correctAnswerElement = document.createElement("button");
        correctAnswerElement.classList.add("correct");
        correctAnswerElement.innerHTML = "Correct Answer: " + correctAnswers;
        questionDiv.appendChild(correctAnswerElement);
    }
}

results.addEventListener("click", ()=> {
    questionsCount = 0; // Set questionsCount to 0 for the first question
    clearInterval(countDown);
    timerRunning = false;
    displayQuestion(questionsCount); // Display the first question
    shouldClearAnswers = true;
    displayCorrectAnswerss();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

function checkAnswer(question, input) {
    const userInput = input.value.trim();
    const correctAnswers = [question.answer, question.answer2].filter(Boolean); // Filter out empty answers
    if (correctAnswers.includes(userInput)) {
        scoreCount++
        displayCorrectAnswer("Correct Answer: " + correctAnswers.join(" or "));
    }
}
// graphics only
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");
let h4 = document.getElementById("h4");
let h5 = document.getElementById("h5");
let h6 = document.getElementById("h6");
let h7 = document.getElementById("h7");


function fadeInAndOutElements() {
    fadeInAndOut(h1, 1000, function () {
        setTimeout(() => {
            fadeInAndOut(h2, 1000, function () {
                setTimeout(() => {
                    fadeInAndOut(h3, 1000, function () {
                        setTimeout(() => {
                            fadeInAndOut(h4, 1000, function () {
                                setTimeout(() => {
                                    fadeInAndOut(h5, 1000, function () {
                                        setTimeout(() => {
                                            fadeInAndOut(h6, 1000, function () {
                                                setTimeout(() => {
                                                    fadeInAndOut(h7, 1000, function () {
                                                        setTimeout(() => {
                                                            h7.style.display = "none";
                                                        }, 1000);
                                                    });
                                                }, 1000);
                                            });
                                        }, 1000);
                                    });
                                }, 1000);
                            });
                        }, 1000);
                    });
                }, 1000);
            });
        }, 2000);
    });
}

function fadeInAndOut(element, duration, callback) {
    element.style.display = "block";
    element.style.opacity = 0;
    const start = performance.now();

    function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        element.style.opacity = timeFraction;

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        } else {
            if (callback) callback();
        }
    }

    requestAnimationFrame(animate);
}

    </script>
</body>
</html>