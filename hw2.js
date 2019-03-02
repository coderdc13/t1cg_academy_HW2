//week two js task one is the trivia function

let questionRA = [
    "What is the nickname of Steve Wilkos? a: Bamdino, b: Bam-Bam, c: Dino",
    "In what branch of the US Armed Forces did Steve Wilkos serve? a: US Army, b: USMC, c: US Air Force, d: US Navy",
    "In what police force was Steve Wilkos? a: LAPD, b: NYPD, c: Chicago PD, d: MPDC (Washington, DC Police)",
];
    const titlexInput = document.getElementById('titlexInput');
    const yearInput = document.getElementById('yearInput');
    const triviaContent = document.getElementById('triviaContent');
    const trivInput = document.getElementById('trivInput');
    const enterAnsButton = document.getElementById('enterAnsButton');
    const nextQuest = document.getElementById('nextQuest');
    const rstGame = document.getElementById('rstGame');
    const responseResult = document.getElementById('responseResult');
    //directly above is set of variables that I think are mainly related to the quiz function...
    const steveVideo = document.getElementById('steveVideo');
    const steveReal = document.getElementById('steveReal');
    //directly above is the set of variables that I think are mainly related to the toggle function...
    const movieTable = document.getElementById('movieTable');
    const msgContainer = document.getElementById('msgContainerid');
    //directly above is the set of variables that I think are mainly related to the table entry function...


triviaFunc = () => {
    triviaContent.classList.toggle('classHider');
    trivInput.classList.toggle('classHider');
    enterAnsButton.classList.toggle('classHider');
    nextQuest.classList.toggle('classHider');
    rstGame.classList.toggle('classHider');
    triviaContent.innerHTML = questionRA[0];
};

enterAnswer = () => {
    responseResult.classList.toggle('classHider');
    switch (questionRA.indexOf(triviaContent.innerHTML)) {
        case 0:
        questionOneHandler();
        break;
        case 1:
        questionTwoHandler();
        break;
        case 2:
        questionThreeHandler();
        break;
    }
};

questionOneHandler = () => {
    if (trivInput.value === 'a' || trivInput.value === 'A') {
      responseResult.innerHTML = 'Correct!';
    } else {
      nextQuest.classList.toggle('classHider');
      responseResult.innerHTML = 'Incorrect, please reset game';
    }
    resetInputValues();
  };
  
  questionTwoHandler = () => {
    if (trivInput.value === 'b') {
      responseResult.innerHTML = 'Correct!';
    } else {
      nextQuest.classList.toggle('classHider');
      responseResult.innerHTML = 'Incorrect, please reset game';
    }
    resetInputValues();
  };
  
  questionThreeHandler = () => {
    if (trivInput.value === 'c') {
      responseResult.innerHTML = 'Correct! You win the game';
    } else {
      nextQuest.classList.toggle('classHider');
      responseResult.innerHTML = 'Incorrect, please reset game';
    }
    resetInputValues();
    //nextQuest.classList.toggle('classHider');
  };

  nextQuestionFunc = () => {
    if (questionRA.indexOf(triviaContent.innerHTML) === 0) {
      triviaContent.innerHTML = questionRA[1];
      responseResult.classList.toggle('classHider');
    } else if (questionRA.indexOf(triviaContent.innerHTML) === 1) {
      triviaContent.innerHTML = questionRA[2];
      responseResult.classList.toggle('classHider');
    } else {
      triviaContent.innerHTML = 'You Win! Thanks for Playing! Enjoy the Site...';
    }
  };

  resetGameFunc = () => {
    triviaContent.classList.toggle('classHider');
    trivInput.classList.toggle('classHider');
    enterAnsButton.classList.toggle('classHider');
    responseResult.classList.toggle('classHider');
    rstGame.classList.toggle('classHider');
    triviaContent.innerHTML = '';
    responseResult.innerHTML = '';
    resetInputValues();
  };

  //directly above is the set of functions for what I believe influence the quiz...

  toggleHidden = () => {
    steveVideo.classList.toggle('classHider');
    steveReal.classList.toggle('classHider');
  };
  
  //directly above is the function that I believe pertains mainly to the toggle...

  addRow = () => {
    const rowCount = movieTable.rows.length;
    const row = movieTable.insertRow(rowCount);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
  
    cell1.innerHTML = titlexInput.value;
    cell2.innerHTML = yearInput.value;
  
    this.resetInputValues();
  };
  //directly above is function that adds rows...

  resetInputValues = () => {
      titlexInput.value = '';
      yearInput.value = '';
      trivInput.value = '';
    
  };

  deleteRowFunc = () => {
    const rowCount = movieTable.rows.length;
    movieTable.deleteRow(rowCount - 1);
  };
  //directly above is the reset for the row adding...

  postMessage = () => {
    const comment = document.getElementById('message').value;
    const newMessage = document.createElement("P");
    newMessage.id = "messageCard"
    newMessage.innerHTML = new Date() + ": " + comment
    newMessage.onclick = deleteMessage = () => {
      newMessage.parentNode.removeChild(newMessage);
    }
    messageContainer.append(newMessage);
  }
  //directly above is the post function?