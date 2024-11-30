
function getcomputerchoice (){
    let randomnum = (Math.random());
    let computer;

    if (randomnum <= 0.34) {
        computer = "Paper"
    }
    else if (randomnum <= 0.67) {
         computer = "Rock"
    }
    else{
         computer = "Scissor"
    }
    
    return computer
}    


// Generates a random number between 0 and 1, and assigns the choice.

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
  
 let rock = "Rock"
 let paper = "Paper"
 let scissor = "Scissor"
 
  btn1.addEventListener("click", () => {
      human = rock; playround (); roundname();
    })

    btn2.addEventListener("click", () => {
        human = paper; playround (); roundname();
      })

    btn3.addEventListener("click", () => {
       human = scissor; playround (); roundname();
      })



// Record user based on the button clicked on the webiste and executes the playround function

var humanscore = 0;
var computerscore = 0;

// Sets the scorecards



function playround () {

let result = document.querySelector("#RoundResults")
let humanpoint = document.querySelector("#playerscore")
let computerpoint = document.querySelector("#computerscore")


    let computer = getcomputerchoice();

if ( computer ===  human){
    var resulttext = ("Computer chooses " + computer + " as well. Its a draw!");
    result.textContent = resulttext;
}
else if ( computer === "Rock" && human === "Scissor" ) {
    var resulttext = ("Rock beats Scissor, Computer wins this round!"); 
    result.textContent = resulttext;
    computerscore++;
    computerpoint.textContent = computerscore; 
}
else if( computer === "Paper" && human === "Scissor"){
    var resulttext = ("Scissor beats Paper. You Win!"); 
    result.textContent = resulttext;
    humanscore++;
    humanpoint.textContent = humanscore;
}
else if( computer === "Rock" && human === "Paper"){
    var resulttext = ("Paper beats Rock. You Win!"); 
    result.textContent = resulttext;
    humanscore++;
    humanpoint.textContent = humanscore;
}
else if( computer === "Paper" && human === "Rock"){
    var resulttext = ("Paper beats Rock, Computer wins this round!"); 
    result.textContent = resulttext;
    computerscore++;
    computerpoint.textContent = computerscore; 
}
else if( computer === "Scissor" && human === "Rock"){
    var resulttext = ("Rock beats Scissor. You Win!"); 
    result.textContent = resulttext;
    humanscore++;
    humanpoint.textContent = humanscore;
}
else if ( computer === "Scissor" && human === "Paper" ) {
    var resulttext = ("Scissor beats Paper, Computer wins this round!"); 
    result.textContent = resulttext;
    computerscore++   ;
    computerpoint.textContent = computerscore; 
}
else {
    var resulttext = ("Something has gone wrong");
    result.textContent = resulttext;
}
}

// Compares both human and computer's choices, decides the winner and shows it on screen.



let heading = document.querySelector("#main")
let rounds = document.querySelector("#round")
let i = 1


function roundname() {
   i++;
   rounds.innerHTML = "Round " + i;
   rounds.style.fontWeight = "bold"

   if(i == 6 && computerscore > humanscore){
    heading.textContent = ("Computer wins the game by : " + computerscore + " - " + humanscore )
     }
   else if(i == 6 &&  humanscore > computerscore){
    heading.textContent = ("You win the game by : " + humanscore + " - " + computerscore )
     }
   else if (i == 6 && humanscore === computerscore){
    heading.textContent = ("It's a draw : " + humanscore + " - " + computerscore )
     }

     if( i > 5){
        rounds.innerHTML =  "Game Over";
        rounds.style.fontWeight = "bold"
     }

     if( i > 6){
        alert("Refresh to begin a new game")
     }

}

// added rounds record mechanism using increment after every button click.
// And condition to announce winner after Round 5 and start a new game