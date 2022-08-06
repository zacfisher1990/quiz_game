

//variables
var timerEl = document.getElementById('countdown'); //variable timerEl gets html element countdown
var correctEl = document.getElementById('correct'); //variable correctEl gets html element correct
var incorrectEl = document.getElementById('incorrect'); //variable incorrectEl gets html element incorrect
var btn1 = document.getElementById('btn1'); //variable btn1 gets html element btn1
var btn2 = document.getElementById('btn2'); //variable btn1 gets html element btn2
var btn3 = document.getElementById('btn3'); //variable btn1 gets html element btn3
var btn4 = document.getElementById('btn4'); //variable btn1 gets html element btn4

var questionContainerEl = document.getElementById('question-container'); //variable gets html element question-container
var questionEl = document.getElementById('question'); //variable questionElement gets html element question
var answerButtonsEl = document.getElementById('answer-buttons'); //variable answerButtonsElement = answer-buttons
var buttons = document.getElementsByClassName('btn');

var score = 0;

let shuffledQuestions, currentQuestionIndex; // variables shuffledQuestions, currentquestions

//todo after page loads user is presented with start button
var startButton = document.getElementById('start-btn'); //variable startButton gets html element start-btn
var nextButton = document.getElementById('next-btn');   //variable nextButton gets html element next-btn
nextButton.classList.add('hide');


//todo when user clicks start button timer starts, question1 and answer1 options appear

startButton.addEventListener('click', function startGame() {
    questionOne();
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')   
});

countdown();

function questionOne() {
   buttonReset();
    questionEl.textContent = "What does CSS stand for?";
    btn1.textContent = "Creative Styling Sheet";
    btn2.textContent = "Changing Style Selectors";
    btn3.textContent = "Cascading Style Sheets";
    btn4.textContent = "Cryptographic Styling Sheets";
    btn1.onclick = function() {incorrectAnswer()};
    btn2.onclick = function() {incorrectAnswer()};
    btn3.onclick = function() {correctAnswer()};
    btn4.onclick = function() {incorrectAnswer()};
    
    nextButton.addEventListener('click', function nextQuestion1() {
        questionTwo();
         
    });
    
};

function questionTwo() {
    buttonReset();
    questionEl.textContent = "What does HTML stand for?";
    btn1.textContent = "Hyper Technical Manual Language";
    btn2.textContent = "Hyper Text Markup Language";
    btn3.textContent = "Hidden Text Markup Language";
    btn4.textContent = "Hypertech Marked Language";
    btn1.onclick = function() {incorrectAnswer()};
    btn2.onclick = function() {correctAnswer()};
    btn3.onclick = function() {incorrectAnswer()};
    btn4.onclick = function() {incorrectAnswer()};

    nextButton.addEventListener('click', function nextQuestion2() {
        questionThree();
         
    });
};

function questionThree() {
    buttonReset();
    questionEl.textContent = "String values must be enclosed within _______.";
    btn1.textContent = "Parentheses";
    btn2.textContent = "Exclammation points";
    btn3.textContent = "Periods";
    btn4.textContent = "Quotation marks";
    btn1.onclick = function() {incorrectAnswer()};
    btn2.onclick = function() {incorrectAnswer()};
    btn3.onclick = function() {incorrectAnswer()};
    btn4.onclick = function() {correctAnswer()};

    nextButton.addEventListener('click', function nextQuestion3() {
        questionFour();
         
    });

};

function questionFour() {
     buttonReset();
     questionEl.textContent = "What does URL stand for?.";
     btn1.textContent = "Uniform Resource Locator";
     btn2.textContent = "Unified Resource Language";
     btn3.textContent = "Universal Retrieval Locator";
     btn4.textContent = "Universal Rubric Language";
     btn1.onclick = function() {correctAnswer()};
     btn2.onclick = function() {incorrectAnswer()};
     btn3.onclick = function() {incorrectAnswer()};
     btn4.onclick = function() {incorrectAnswer()};

     nextButton.addEventListener('click', function nextQuestion4() {
        questionFive();
         
    });
 
 };

 function questionFive() {
     buttonReset();
     questionEl.textContent = "What alters the layout of a web page?";
     btn1.textContent = "XML";
     btn2.textContent = "HTML";
     btn3.textContent = "CSS";
     btn4.textContent = "JavaScript";
     btn1.onclick = function() {incorrectAnswer()};
     btn2.onclick = function() {incorrectAnswer()};
     btn3.onclick = function() {correctAnswer()};
     btn4.onclick = function() {incorrectAnswer()};

     nextButton.addEventListener('click', function nextQuestion5() {
        questionSix();
        
    });
 };

 function questionSix() {
     buttonReset();
     questionEl.textContent = "What is a boolean in JavaScript?";
     btn1.textContent = "true or false";
     btn2.textContent = "let or const";
     btn3.textContent = "if else statement";
     btn4.textContent = "for loop";
     btn1.onclick = function() {correctAnswer()};
     btn2.onclick = function() {incorrectAnswer()};
     btn3.onclick = function() {incorrectAnswer()};
     btn4.onclick = function() {incorrectAnswer()};

     nextButton.addEventListener('click', function nextQuestion6() {
        gameOver();
        
    });
 };


 function gameOver() {
    nextButton.classList.add('hide');
    answerButtonsEl.classList.add('hide');
    questionEl.textContent = "Game Over. You scored " + score + " out of 6.";
}
 
//timer function
function countdown() { 
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Timer: " + timeLeft + " seconds left.";
    //todo when timer runs to zero message shows below saying incorrect
    if(timeLeft === 0) {    
      clearInterval(timeInterval); 
      nextButton.classList.remove('hide');
      timerEl.textContent = "Out of time. Game Over!" 
      nextButton.addEventListener('click', function timeOut() {
        gameOver();        
        });     
    }    
  }, 1000);
}

//correct function
function correctAnswer() {
    correctEl.textContent = "Correct! 😀";
    correctEl.classList.remove('hide');
    incorrectEl.classList.add('hide');
    nextButton.classList.remove('hide');
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    score = score + 1;
   
}
function incorrectAnswer() {
    incorrectEl.textContent = "Incorrect! 😫";
    incorrectEl.classList.remove('hide');
    correctEl.classList.add('hide');
    nextButton.classList.remove('hide');
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    score = score + 0;
}
function buttonReset() {
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    incorrectEl.classList.add('hide');
    correctEl.classList.add('hide');
    nextButton.classList.add('hide');
}

    

//todo when user clicks correct answer a message shows below saying correct
//todo when user clicks incorrect answer a message shows below saying incorrect

//todo when user has answered, next button appears



//todo when user clicks next new question and answers appear
//todo when user clicks wrong question timer loses seconds






