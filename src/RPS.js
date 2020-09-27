let userChosen
let computerChosen

const userChoice = document.getElementById('user-choice')
const computerChoice = document.getElementById('computer-choice')
const displayResult = document.getElementById('result')

var result = results()
var userScore = 0;
var computerScore = 0;

const possibleChoices = document.querySelectorAll('.choices')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChosen = e.target.id
  generatedComputerChoice()
  results()
  userChoice.innerHTML = userChosen
  computerChoice.innerHTML = computerChosen
  displayResult.innerHTML = result
}))

function generatedComputerChoice() {
  let randomComputerChoice = Math.floor(Math.random() * 3)
  if (randomComputerChoice === 0) {
    return computerChosen = 'Rock'
  } else if (randomComputerChoice === 1) {
    return computerChosen = 'Paper'
  } else if (randomComputerChoice === 2) {
    return computerChosen = 'Scissors'
  }
}

function results() {
  if (computerChosen === userChosen) {
    return result = 'It was a tie!'
  } else if (computerChosen === 'Rock' && userChosen === 'Scissors') {
    return result = 'You lost!'
  } else if (computerChosen === 'Rock' && userChosen === 'Paper') {
    return result = 'You won!'
  } else if (computerChosen === 'Paper' && userChosen === 'Rock') {
    return result = 'You lost!'
  } else if (computerChosen === 'Paper' && userChosen === 'Scissors') {
    return result = 'You won!'
  } else if (computerChosen === 'Scissors' && userChosen === 'Paper') {
    return result = 'You lost!'
  } else if (computerChosen === 'Scissors' && userChosen === 'Rock') {
    return result = 'You won!'
  }
}
