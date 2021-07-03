const userChoiceDisplay = document.querySelector('#playerHand')
const computerChoiceDisplay = document.querySelector('#computerHand')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.gameButton');

let playerChoise;
let computerChoise;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.setAttribute('src', `./imgs/${e.target.id}.png`)
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5) + 1 // or you can use possibleChoices.length

    switch(randomNumber){
        case 1:
            computerChoice = 'rock'
            break
        case 2:
            computerChoice = 'paper'
            break
        case 3:
            computerChoice = 'scissors'
            break
        case 4:
            computerChoice = 'lizzard'
            break
        case 5:
            computerChoice = 'spock'
    }

    computerChoiceDisplay.setAttribute('src', `./imgs/${computerChoice}.png`)
}

function getResult() {
    if (computerChoice === userChoice) {
      result = "It's a draw!"
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
      result = 'You win!'
    }
    if (computerChoice === 'rock' && userChoice === "spock") {
      result = 'You win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
      result = 'You lost!'
    }
    if (computerChoice === 'rock' && userChoice === "lizzard") {
      result = 'You lost!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
      result = 'You win!'
    }
    if (computerChoice === 'paper' && userChoice === "lizzard") {
      result = 'You win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
      result = 'You lose!'
    }
    if (computerChoice === 'paper' && userChoice === "spock") {
      result = 'You lose!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
      result = 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice === "spock") {
      result = 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
      result = 'You lose!'
    }
    if (computerChoice === 'scissors' && userChoice === "lizzard") {
      result = 'You lose!'
    }
    if (computerChoice === 'spock' && userChoice === "lizzard") {
      result = 'You win!'
    }
    if (computerChoice === 'spock' && userChoice === "paper") {
      result = 'You win!'
    }
    if (computerChoice === 'spock' && userChoice === "scissors") {
      result = 'You lose!'
    }
    if (computerChoice === 'spock' && userChoice === "rock") {
      result = 'You lose!'
    }
    if (computerChoice === 'lizzard' && userChoice === "scissors") {
      result = 'You win!'
    }
    if (computerChoice === 'lizzard' && userChoice === "rock") {
      result = 'You win!'
    }
    if (computerChoice === 'lizzard' && userChoice === "paper") {
      result = 'You lose!'
    }
    if (computerChoice === 'lizzard' && userChoice === "spock") {
      result = 'You lose!'
    }

    resultDisplay.innerHTML = result
  }





