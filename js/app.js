/*----- constants -----*/

const COUNTDOWN = 3;

/*----- app's state (variables) -----*/

var playerWeapon;
var computerWeapon;

var scores;
var weapons;

/*----- cached element references -----*/

var weaponBox = document.getElementById('weapons');
var scoresBox = document.getElementById('scores');
var countdownBox = document.getElementById('countdown');
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
    reDraw();
}

function weaponClick() {

}