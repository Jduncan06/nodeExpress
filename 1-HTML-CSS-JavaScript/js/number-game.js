function runGame(){
    const target = Math.floor(Math.random() * 100)+1;
    let guessString = "";
    let guessNum = 0;
    let correct = false;
    let numTries = 0;
    do {
        guessString= prompt("I'm thinking of a number between 1 and 100\n\n What is the number?");
        guessNum = +guessString;
        correct = checkGuess(guessNum, target);
        numTries += 1;  
    }while(!correct);
    alert("Congratulations! You guessed the number!\n\nThe number was " + target +"\n\nIt took you " + numTries + " guesses");
}
function checkGuess(guessNum, target){
    let correct=false;
    if(isNaN(guessNum)){
        alert("You have not entered a number.\n\nPlease guess a number between 1-100");
    }else if((guessNum < 1) || (guessNum > 100)){
        alert("You have entered a number out of range.\n\nPlease guess a number between 1-100");
    }else if(guessNum > target){
        alert("Your number is too large.\n\nGuess again!");
    }else if(guessNum < target){
        alert("Your number is too small.\n\nGuess again!");
    }else{
        correct = true;
    }
    return correct;
}