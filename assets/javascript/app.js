// Make global variables
var expanse = {
    setScreen: "",
    rightCounter: 0,
    wrongCounter: 0,
    noAnsrCounter: 0,
    clickSound: new Audio("assets/sounds/button-click.mp3"),
    html: "",
    questionArry: ["What was the Rocinante's original name?", "Who was Miller hired to find?", "What is the primary method of propulsion in the Expanse?", " What causes drinks to pour sideways on Tycho Station?", "What is the Ring object?"],
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
        else if(expanse.timeCounter === 0){
            timeOutLoss();
            clearInterval(expanse.clock);

        $(".timer").html(expanse.timeCounter);
    }
}

