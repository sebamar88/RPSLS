const userChoiceDisplay = document.querySelector('#playerHand')
const computerChoiceDisplay = document.querySelector('#computerHand')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.gameButton');
const winsCounterDisplay = document.getElementById('wins')
const drawsCounterDisplay = document.getElementById('draw')
const loseCounterDisplay = document.getElementById('lose')
const totalCounterDisplay = document.getElementById('total')


let userChoice;
let computerChoice;
let result;

let drawCounter = 0;
let winsCounter = 0;
let loseCounter = 0;
let totalCounter = 0;

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
            computerChoice = 'lizard'
            break
        case 5:
            computerChoice = 'spock'
    }

    computerChoiceDisplay.setAttribute('src', `./imgs/${computerChoice}.png`)
}

function getResult() {
    if (computerChoice === userChoice) {
      result = "It's a draw!"
      userChoiceDisplay.style.boxShadow = 'none'
      userChoiceDisplay.style.borderRadius = '50%'
      drawCounter += 1;
      drawsCounterDisplay.innerHTML = `You drew ${drawCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
      result = 'You win!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #1dea37'
      userChoiceDisplay.style.borderRadius = '50%'
      winsCounter += 1;
      winsCounterDisplay.innerHTML = `You won ${winsCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'rock' && userChoice === "spock") {
      result = 'You win!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #1dea37'
      userChoiceDisplay.style.borderRadius = '50%'
      winsCounter += 1;
      winsCounterDisplay.innerHTML = `You won ${winsCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
      result = 'You lose!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #ea3131'
      userChoiceDisplay.style.borderRadius = '50%'
      loseCounter += 1;
      loseCounterDisplay.innerHTML = `You lost ${loseCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'rock' && userChoice === "lizard") {
      result = 'You lose!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #ea3131'
      userChoiceDisplay.style.borderRadius = '50%'
      loseCounter += 1;
      loseCounterDisplay.innerHTML = `You lost ${loseCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
      result = 'You win!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #1dea37'
      userChoiceDisplay.style.borderRadius = '50%'
      winsCounter += 1;
      winsCounterDisplay.innerHTML = `You won ${winsCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'paper' && userChoice === "lizard") {
      result = 'You win!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #1dea37'
      userChoiceDisplay.style.borderRadius = '50%'
      winsCounter += 1;
      winsCounterDisplay.innerHTML = `You won ${winsCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
      result = 'You lose!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #ea3131'
      userChoiceDisplay.style.borderRadius = '50%'
      loseCounter += 1;
      loseCounterDisplay.innerHTML = `You lost ${loseCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'paper' && userChoice === "spock") {
      result = 'You lose!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #ea3131'
      userChoiceDisplay.style.borderRadius = '50%'
      loseCounter += 1;
      loseCounterDisplay.innerHTML = `You lost ${loseCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
      result = 'You win!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #1dea37'
      userChoiceDisplay.style.borderRadius = '50%'
      winsCounter += 1;
      winsCounterDisplay.innerHTML = `You won ${winsCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'scissors' && userChoice === "spock") {
      result = 'You win!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #1dea37'
      userChoiceDisplay.style.borderRadius = '50%'
      winsCounter += 1;
      winsCounterDisplay.innerHTML = `You won ${winsCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
      result = 'You lose!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #ea3131'
      userChoiceDisplay.style.borderRadius = '50%'
      loseCounter += 1;
      loseCounterDisplay.innerHTML = `You lost ${loseCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'scissors' && userChoice === "lizard") {
      result = 'You lose!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #ea3131'
      userChoiceDisplay.style.borderRadius = '50%'
      loseCounter += 1;
      loseCounterDisplay.innerHTML = `You lost ${loseCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'spock' && userChoice === "lizard") {
      result = 'You win!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #1dea37'
      userChoiceDisplay.style.borderRadius = '50%'
      winsCounter += 1;
      winsCounterDisplay.innerHTML = `You won ${winsCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'spock' && userChoice === "paper") {
      result = 'You win!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #1dea37'
      userChoiceDisplay.style.borderRadius = '50%'
      winsCounter += 1;
      winsCounterDisplay.innerHTML = `You won ${winsCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'spock' && userChoice === "scissors") {
      result = 'You lose!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #ea3131'
      userChoiceDisplay.style.borderRadius = '50%'
      loseCounter += 1;
      loseCounterDisplay.innerHTML = `You lost ${loseCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'spock' && userChoice === "rock") {
      result = 'You lose!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #ea3131'
      userChoiceDisplay.style.borderRadius = '50%'
      loseCounter += 1;
      loseCounterDisplay.innerHTML = `You lost ${loseCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'lizard' && userChoice === "scissors") {
      result = 'You win!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #1dea37'
      userChoiceDisplay.style.borderRadius = '50%'
      winsCounter += 1;
      winsCounterDisplay.innerHTML = `You won ${winsCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'lizard' && userChoice === "rock") {
      result = 'You win!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #1dea37'
      userChoiceDisplay.style.borderRadius = '50%'
      winsCounter += 1;
      winsCounterDisplay.innerHTML = `You won ${winsCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'lizard' && userChoice === "paper") {
      result = 'You lose!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #ea3131'
      userChoiceDisplay.style.borderRadius = '50%'
      loseCounter += 1;
      loseCounterDisplay.innerHTML = `You lost ${loseCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }
    if (computerChoice === 'lizard' && userChoice === "spock") {
      result = 'You lose!'
      userChoiceDisplay.style.boxShadow = '0px 0px 25px 10px #ea3131'
      userChoiceDisplay.style.borderRadius = '50%'
      loseCounter += 1;
      loseCounterDisplay.innerHTML = `You lost ${loseCounter} times`
      totalCounter = loseCounter + winsCounter + drawCounter;
      totalCounterDisplay.innerHTML = `You played a total of ${totalCounter} times`
    }

    resultDisplay.innerHTML = result
  }





