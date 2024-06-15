
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let secretNumber = generateRandomNumber(1, 100);
let attempts = 0;
let guessed = false;


function checkGuess() {
  let userGuess = parseInt(document.getElementById('userGuess').value);
  attempts++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    setMessage('1에서 100 사이의 숫자를 입력해주세요.', 'red');
    return;
  }

  if (userGuess < secretNumber) {
    setMessage('너무 낮습니다. 다시 시도해보세요.', 'blue');
  } else if (userGuess > secretNumber) {
    setMessage('너무 높습니다. 다시 시도해보세요.', 'blue');
  } else {
    setMessage(`축하합니다! ${secretNumber}를 맞히셨습니다.<br>시도 횟수: ${attempts}`, 'green');
    guessed = true;
  }

  document.getElementById('userGuess').value = '';
}


function setMessage(msg, color) {
  document.getElementById('message').style.color = color;
  document.getElementById('message').innerHTML = msg;
}
