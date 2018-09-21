/*----- constants -----*/

const COUNTDOWN = 3;

/*----- app's state (variables) -----*/

var playerWeapon;
var computerWeapon;

var scores;
var weapons;
var stage;

/*----- cached element references -----*/

var weaponBox = document.getElementById('weapons');
//var scoresBox = document.getElementById('scores');

// Elements that show round scores
var humanScore = document.getElementById("h-score");
var compScore = document.getElementById("c-score");
var tieScore = document.getElementById("ties");

//These are the elements that show match scores
var matchHumanScore = document.getElementById("h-mscore");
var matchCompScore = document.getElementById("c-mscore");

var resultsBox = document.getElementById('results');
var resultText = document.querySelector('#results > p');
var resetBtn = document.querySelector('footer > button');

/*----- event listeners -----*/

// Using delegation to add the EL of click

weaponBox.addEventListener('click', weaponClick);

/*----- functions -----*/
function initalize (){
    //gameBoard in the starting state
    scores = {
        round:{
            win: 0,
            draw: 0,
            loss: 0
        },
        match:{
            win: 0,
            loss: 0
        }
    }
    
    weapons = {
        r: 's',
        p: 'r',
        s: 'p'
    }

    playerWeapon = 'r';
    computerWeapon = 'r'; // holding things that they may have, that way you can plan
    
    stage = 'select';
    reDraw();
}

function doCountdown(winner) {
    var countRemaining = COUNTDOWN;
    resultText.textContent = countRemaining;
    var counter = setInterval(function() {
        countRemaining--;
        if (countRemaining) {
            resultText.textContent = countRemaining;
        } else {
            clearInterval(counter);
            if (winner === 't') {
                scores.round.draw ++
                resultText.textContent = "DRAW!";
            } else if (winner === 'w') {
                scores.round.win ++;
                resultText.textContent = "YOU WON!";
            } else {
                scores.round.loss ++;
                resultText.textContent = "YOU LOST!";
            }
        }
        stage = 'results';
    reDraw();
    setTimeout(function (){
        stage = 'select';
        reDraw();
    }, 3000);
    }, 1000);
}

function weaponClick(e) {
    playerWeapon = e.target.alt;
    console.log(playerWeapon);
    // randomly choose AI weapon
    var choices = Object.keys(weapons);
    var rand = Math.floor(Math.random() * 3 );
    computerWeapon = choices[rand];
    console.log(computerWeapon);
    var winner = getWinner();
    stage = 'countdown';
    reDraw();
    doCountdown(winner);
}

function getWinner(){
    if (playerWeapon === computerWeapon) {
        return 't';
    } else {
        if (weapons[playerWeapon] === computerWeapon) {
            return 'w';
        }
        else {
            return 'l';
        }
    }
}

function reDraw(stage) {
    humanScore.textContent = scores.round.win;
    compScore.textContent = scores.round.loss;
    ties.textContent = scores.round.draw;

    matchCompScore.textContent = scores.match.loss;
    matchHumanScore.textContent = scores.match.win;

    switch (stage) {
        case 'select':
            // do stuff if we are in the select stage
            // display weapons and hide results
            resultsBox.style.display = 'none';
            weaponBox.style.display = 'block';
            break;
        case 'countdown':
        case 'results':
            //do stuff if we are counting down
            // hide weapons box
            weaponBox.style.display = 'none';
            // show results box
            resultsBox.style.display = 'block';
            break;
    }
}

initalize();