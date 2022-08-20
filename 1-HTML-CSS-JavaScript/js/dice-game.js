function rollDice(){
    let goldCoins = 0;
    for(let i = 0; i < 10; i++){
        const roll = Math.floor(Math.random() * 6)+1;
        alert("Your roll was a " + roll);
        if(roll === 1){
            alert("Game Over\n\nNo more rolls!");
            break;
        }
        if((roll === 4) && (goldCoins > 0)){
            goldCoins -= 1;
            alert("Uh Oh, you lose a gold coin\n\nYour current coin count is " + goldCoins);
        }
        if(roll < 5){
            continue;
        }
        
        goldCoins += roll;
        alert("Congratulations! You won " + roll + " gold coins\n\nYour current coin count is " + goldCoins);
       
    }
    alert("You won " + goldCoins + " gold coins!");
}