/**
 * GUESSING GAME:
 *
 * Created By: Jesse Mayhew
 * Date:February 18 2014
 * Create a variable to store a random integer within the range 1-10.
 Create variables that reference the DOM(html) elements or 1 object literal.
 Create an .addEventListner event listener on the guess button to listen for a click event.
 When the guess button is clicked, evaluate your guess with the number the computer has chosen.
 Create a function to validate the users input:

 Validate that a number was entered. AND
 Validate that the number entered is between 1 and 10

 If your guess is higher than the computer's number then display appropriate message in the HTML.
 If your guess is lower than the computer's number then display appropriate message in the HTML.
 If your guess is equal to the computer's number then display appropriate message and end the game.
 Tally all the wrong guesses and end the game after the 3rd incorrect guess and show appropriate game over message in the HTML.
 Deactivate the button by removing the event listener when the game is over.
 EXTRA CREDIT: Use a keyboard event for the ENTER button that also acts like clicking on the guess button.
 * GUESSING GAME
 */

//Game variables
(function (){

var magicNumber =(Math.floor(Math.random()*10+1));
    console.log(magicNumber);

var
})();