let userChosen
let computerChosen
car result = results()
const displayResult = document.getElementById('results')
const computerChoice = document.getElementById('computer-choice')

function results() {
  if(computerChosen === userChosen) {
    return result = 'It was a tie!'
  } else if (computerChosen === 'rock' && userChose === 'scissors') {
    return result = 'You lost!'
  } else if (computerChosen === 'rock' && userChose === 'paper') {
    return result = 'You won!'
  } else if (computerChosen === 'paper' && userChose === 'rock') {
    return result = 'You lost!'
  } else if (computerChosen === 'paper' && userChose === 'scissors') {
    return result = 'You won!'
  } else if (computerChosen === 'scissors' && userChose === 'paper') {
    return result = 'You lost!'
  } else if (computerChosen === 'scissors' && userChose === 'rock') {
    return result = 'You won!'
  }
}