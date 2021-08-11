//Clases
class Score {
  constructor(win, lose, draw) {
    return {
      win: win || 0,
      lose: lose || 0,
      draw: draw || 0,
    };
  }
}

// Variables

let userChoice;
let computerChoice;
let result;

let winsCounter;
let loseCounter;
let drawCounter;
let totalCounter;

//Logica

if (localStorage.getItem("score") != null) {
  const actualScore = JSON.parse(localStorage.getItem("score"));
  winsCounter = actualScore.win;
  loseCounter = actualScore.lose;
  drawCounter = actualScore.draw;
  totalCounter = loseCounter + winsCounter + drawCounter;
} else {
  winsCounter = 0;
  loseCounter = 0;
  drawCounter = 0;
  totalCounter = 0;
}

//Eventos
$('.gameButton').on('click', (e) => {
  userChoice = e.target.id;
  $('#playerHand').attr('src', `./imgs/${e.target.id}.png`)
  generateComputerChoice();
  getResult();
  const score = new Score(winsCounter, loseCounter, drawCounter);
  localStorage.setItem("score", JSON.stringify(score));
})


//Funciones

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1; // or you can use possibleChoices.length

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
    case 4:
      computerChoice = "lizard";
      break;
    case 5:
      computerChoice = "spock";
  }

  $('#computerHand').attr('src', `./imgs/${computerChoice}.png`);
};

const actualResult = () => {
  $('#result').text("Let's play!");
  $('#draw').text(`You drew ${drawCounter} times`);
  $('#wins').text(`You won ${winsCounter} times`);
  $('#lose').text(`You lost ${loseCounter} times`);
  $('#total').text(`You played a total of ${totalCounter} times`);
};

const getResult = () => {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
    $('#playerHand').css('box-shadow', 'none')
    $('#playerHand').css('border-radius', '50%')
    drawCounter += 1;
    $('#draw').text(`You drew ${drawCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win!";    
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #1dea37')
    $('#playerHand').css('border-radius', '50%')
    winsCounter += 1;
    $('#wins').text(`You won ${winsCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "rock" && userChoice === "spock") {
    result = "You win!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #1dea37')
    $('#playerHand').css('border-radius', '50%')
    winsCounter += 1;
    $('#wins').text(`You won ${winsCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lose!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #ea3131')
    $('#playerHand').css('border-radius', '50%')
    loseCounter += 1;
    $('#lose').text(`You lost ${loseCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "rock" && userChoice === "lizard") {
    result = "You lose!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #ea3131')
    $('#playerHand').css('border-radius', '50%')
    loseCounter += 1;
    $('#lose').text(`You lost ${loseCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #1dea37')
    $('#playerHand').css('border-radius', '50%')
    winsCounter += 1;
    $('#wins').text(`You won ${winsCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "paper" && userChoice === "lizard") {
    result = "You win!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #1dea37')
    $('#playerHand').css('border-radius', '50%')
    winsCounter += 1;
    $('#wins').text(`You won ${winsCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lose!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #ea3131')
    $('#playerHand').css('border-radius', '50%')
    loseCounter += 1;
    $('#lose').text(`You lost ${loseCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "paper" && userChoice === "spock") {
    result = "You lose!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #ea3131')
    $('#playerHand').css('border-radius', '50%')
    loseCounter += 1;
    $('#lose').text(`You lost ${loseCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #1dea37')
    $('#playerHand').css('border-radius', '50%')
    winsCounter += 1;
    $('#wins').text(`You won ${winsCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "scissors" && userChoice === "spock") {
    result = "You win!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #1dea37')
    $('#playerHand').css('border-radius', '50%')
    winsCounter += 1;
    $('#wins').text(`You won ${winsCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lose!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #ea3131')
    $('#playerHand').css('border-radius', '50%')
    loseCounter += 1;
    $('#lose').text(`You lost ${loseCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "scissors" && userChoice === "lizard") {
    result = "You lose!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #ea3131')
    $('#playerHand').css('border-radius', '50%')
    loseCounter += 1;
    $('#lose').text(`You lost ${loseCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "spock" && userChoice === "lizard") {
    result = "You win!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #1dea37')
    $('#playerHand').css('border-radius', '50%')
    winsCounter += 1;
    $('#wins').text(`You won ${winsCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "spock" && userChoice === "paper") {
    result = "You win!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #1dea37')
    $('#playerHand').css('border-radius', '50%')
    winsCounter += 1;
    $('#wins').text(`You won ${winsCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "spock" && userChoice === "scissors") {
    result = "You lose!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #ea3131')
    $('#playerHand').css('border-radius', '50%')
    loseCounter += 1;
    $('#lose').text(`You lost ${loseCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "spock" && userChoice === "rock") {
    result = "You lose!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #ea3131')
    $('#playerHand').css('border-radius', '50%')
    loseCounter += 1;
    $('#lose').text(`You lost ${loseCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "lizard" && userChoice === "scissors") {
    result = "You win!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #1dea37')
    $('#playerHand').css('border-radius', '50%')
    winsCounter += 1;
    $('#wins').text(`You won ${winsCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "lizard" && userChoice === "rock") {
    result = "You win!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #1dea37')
    $('#playerHand').css('border-radius', '50%')
    winsCounter += 1;
    $('#wins').text(`You won ${winsCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "lizard" && userChoice === "paper") {
    result = "You lose!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #ea3131')
    $('#playerHand').css('border-radius', '50%')
    loseCounter += 1;
    $('#lose').text(`You lost ${loseCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }
  if (computerChoice === "lizard" && userChoice === "spock") {
    result = "You lose!";
    $('#playerHand').css('box-shadow', '0px 0px 25px 10px #ea3131')
    $('#playerHand').css('border-radius', '50%')
    loseCounter += 1;
    $('#lose').text(`You lost ${loseCounter} times`);
    totalCounter = loseCounter + winsCounter + drawCounter;
    $('#total').text(`You played a total of ${totalCounter} times`);
  }

  $('#result').text(result);
};

actualResult();

