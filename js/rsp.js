document.addEventListener(`DOMContentLoaded`, function () {
  const buttons = document.querySelectorAll(`.buttons`);
  const yourChoice = document.querySelector(`.yourchoice`);
  const computerChoice = document.querySelector(`.computerchoice`);
  const result2 = document.querySelector(`.whowin`);
  const rsp = ['가위', '바위', '보'];
  const show = (user, computer, result) => {
    yourChoice.innerText = user;
    computerChoice.innerText = computer;
    result2.innerText = result;
  }
  const result1 = (user, computer) => {
    let message;
    if (user === computer) {
      message = '비겼습니다';
    } else {
      switch (user + computer) {
        case '바위가위':
        case '가위보':
        case '보바위':
          message = '사용자 승리';
          break;
        case '가위바위':
        case '보가위':
        case '바위보':
          message = '컴퓨터 승리';
      }
    }

    show(user, computer, message)


  }


  const play = (event) => {
    const user = event.target.innerText;
    const computer = Math.floor(Math.random() * 3)
    const result = rsp[computer];
    result1(user, result);

  }

  buttons.forEach((button) => {
    button.addEventListener(`click`, play);

  });
});







