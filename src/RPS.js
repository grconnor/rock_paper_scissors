let userChosen
let computerChosen
const displayResult = document.getElementById('result')
const userChoice = document.getElementById('user-choice')
var result = results()
const possibleChoices = document.querySelectorAll('.choices')
const computerChoice = document.getElementById('computer-choice')

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
    return computerChosen = 'rock'
  } else if (randomComputerChoice === 1) {
    return computerChosen = 'paper'
  } else if (randomComputerChoice === 2) {
    return computerChosen = 'scissors'
  }
}

function results() {
  if (computerChosen === userChosen) {
    return result = 'It was a tie!'
  } else if (computerChosen === 'rock' && userChosen === 'scissors') {
    return result = 'You lost!'
  } else if (computerChosen === 'rock' && userChosen === 'paper') {
    return result = 'You won!'
  } else if (computerChosen === 'paper' && userChosen === 'rock') {
    return result = 'You lost!'
  } else if (computerChosen === 'paper' && userChosen === 'scissors') {
    return result = 'You won!'
  } else if (computerChosen === 'scissors' && userChosen === 'paper') {
    return result = 'You lost!'
  } else if (computerChosen === 'scissors' && userChosen === 'rock') {
    return result = 'You won!'
  }
}