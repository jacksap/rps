# Rock Paper Scissors

## User Stories
* On load, the user sees the gameboard.
    * The splash screen has a printed instruction panel, so that the player knows how to play.
    * User can start the game.
    * User sees controls for choosing weapon and count-down.
    * User can see current score standing.
* User action...
    * User can click a button to activate play 
    * User can interact with interface to choose a weapon
    * Start the contest
    * Audio optional

## UI Notes
Main screen will have instructions and images of weapons to choose from. Clicking on one of the weapons will start the duel.

## Pseudocode
* Store the user's selection
* AI picks randomly another weapon (also stored in variable)
* Determine the winner
    *  Each individual chooses a weapon
    * If both weapons are identical, DRAW
    * There are win and lose cases
    * Track what each weapon will beat
* Keep track of score and modify values
* Reset back to initState

## Additional Features
* Countdown timer before the winner is announced
* Rounds, best of three scoring
* Audio for countdown, winner/loser (OPTIONAL - can turn off)
* Animations

## State of the app (DATA)
* playerWeapon = holds the player's weapon
* computerWeapon = AI's choice
* variables to hold the score, match scoring, round scoring
* What weapons can I choose from?
    * Object (Associative Array) or Array
    * What weapons do those weapons beat?

## Cached Elements
* Weapon Images
* Score Text Elements (includes round/match scoring)
* Button to toggle sound
* Reset button
* Text Element countdown

## Events
* DOMContentLoaded:
    * Grab DOM references
    * Attach eventListeners
    * (OPTIONAL) start audio
* initGame >>>
* weapon.click:
    * store user weapon's choice
    * randomly generate AI choice
    * start countdown setInterval()
    * checkWin to determine winner
    * display winner
    * update scores(s)
    * enable reset button - or automatically reset

