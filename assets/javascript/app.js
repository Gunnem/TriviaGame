// Make global variables
var expanse = {
    setScreen: "",
    rightCounter: 0,
    wrongCounter: 0,
    noAnsrCounter: 0,
    clickSound: new Audio("assets/sounds/button-click.mp3"),
    gameHtml: "",
    qArry: ["What was the Rocinante's original name?", "Who was Miller hired to find?", "What is the primary method of propulsion in the Expanse?", " What causes drinks to pour sideways on Tycho Station?", "What is the Ring object?"],
    answerArry: [["Galileo", "Tachi", "Seung Un", "Razorback"],["Julie Mao", "Amos Burton", "Fred Johnson", "Drummer"], ["Artificial Singularity", "Warp Drive", "Epstein Drive", "Impulse Power"], ["Gravity Plating", "Statis Field", "Coanda Effect", "Coriolis Effect"], ["An alien monument", "A weapon", "A black hole", "A wormhole"]],
    rightAnswers: ["B. Tachi", "A. Julie Mao", "C. Epstein Drive", "D. Coriolis Effect", "D. A wormhole"],
    imgArry: ["<img class='center-block img-right' src='/assets/images/roci.png'>", "<img class='center-block img-right' src='/assets/images/miller.png'>", "<img class='center-block img-right' src='/assets/images/epstein.png'>", "<img class='center-block img-right' src='/assets/images/tycho.png'>", "<img class='center-block img-right' src='/assets/images/ring.png'>",],
    clock: "",
    qCounter: 0,
    timeCounter: 15,
};

// Functions

function startButton(){
    expanse.setScreen = "<p class='text-center main-button'><a class='btn btn-primary btn-lg start-button text-center' href='#'>Begin</a></p>";
    $(".main-area").html(expanse.setScreen);
};

function timer(){
    expanse.clock = setInterval(fifteenSecs, 1000);
    function fifteenSecs(){
        if(expanse.timeCounter > 0) {expanse.timeCounter--;
        }
        else(expanse.timeCounter === 0){
            timeOutLoss();
            clearInterval(expanse.clock);
        }
        $(".timer").html(expanse.timeCounter);
    }
};

function wait(){
    if(expanse.qCounter < 4){
        expanse.qCounter ++;
        generateHTML();
        expanse.timeCounter = 15
        timer();
    }
    else{
        finalScreen();
    }
};

function win(){
    expanse.rightCounter ++;
    expanse.gameHtml = "<p class='text-center'> Time Remaining: <span class='timer'>" + expanse.timeCounter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + expanse.rightAnswers[expanse.qCounter] + "</p>" + expanse.imgArray[expanse.qCounter];
    $(".main-area").html(expanse.gameHtml);
    setTimeout(wait, 4000);
};

function loss(){
    expanse.wrongCounter ++;
    expanse.gameHtml = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + expanse.timeCounter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ expanse.rightAnswers[expanse.qCounter] + "</p>" + expanse.imageArray[expanse.qCounter];
      $(".main-area").html(expanse.gameHtml);
      setTimeout(wait, 4000);
  };

  function timeOutLoss(){
    trivia.unAnsweredCounter ++;
    trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + trivia.correctAnswers[trivia.questionCounter] + "</p>" + trivia.imageArray[trivia.questionCounter];
      $(".main-area").html(trivia.gameHTML);
      setTimeout(wait, 4000);
  };
  
  function finalScreen(){
    trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + trivia.correctCounter + "</p>" + "<p>Wrong Answers: " + trivia.inCorrectCounter + "</p>" + "<p>Unanswered: " + trivia.unAnsweredCounter + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
    $(".main-area").html(trivia.gameHTML);
  };

