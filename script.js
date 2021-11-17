// returns a random outcome of rock, paper, or scissor
function computerSelection() {
    let choice = ['rock', 'paper', 'scissor']
    // randomly chooses between 'rock', 'paper', 'scissor'
    let computerPlay = choice[Math.floor(Math.random() * 3)]
        return computerPlay;
}


// retrives all element id associated with the buttons
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function main() {
    rock_div.addEventListener('click', e=> {
    game("rock");
    })

    paper_div.addEventListener('click', e=> {
    game("paper");
    })

    scissor_div.addEventListener('click', e=> {
    game("scissor");
    })
}

main();


// iterate the score. Do not put userscore & computerscore insdie the game function or else
// scores will keep reseting
let [userscore, computerscore] = [0,0]

function playerwin() {
    userscore++;
    if(userscore >= 5) {
        rock_div.disabled=true;
        paper_div.disabled=true;
        scissor_div.disabled=true;
        document.getElementById("results").textContent = "player wins!"
    } else {
        rock_div.disabled=false;
        paper_div.disabled=false;
        scissor_div.disabled=false;
    }
}

function computerwin() {
    computerscore++;
    if(computerscore >= 5) {
        rock_div.disabled=true;
        paper_div.disabled=true;
        scissor_div.disabled=true;
        document.getElementById("results").textContent = "computer wins!"
    } else {
        rock_div.disabled=false;
        paper_div.disabled=false;
        scissor_div.disabled=false;
    }
}


// takes an user input
function game(user) {
    const computerChoice = computerSelection(); // returns computer randomly generated result

    let play;
    let winresult;

    switch(user + ':' + computerChoice) {   // everytime a case statement is complete iterate score by 1
        case 'rock:scissor': 
        case 'paper:rock': 
        case 'scissor:paper': 
            play = user + ' beats ' + computerChoice + ' player wins'
            playerwin()
            let userresult = 'player\'s score: ' + userscore;
            document.getElementById("winner").textContent = userresult
            break;
        case 'scissor:rock': 
        case 'rock:paper': 
        case 'paper:scissor': 
            play = computerChoice + ' beats ' + user + ' computer wins'
            computerwin()
            let computerresult = 'computer\'s score: ' + computerscore;
            document.getElementById("loser").textContent = computerresult
            break;
        default : 
            play ='tie'
    }
    document.getElementById("display").textContent = play
}


// counts the number of times all buttons are clicked
function totalcount() {
    let rockButton = rock_div;
    let paperButton = paper_div;
    let scissorButton = scissor_div;
    let myOutput = document.getElementById("count")
    let startNumber =0;

    function addToNumber() {
        myOutput.textContent = "you played a total of:  "+ (1 + startNumber++) + " rounds";
    }
    rockButton.onclick = addToNumber
    paperButton.onclick = addToNumber
    scissorButton.onclick = addToNumber
}

totalcount();

// after pressing 5 times disable the button and display result of who won



