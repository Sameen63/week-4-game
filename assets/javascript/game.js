$(document).ready(function() {

// make global Variables

//Make a Random number var
var computerGuess = 0;

var familyGuy1 = 0;
var familyGuy2 = 0;
var familyGuy3 = 0;
var familyGuy4 = 0;
var wins = 0;
var losses = 0;
var totalScore = 0;



// First step start game
resetVars();
printAllVars();

//secend step playGame

$("#familyGuy1").on("click", playStewie);
$("#familyGuy2").on("click", playBrain);
$("#familyGuy3").on("click", playPeter);
$("#familyGuy4").on("click", playQuig);

// update score


// compare with each one of the
function playStewie() {
    totalScore = totalScore + familyGuy1;
    if (win()) {
        resetVars();
        printAllVars();
    } 
    else if (lost()) {
        resetVars();
        printAllVars();
    } 
    else {
        printAllVars();
    }
}

function playBrain() {
    totalScore = totalScore + familyGuy2;
    if (win()) {
        resetVars();
        printAllVars();
    } 
    else if (lost()) {
        resetVars();
        printAllVars();
    } 
    else {
        printAllVars();
    }
}

function playPeter() {
    totalScore = totalScore + familyGuy3;
    if (win()) {
        resetVars();
        printAllVars();
    } 
    else if (lost()) {
        resetVars();
        printAllVars();
    } 
    else {
        printAllVars();
    }
}

function playQuig() {
    totalScore = totalScore + familyGuy4;
    if (win()) {
        resetVars();
        printAllVars();
    } 
    else if (lost()) {
        resetVars();
        printAllVars();
    } 
    else {
        printAllVars();
    }
}

// define win/lose

function win() {
    if (totalScore == computerGuess) {
        printAllVars();
        alert("You won!");
        wins++;
        return true;
    }
    return false;
}

function lost() {
    if (totalScore > computerGuess) {
        printAllVars();
        alert("sorry you lost. Play again!")
        losses++;
        return true;
    }
    return false;
}
    function printAllVars() {

    $("#random").html(computerGuess.toString());
    $(".wins").html("Wins: " + wins.toString());
    $(".losses").html("Losses: " + losses.toString());
    $("#score").html(totalScore.toString());
}
// generate random numbers

function randomGenerator(shape) {
    if (shape == "notValue") {
        return Math.floor(Math.random() * (120 - 19) + 19) + 1;
    } 
    else if (shape == "value") {
        return Math.floor(Math.random() * (12 - 1) + 1) + 1;
    }
}

// Reset variables once a game ends

 function resetVars() {
    computerGuess = randomGenerator("notValue");
    familyGuy1 = randomGenerator("value");
    familyGuy2 = randomGenerator("value");
    familyGuy3 = randomGenerator("value");
    familyGuy4 = randomGenerator("value");
    totalScore = 0;
}

// Print all variables:



})