
function getcomputerchoice (){
    let randomnum = (Math.random())

    if (randomnum <= 0.34) {
        console.log("paper")
    }
    else if (randomnum <= 0.67) {
        console.log("scissor")
    }
    else{
        console.log("rock")
    }
}    

// Generates a random number between 0 and 1, and assigns the choice.


function gethumanchoice(){

var humanchoice = prompt("What do you choose ?")

var choice1 = "rock"; var choice2 = "paper"; var choice3 = "scissor"

if (humanchoice.toLowerCase() == choice1.toLowerCase()){
    console.log("rock")
}
else if (humanchoice.toLowerCase() == choice2.toLowerCase()) {
    console.log("paper")
}
else if (humanchoice.toLowerCase() == choice3.toLowerCase()) {
    console.log("scissor")
}
else {
    console.log("Invalid input! refresh to try again")
}
}
// Record correct user input while being case insensitive

var humanscore = 0;
var computerscore = 0;





/*
function gethumanchoice(){



}












*/
