

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
var score = 0; //variable for keeping score of correct answers
var timeLeft = 60; //variable timeLeft total time on timer
var startButton = document.getElementById('start-btn'); //variable startButton gets html element start-btn
var nextButton = document.getElementById('next-btn');   //variable nextButton gets html element next-btn
var gameTitle = document.getElementById('game-title');
var instructions = document.getElementById('instructions');




instructions.textContent = "You have 1 minute to answer 10 questions. For every question you get wrong you lose 5 seconds on the timer. The quiz is over when you have completed all 10 questions or when the timer runs out. Good Luck!";
nextButton.classList.add('hide'); //hide next button

//function to start game
startButton.addEventListener('click', function startGame() { //when user clicks start button
    questionOne();  //questionOne is launched
    startButton.classList.add('hide'); //hide the start button
    gameTitle.classList.add('hide');
    instructions.classList.add('hide');
    questionContainerEl.classList.remove('hide');  //show question-container
    countdown(); //call countdown function
});

//function for question 1
function questionOne() {
   buttonReset(); //call buttonReset function to enable buttons
    questionEl.textContent = "What does CSS stand for?";
    btn1.textContent = "Creative Styling Sheet";
    btn2.textContent = "Changing Style Selectors";
    btn3.textContent = "Cascading Style Sheets";
    btn4.textContent = "Cryptographic Styling Sheets";
    btn1.onclick = function() {incorrectAnswer()};
    btn2.onclick = function() {incorrectAnswer()};
    btn3.onclick = function() {correctAnswer()};
    btn4.onclick = function() {incorrectAnswer()};
    nextButton.addEventListener('click', function nextQuestion1() { //click next button 
        questionTwo(); //call function for question 2
    });
};

//function for question 2...
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
    btn2.textContent = "Dashes";
    btn3.textContent = "Periods";
    btn4.textContent = "Quotes";
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
        questionSeven();  
    });
};

 function questionSeven() {
    buttonReset();
    questionEl.textContent = "How do you create a function in JavaScript?";
    btn1.textContent = "function = myFunction()";
    btn2.textContent = "function myFunction()";
    btn3.textContent = "function:myFunction()";
    btn4.textContent = "function === myFunction()";
    btn1.onclick = function() {incorrectAnswer()};
    btn2.onclick = function() {correctAnswer()};
    btn3.onclick = function() {incorrectAnswer()};
    btn4.onclick = function() {incorrectAnswer()};
    nextButton.addEventListener('click', function nextQuestion7() {
       questionEight();    
   });
};

function questionEight() {
    buttonReset();
    questionEl.textContent = "How to write an IF statement in JavaScript?";
    btn1.textContent = "if i == 5";
    btn2.textContent = "if i = 5";
    btn3.textContent = "if (i == 5)";
    btn4.textContent = "if i == 5 then";
    btn1.onclick = function() {incorrectAnswer()};
    btn2.onclick = function() {incorrectAnswer()};
    btn3.onclick = function() {correctAnswer()};
    btn4.onclick = function() {incorrectAnswer()};
    nextButton.addEventListener('click', function nextQuestion8() {
       questionNine();      
   });
};

function questionNine() {
    buttonReset();
    questionEl.textContent = "How can you add a comment in JavaScript?";
    btn1.textContent = "<!--comment-->";
    btn2.textContent = "/* comment */";
    btn3.textContent = "# comment";
    btn4.textContent = "// comment";
    btn1.onclick = function() {incorrectAnswer()};
    btn2.onclick = function() {incorrectAnswer()};
    btn3.onclick = function() {incorrectAnswer()};
    btn4.onclick = function() {correctAnswer()};
    nextButton.addEventListener('click', function nextQuestion9() {
       questionTen(); 
   });
};

function questionTen() {
    buttonReset();
    questionEl.textContent = "What is the correct HTML for referring to an external CSS file?";
    btn1.textContent = "<style src =\"style.css\">";
    btn2.textContent = "<stylesheet>style.css</stylesheet>";
    btn3.textContent = "<link rel=\"stylesheet\" href=\"style.css\" />";
    btn4.textContent = "<link src=\"stylesheet\" href=\"style.js\" />";
    btn1.onclick = function() {incorrectAnswer()};
    btn2.onclick = function() {incorrectAnswer()};
    btn3.onclick = function() {correctAnswer()};
    btn4.onclick = function() {incorrectAnswer()};

    nextButton.addEventListener('click', function nextQuestion10() {
       gameOver();
       
   });
};

//variables f
var post = document.getElementById('post');
var nameInput = document.getElementById('name');
var scoreResult = document.getElementById('score');
var enterBtn = document.getElementById('enter');
var scoreBoard = document.getElementById('score-board');
var highScores = document.getElementById('high-scores');
var scoreList = document.getElementById('score-list');


//hide game over elements
enterBtn.classList.add('hide');
post.classList.add('hide');
nameInput.classList.add('hide');
scoreResult.classList.add('hide');
scoreBoard.classList.add('hide');
//highScores.classList.add('')

//gameOver function
 function gameOver() {
    nextButton.classList.add('hide'); //hide buttons
    answerButtonsEl.classList.add('hide'); //hide buttons
    timerEl.classList.add('hide'); //hide timer  
    post.classList.remove('hide'); //show post
    nameInput.classList.remove('hide'); //show name input
    scoreResult.classList.remove('hide'); //show score result
    enterBtn.classList.remove('hide'); //show enter button
    scoreBoard.classList.remove('hide'); //show the score board
    //todo enter name with score
    questionEl.textContent = "Game Over. Enter your name below."; 
    scoreResult.textContent = "Score: " + score; //Tell user their score
    //todo store name and score input and display onto high score list
    var name = localStorage.getItem('name');
    var storedName = document.getElementById('stored-name');
    var storedScore = document.getElementById('stored-score');
    
    
   

    enterBtn.addEventListener('click', function saveScore() { //when user clicks enter button
       // var highScores = JSON.parse(localStorage.getItem('highScores'));
        storedName.textContent = name;
        storedScore.textContent = score;
    });  
};

//timer function
function countdown() { 
    var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Timer: " + timeLeft + " seconds left.";
    if(timeLeft === 0) {    // if time is 0
      clearInterval(timeInterval); //clearInterval
        gameOver();       //call gameover function     
    }    
  }, 1000); //time goes in seconds
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
    score = score + 1; // adds 1 to score 
}
//incorrect function
function incorrectAnswer() {
    incorrectEl.textContent = "Incorrect! 😫";
    incorrectEl.classList.remove('hide');
    correctEl.classList.add('hide');
    nextButton.classList.remove('hide');
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    score = score + 0;  // adds 0 to score 
    timeLeft = timeLeft - 5; // minus 5 seconds for wrong answers
    
}
// function to re-enable buttons
function buttonReset() {
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    incorrectEl.classList.add('hide');
    correctEl.classList.add('hide');
    nextButton.classList.add('hide');
}

    







