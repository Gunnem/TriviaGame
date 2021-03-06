// Make global variables
var expanse = {
    setScreen: "",
    rightCounter: 0,
    wrongCounter: 0,
    noAnsrCounter: 0,
    clickSound: new Audio("assets/sounds/button-click.mp3"),
    gameHtml: "",
    qArry: ["What was the Rocinante's original name?", "Who was juliemao hired to find?", "What is the primary method of propulsion in the Expanse?", " What causes drinks to pour sideways on Tycho Station?", "What is the Ring object?"],
    answerArry: [["Galileo", "Tachi", "Seung Un", "Razorback"],["Julie Mao", "Amos Burton", "Fred Johnson", "Drummer"], ["Artificial Singularity", "Warp Drive", "Epstein Drive", "Impulse Power"], ["Gravity Plating", "Statis Field", "Coanda Effect", "Coriolis Effect"], ["An alien monument", "A weapon", "A black hole", "A wormhole"]],
    rightAnswers: ["B. Tachi", "A. Julie Mao", "C. Epstein Drive", "D. Coriolis Effect", "D. A wormhole"],
    imgArry: ["<img class='center-block img-responsive' src='assets/images/roci.png'>", "<img class='center-block img-responsive' src='assets/images/juliemao.png'>", "<img class='center-block img-responsive' src='assets/images/epstein2.png'>", "<img class='center-block img-responsive' src='assets/images/tycho.png'>", "<img class='center-block img-responsive' src='assets/images/ring.png'>",],
    clock: "",
    qCounter: 0,
    timeCounter: 15,
};

// Functions

function startScreen(){
    expanse.setScreen = "<p class='text-center main-button'><a class='btn btn-primary btn-lg start-button text-center' href='#'>Begin</a></p>";
    $(".main-area").html(expanse.setScreen);
};

function timer(){
    expanse.clock = setInterval(fifteenSecs, 1000);
    function fifteenSecs(){
      if(expanse.timeCounter === 0){
        timeOutLoss();
        clearInterval(expanse.clock);
      }
      if(expanse.timeCounter > 0) {
        expanse.timeCounter --;
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
    expanse.gameHtml = "<p class='text-center'> Time Remaining: <span class='timer'>" + expanse.timeCounter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + expanse.rightAnswers[expanse.qCounter] + "</p>" + expanse.imgArry[expanse.qCounter];
    $(".main-area").html(expanse.gameHtml);
    setTimeout(wait, 4000);
};

function loss(){
    expanse.wrongCounter ++;
    expanse.gameHtml = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + expanse.timeCounter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ expanse.rightAnswers[expanse.qCounter] + "</p>" + expanse.imgArry[expanse.qCounter];
      $(".main-area").html(expanse.gameHtml);
      setTimeout(wait, 4000);
  };

  function timeOutLoss(){
    expanse.noAnsrCounter ++;
    expanse.gameHtml = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + expanse.timeCounter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + expanse.rightAnswers[expanse.qCounter] + "</p>" + expanse.imgArry[expanse.qCounter];
      $(".main-area").html(expanse.gameHtml);
      setTimeout(wait, 4000);
  };
  
  function finalScreen(){
    expanse.gameHtml = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + expanse.timeCounter + "</span></p>" + "<p class='text-center'>RESULTS" + "</p>" + "<p class='summary-correct'>Correct Answers: " + expanse.rightCounter + "</p>" + "<p>Wrong Answers: " + expanse.wrongCounter + "</p>" + "<p>Unanswered: " + expanse.noAnsrCounter + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
    $(".main-area").html(expanse.gameHtml);
  };

  function resetGame(){
    expanse.qCounter = 0;
    expanse.rightCounter = 0;
    expanse.wrongCounter = 0;
    expanse.noAnsrCounter = 0;
    expanse.timeCounter = 15;
    generateHTML();
    timer();
  };
  
  function generateHTML(){
    expanse.gameHtml = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>15</span></p><p class='text-center'>" + expanse.qArry[expanse.qCounter] + "</p><button class='first-answer answer'>A. " + expanse.answerArry[expanse.qCounter][0] + "</button><br><button class='answer'>B. "+expanse.answerArry[expanse.qCounter][1]+"</button><br><button class='answer'>C. "+expanse.answerArry[expanse.qCounter][2]+"</button><br><button class='answer'>D. "+expanse.answerArry[expanse.qCounter][3]+"</button>";
    $(".main-area").html(expanse.gameHtml);
  }

  //MAIN PROCESS

  startScreen();

//start-button click
$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	expanse.clickSound.play();
	generateHTML();

	timer();
}); // Closes start-button click

$("body").on("click", ".answer", function(event){
	expanse.clickSound.play();
  //If correct answer
  selectedAnswer = $(this).text();
	if(selectedAnswer === expanse.rightAnswers[expanse.qCounter]) {

		clearInterval(expanse.clock);
		win();
	}
  //If incorrect answer
	else {

		clearInterval(expanse.clock);
		loss();
	}
}); // Close .answer click

//reset-button click
$("body").on("click", ".reset-button", function(event){
	expanse.clickSound.play();
	resetGame();
}); // Closes reset-button click
 