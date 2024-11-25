
function getcomputerchoice (){
    let randomnum = (Math.random());
    let computer;

    if (randomnum <= 0.34) {
        computer = "paper"
    }
    else if (randomnum <= 0.67) {
         computer = "rock"
    }
    else{
         computer = "scissor"
    }
    
    console.log(computer)
    return computer
}    


// Generates a random number between 0 and 1, and assigns the choice.


function gethumanchoice(){

var humanchoice = prompt("What do you choose ?")

var choice1 = "rock"; var choice2 = "paper"; var choice3 = "scissor"

if (humanchoice.toLowerCase() == choice1.toLowerCase()){
    var human = humanchoice.toLowerCase()
}
else if (humanchoice.toLowerCase() == choice2.toLowerCase()) {
    var human = humanchoice.toLowerCase()
}
else if (humanchoice.toLowerCase() == choice3.toLowerCase()) {
    var human = humanchoice.toLowerCase()
}
else {
    console.log("Invalid input! refresh to try again")
}

console.log(human)
return human;

}

// Record correct user input even while being case insensitive

var humanscore = 0;
var computerscore = 0;

// Sets the scorecards







function playround () {

    let human =  gethumanchoice(); 
    let computer = getcomputerchoice();
    

if ( computer ===  human){
    console.log("Its a draw")
}
else if ( computer === "rock" && human === "scissor" ) {
    console.log ("rock beats scissor, Computer wins this round!"); computerscore++   
}
else if( computer === "paper" && human === "scissor"){
    console.log("You Win!"); humanscore++
}
else if( computer === "rock" && human === "paper"){
    console.log("You Win!"); humanscore++
}
else if( computer === "paper" && human === "rock"){
    console.log("paper beats rock, Computer wins this round!"); computerscore++
}
else if( computer === "scissor" && human === "rock"){
    console.log("You Win!"); humanscore++
}
else if ( computer === "scissor" && human === "paper" ) {
    console.log ("scissor beats paper, Computer wins this round!"); computerscore++   
}
else {
    console.log("Something has gone wrong")
}
}

// Compares both human and computer's choices and decides the winner.


function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        playround(); // Call the playround function for each round
        console.log(`Scores after Round ${i}: Human - ${humanscore}, Computer - ${computerscore}`);
    }
    if(computerscore > humanscore){
        console.log("Computer wins the game by : " + computerscore + " - " + humanscore )
        console.log("Reload the page to play again!")
    }
    else if( humanscore > computerscore){
        console.log("You win the game by : " + humanscore + " - " + computerscore )
        console.log("Reload the page to play again!")
    }
    else {
        console.log("It's a draw : " + humanscore + " - " + computerscore )
        console.log("Reload the page to play again!")
    }
}
// Added 5 rounds to the game and a winner declare conditional

playGame()
