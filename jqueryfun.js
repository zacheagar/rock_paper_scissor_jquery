/*Use jQuery
Allow the user to choose Rock / Paper / Scissors
Show users guess vs computers guess
Keep track of number of games won
Be able to start a new game */


$(document).ready(function() {


    var options = ['Rock', 'Paper', 'Scissors'];
    var computerGuess = Math.floor(Math.random() * 2);
    var computerChoice = options[computerGuess];

    $('.button').click(function() {

        var playerGuess = $(this).text();
        console.log(playerGuess + ' ' + computerChoice);
        playerChoice(playerGuess, computerChoice);

    });

});


//$("#rock").on("click", playerChoice());



function playerChoice(a, b) {
    var playerGuess = a;
    var computerChoice = b;
    var options = ['Rock', 'Paper', 'Scissors'];
    var computerGuess = Math.floor(Math.random() * 2);
    var computerChoice = options[computerGuess];
    if (a == b) {
        $("#result").text("It is a" + " " + "Tie!:|" + " " + "The computer guessed" + " " + computerChoice);
    }
    if (a === 'Rock' && b === 'Scissors' || a === 'Paper' && b === 'Rock' || a === 'Scissors' && b === 'Paper') {
        $("#result").text("It is a" + " " + "Win!:D" + " " + "The computer guessed" + " " + computerChoice);
    }
    if (a === 'Scissors' && b === 'Rock' || a === 'Rock' && b === 'Paper' || a === 'Paper' && b === 'Scissors') {
        $("#result").text("It is a" + " " + "Loss!:(" + " " + "The computer guessed" + " " + computerChoice);
    }
}
