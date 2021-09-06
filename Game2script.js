const RollDice = document.querySelector('.roll-dice-button');
const Hold = document.querySelector('.hold-button');
const newGame = document.querySelector('.new-game-button');

const scoreP1 = document.querySelector('.score-player-1');
const scoreP2 = document.querySelector('.score-player-2');

const currentScoreP1 = document.querySelector('.score-current-1');
const currentScoreP2 = document.querySelector('.score-current-2');

const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');

const questionScreen = document.querySelector('.question-screen');
const questionText = document.querySelector('.question');
const question_1 = document.querySelector('.Var-1');
const question_2 = document.querySelector('.Var-2');
const question_3 = document.querySelector('.Var-3');
const question_4 = document.querySelector('.Var-4');

const MsgQuestions = document.querySelector('.winner-msg');
const BackButton = document.getElementById('backButton');

const bodyContainer = document.querySelector('.body-container');

const dice = document.querySelector('.dice');

let switchPlayer, currentScore, globalScoreP1, globalScoreP2, playing, question_playing, randomQuestion;

const questions = [
  {
    index: 1,
    question: "Cand a avut loc al doilea razboi mondial ?",
    answer1: "1992-1996",
    answer2: "1939-1944",
    answer3: "1939-1945",
    answer4: "2001-2006",
    winner: "1939-1945"
  },
  {
    index: 2,
    question: "Care este cea mai mare tara din lume ?",
    answer1: "Rusia",
    answer2: "Romania",
    answer3: "Italia",
    answer4: "Angola",
    winner: "Rusia"
  },
  {
    index: 3,
    question: "Care este cea mai populata tara din lume ?",
    answer1: "Romania",
    answer2: "Japonia",
    answer3: "China",
    answer4: "Coreea de Sud",
    winner: "China"
  },
  {
    index: 4,
    question: "La ce data s-a incheiat conflictul sau razboiul cunoscut sub numele de Primul Razboi Mondial ?",
    answer1: "11 noiembrie 1918",
    answer2: "15 decembrie 1918",
    answer3: "11 noiembrie 1818",
    answer4: "Nu se stie exact",
    winner: "11 noiembrie 1918"
  },
  {
    index: 5,
    question: "Cine a fost generalul nazistilor in al doilea razboi mondial ?",
    answer1: "Himmler",
    answer2: "Thomas Muller",
    answer3: "Podolski",
    answer4: "Adolf Hitler",
    winner: "Adolf Hitler"
  },
  {
    index: 6,
    question: "Care este cea mai mare planeta din sistemul solar ?",
    answer1: "Saturn",
    answer2: "Mercur",
    answer3: "Jupiter",
    answer4: "Terra",
    winner: "Jupiter"
  },
  {
    index: 7,
    question: "Care este cel mai rapid animal terestru ?",
    answer1: "Leul",
    answer2: "Jaguarul",
    answer3: "Ghepardul",
    answer4: "Cainele",
    winner: "Ghepardul"
  },
  {
    index: 8,
    question: "Din ce este facut coltul unui elefant ?",
    answer1: "Piatra Jad",
    answer2: "Fildes",
    answer3: "Diamant",
    answer4: "Chihlimbar",
    winner: "Fildes"
  },
  {
    index: 9,
    question: "Cine a pictat Mona Lisa ?",
    answer1: "Pablo Picasso",
    answer2: "Vincent van Gogh",
    answer3: "Galileo Galilei",
    answer4: "Leonardo Da Vinci",
    winner: "Leonardo Da Vinci"
  },
  {
    index: 10,
    question: "Care este denumirea stiintifica pentru frica de paianjeni ?",
    answer1: "Homofobie",
    answer2: "Monnofobie",
    answer3: "Arahnofobie",
    answer4: "Agorafobie",
    winner: "Arahnofobie"
  },
  {
    index: 11,
    question: "Care este denumirea ştiinţifică a „fluierului piciorului”? ?",
    answer1: "Humerus",
    answer2: "Rotula",
    answer3: "Laringe",
    answer4: "Tibia",
    winner: "Tibia"
  },
  {
    index: 12,
    question: "Care este cea mai mare pasăre de pe Pământ?",
    answer1: "Gaina",
    answer2: "Dragonul",
    answer3: "Fluturele-Adulp",
    answer4: "Strutul nord-african",
    winner: "Strutul nord-african"
  },
  {
    index: 13,
    question: "Care este cea mai mare pasăre de pe Pământ?",
    answer1: "Gaina",
    answer2: "Dragonul",
    answer3: "Fluturele-Adulp",
    answer4: "Strutul nord-african",
    winner: "Strutul nord-african"
  },
  {
    index: 14,
    question: "In ce an a castigat Steaua Bucuresti celebra Cupa Campionilor Europeni?",
    answer1: "2015",
    answer2: "1989",
    answer3: "1986",
    answer4: "Nu a castigat",
    winner: "1986"
  },
  {
    index: 15,
    question: "Cine este jucatorul cu cele mai multe baloane de aur ?",
    answer1: "Cristiano Ronaldo",
    answer2: "Zlatan Ibrahimovic",
    answer3: "Maradona",
    answer4: "Lionel Messi",
    winner: "Lionel Messi"
  },
  {
    index: 16,
    question: "Din ce țară izvorăște Dunărea ?",
    answer1: "Spania",
    answer2: "Brazilia",
    answer3: "Ucraina",
    answer4: "Germania",
    winner: "Germania"
  },
  {
    index: 17,
    question: "Câte strofe are poezia “Luceafărul” de Mihai Eminescu ?",
    answer1: "97",
    answer2: "103",
    answer3: "82",
    answer4: "98",
    winner: "98"
  },
  {
    index: 18,
    question: "Ce culoare are cutia neagră a unui avion ?",
    answer1: "Negru",
    answer2: "Albastru",
    answer3: "Portocaliu",
    answer4: "Alba",
    winner: "Portocaliu"
  },
  {
    index: 19,
    question: "Care este cel mai mare mamifer din lume ?",
    answer1: "Dinozaurul",
    answer2: "Balena Albastra",
    answer3: "Rechinul",
    answer4: "Dinozaurul",
    winner: "Balena Albastra"
  },
  {
    index: 20,
    question: "Cine a castigat Campionatul Mondial de Fotbal din 2014 ?",
    answer1: "Germania",
    answer2: "Franta",
    answer3: "Portugalia",
    answer4: "Croatia",
    winner: "Germania"
  },
  {
    index: 21,
    question: "Cine a propus teoria evolutiei ?",
    answer1: "Adolf Hitler",
    answer2: "Albert Einstein",
    answer3: "Charles Darwin",
    answer4: "Ludovic",
    winner: "Charles Darwin"
  },
  {
    index: 22,
    question: "Cu ce viteza calatoreste lumina ?",
    answer1: "350.000 km/h",
    answer2: "350.000 km/s",
    answer3: "300.000 km/h",
    answer4: "300.000 km/s",
    winner: "300.000 km/s"
  },
  {
    index: 23,
    question: "Care este cea mai apropiata galaxie din Caleea Lactee ?",
    answer1: "Sirius",
    answer2: "Soarele",
    answer3: "Alfa Centauri",
    answer4: "Andromeda",
    winner: "Andromeda"
  },
  {
    index: 24,
    question: "Unde s-a efectuat primul transplant de inima umana ?",
    answer1: "SUA",
    answer2: "Anglia",
    answer3: "Africa de Sud",
    answer4: "Germania",
    winner: "Africa de Sud"
  },
  {
    index: 25,
    question: "Din ce sunt facut virusii ?",
    answer1: "Bacterii",
    answer2: "Material genetic si proteine",
    answer3: "Saruri",
    answer4: "Bacterii hidrofobe",
    winner: "Material genetic si proteine"
  },
  {
    index: 26,
    question: "De unde provine sarbatorirea Jocurilor Olimpice ?",
    answer1: "Troia",
    answer2: "Imperiul Bizantin",
    answer3: "Grecia Antica",
    answer4: "Olympia",
    winner: "Olympia"
  },
  {
    index: 27,
    question: "Care este tara care a castigat cele mai multe Cupe Mondiale de fotbal ?",
    answer1: "Brazilia",
    answer2: "Germania",
    answer3: "Anglia",
    answer4: "Suedia",
    winner: "Brazilia"
  },
  {
    index: 28,
    question: "In ce an a ajuns Christopher Column in America ?",
    answer1: "1499",
    answer2: "1492",
    answer3: "1672",
    answer4: "2001",
    winner: "1492"
  },
  {
    index: 29,
    question: "Cine a fost primul om care a mers pe luna ?",
    answer1: "Nevill Armstrong",
    answer2: "Neil Armstrong",
    answer3: "Kennedy",
    answer4: "Augustus",
    winner: "Neil Armstrong"
  },
  {
    index: 30,
    question: "Cum se numeste steaua cea mai apropiata de Terra ?",
    answer1: "Steaua Bucuresti",
    answer2: "Andromeda",
    answer3: "Sirius",
    answer4: "Soarele",
    winner: "Soarele"
  }
];


function initialization_parameters() {
  switchPlayer = true;
  currentScore = 0;
  globalScoreP1 = 0;
  globalScoreP2 = 0;
  currentScoreP1.textContent = 0;
  currentScoreP2.textContent = 0;
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;
  leftSide.classList.remove('win');
  rightSide.classList.remove('win');
  leftSide.classList.add('active');
  rightSide.classList.remove('active');
  playing = true;
  question_playing = true;
  randomQuestion = 0;
}
initialization_parameters();


// Button -> Roll Dice

RollDice.addEventListener('click', function () {

  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    if (switchPlayer) {

      dice.classList.add('show');
      dice.src = `dice-${diceNumber}.png`;

      differentNum(diceNumber);

    } else { // Right-side player

      dice.classList.add('show');
      dice.src = `dice-${diceNumber}.png`;

      differentNum2(diceNumber);

    }
  }
});


function differentNum(diceNumber) {

  if (diceNumber !== 1) { // left-side player

    currentScore += diceNumber;
    globalScoreP1 += diceNumber;
    currentScoreP1.textContent = currentScore;

    verifyWin(globalScoreP1, switchPlayer);


  } else if (diceNumber === 1) {
    globalScoreP1 -= currentScore;
    currentScore = 0;
    dice.classList.remove('show');
    rightSide.classList.add('active');
    leftSide.classList.remove('active');
    currentScoreP1.textContent = currentScore;

    switchPlayer = false;
  }

}

function differentNum2(diceNumber) {

  if (diceNumber !== 1) { // left-side player

    currentScore += diceNumber;
    globalScoreP2 += diceNumber;
    currentScoreP2.textContent = currentScore;

    verifyWin(globalScoreP2, switchPlayer);


  } else if (diceNumber === 1) {
    globalScoreP2 -= currentScore;
    currentScore = 0;
    dice.classList.remove('show');
    rightSide.classList.remove('active');
    leftSide.classList.add('active');
    currentScoreP2.textContent = currentScore;

    switchPlayer = true;
  }

}

// Restart Button

newGame.addEventListener('click', function () {

  initialization_parameters();

});

// Verify win

function verifyWin(globalScore, switchPlayer) {

  if (switchPlayer === true && globalScore >= 250) {

    scoreP1.textContent = globalScore;
    leftSide.classList.add('win');
    playing = false;

  } else if (switchPlayer === false && globalScore >= 250) {
    scoreP2.textContent = globalScore;
    rightSide.classList.add('win');
    playing = false;
  }

};


// Button -> Hold

Hold.addEventListener('click', function () {

  if (playing) {
    if (switchPlayer === true) { // Left-side player

      //Question

      if (currentScore >= 15) {
        AnswerTheQuestion(currentScore);
      } else if (currentScore < 15) {
        currentScore = 0;
        scoreP1.textContent = globalScoreP1;
        currentScoreP1.textContent = 0;
        switchPlayer = false;
        rightSide.classList.add('active');
        leftSide.classList.remove('active');
      }


    } else if (switchPlayer === false) { // Right-side player


      //Question

      if (currentScore >= 15) {
        AnswerTheQuestion(currentScore);
      } else if (currentScore < 15) {
        currentScore = 0;
        scoreP2.textContent = globalScoreP2;
        currentScoreP2.textContent = 0;
        switchPlayer = true;
        rightSide.classList.remove('active');
        leftSide.classList.add('active');
      }

    }
  }
});


// Answer The Question

function AnswerTheQuestion(currentScore) {

  questionScreen.classList.add('active-screen');
  randomQuestion = Math.trunc(Math.random() * questions.length) + 1;
  questionText.textContent = questions[randomQuestion - 1].question;
  question_1.textContent = questions[randomQuestion - 1].answer1;
  question_2.textContent = questions[randomQuestion - 1].answer2;
  question_3.textContent = questions[randomQuestion - 1].answer3;
  question_4.textContent = questions[randomQuestion - 1].answer4;

  bodyContainer.classList.add('opacity');


  question_1.addEventListener('click', function () {
    if (question_playing === true) {
      if (question_1.textContent === questions[randomQuestion - 1].winner) {
        if (switchPlayer === true) {
          question_1.classList.add('active-color');
          question_2.classList.add('inactive');
          question_3.classList.add('inactive');
          question_4.classList.add('inactive');
          scoreP1.textContent = globalScoreP1;
          currentScoreP1.textContent = 0;
          switchPlayer = false;
          rightSide.classList.add('active');
          leftSide.classList.remove('active');
          MsgQuestions.textContent = 'Ai raspuns corect ! Pastrezi punctele';
          MsgQuestions.classList.add('winner');
        } else if (switchPlayer === false) {
          question_1.classList.add('active-color');
          question_2.classList.add('inactive');
          question_3.classList.add('inactive');
          question_4.classList.add('inactive');
          scoreP2.textContent = globalScoreP2;
          currentScoreP2.textContent = 0;
          switchPlayer = true;
          rightSide.classList.remove('active');
          leftSide.classList.add('active');
          MsgQuestions.textContent = 'Ai raspuns corect ! Pastrezi punctele';
          MsgQuestions.classList.add('winner');
        }
      } else {
        if (switchPlayer === true) {
          question_1.classList.add('inactive');
          currentScoreP1.textContent = 0;
          currentScore = 0;
          switchPlayer = false;
          rightSide.classList.add('active');
          leftSide.classList.remove('active');
          MsgQuestions.textContent = 'Ai raspuns gresit ! Pierzi punctele';
          MsgQuestions.classList.add('lose');
        } else if (switchPlayer === false) {
          question_1.classList.add('inactive');
          currentScoreP2.textContent = 0;
          currentScore = 0;
          switchPlayer = true;
          rightSide.classList.remove('active');
          leftSide.classList.add('active');
          MsgQuestions.textContent = 'Ai raspuns gresit ! Pierzi punctele';
          MsgQuestions.classList.add('lose');
        }
      }
      question_playing = false;
    }
  });




  question_2.addEventListener('click', function () {
    if (question_playing === true) {
      if (question_2.textContent === questions[randomQuestion - 1].winner) {
        if (switchPlayer === true) {
          question_2.classList.add('active-color');
          question_1.classList.add('inactive');
          question_3.classList.add('inactive');
          question_4.classList.add('inactive');
          scoreP1.textContent = globalScoreP1;
          currentScoreP1.textContent = 0;
          switchPlayer = false;
          rightSide.classList.add('active');
          leftSide.classList.remove('active');
          MsgQuestions.textContent = 'Ai raspuns corect ! Pastrezi punctele';
          MsgQuestions.classList.add('winner');
        } else if (switchPlayer === false) {
          question_2.classList.add('active-color');
          question_1.classList.add('inactive');
          question_3.classList.add('inactive');
          question_4.classList.add('inactive');
          scoreP2.textContent = globalScoreP2;
          currentScoreP2.textContent = 0;
          switchPlayer = true;
          rightSide.classList.remove('active');
          leftSide.classList.add('active');
          MsgQuestions.textContent = 'Ai raspuns corect ! Pastrezi punctele';
          MsgQuestions.classList.add('winner');
        }
      } else {
        if (switchPlayer === true) {
          question_2.classList.add('inactive');
          currentScoreP1.textContent = 0;
          currentScore = 0;
          switchPlayer = false;
          rightSide.classList.add('active');
          leftSide.classList.remove('active');
          MsgQuestions.textContent = 'Ai raspuns gresit ! Pierzi punctele';
          MsgQuestions.classList.add('lose');
        } else if (switchPlayer === false) {
          question_2.classList.add('inactive');
          currentScoreP2.textContent = 0;
          currentScore = 0;
          switchPlayer = true;
          rightSide.classList.remove('active');
          leftSide.classList.add('active');
          MsgQuestions.textContent = 'Ai raspuns gresit ! Pierzi punctele';
          MsgQuestions.classList.add('lose');
        }
      }
      question_playing = false;
    }
  });




  question_3.addEventListener('click', function () {
    if (question_playing === true) {
      if (question_3.textContent === questions[randomQuestion - 1].winner) {
        if (switchPlayer === true) {
          question_3.classList.add('active-color');
          question_1.classList.add('inactive');
          question_2.classList.add('inactive');
          question_4.classList.add('inactive');
          scoreP1.textContent = globalScoreP1;
          currentScoreP1.textContent = 0;
          switchPlayer = false;
          rightSide.classList.add('active');
          leftSide.classList.remove('active');
          MsgQuestions.textContent = 'Ai raspuns corect ! Pastrezi punctele';
          MsgQuestions.classList.add('winner');
        } else if (switchPlayer === false) {
          question_3.classList.add('active-color');
          question_1.classList.add('inactive');
          question_2.classList.add('inactive');
          question_4.classList.add('inactive');
          scoreP2.textContent = globalScoreP2;
          currentScoreP2.textContent = 0;
          switchPlayer = true;
          rightSide.classList.remove('active');
          leftSide.classList.add('active');
          MsgQuestions.textContent = 'Ai raspuns corect ! Pastrezi punctele';
          MsgQuestions.classList.add('winner');
        }
      } else {
        if (switchPlayer === true) {
          question_3.classList.add('inactive');
          currentScoreP1.textContent = 0;
          currentScore = 0;
          switchPlayer = false;
          rightSide.classList.add('active');
          leftSide.classList.remove('active');
          MsgQuestions.textContent = 'Ai raspuns gresit ! Pierzi punctele';
          MsgQuestions.classList.add('lose');
        } else if (switchPlayer === false) {
          question_3.classList.add('inactive');
          currentScoreP2.textContent = 0;
          currentScore = 0;
          switchPlayer = true;
          rightSide.classList.remove('active');
          leftSide.classList.add('active');
          MsgQuestions.textContent = 'Ai raspuns gresit ! Pierzi punctele';
          MsgQuestions.classList.add('lose');
        }
      }
      question_playing = false;
    }
  });

  question_4.addEventListener('click', function () {
    if (question_playing === true) {
      if (question_4.textContent === questions[randomQuestion - 1].winner) {
        if (switchPlayer) {
          question_4.classList.add('active-color');
          question_1.classList.add('inactive');
          question_2.classList.add('inactive');
          question_3.classList.add('inactive');
          scoreP1.textContent = globalScoreP1;
          currentScoreP1.textContent = 0;
          switchPlayer = false;
          rightSide.classList.add('active');
          leftSide.classList.remove('active');
          MsgQuestions.textContent = 'Ai raspuns corect ! Pastrezi punctele';
          MsgQuestions.classList.add('winner');
        } else {
          question_4.classList.add('active-color');
          question_1.classList.add('inactive');
          question_2.classList.add('inactive');
          question_3.classList.add('inactive');
          scoreP2.textContent = globalScoreP2;
          currentScoreP2.textContent = 0;
          switchPlayer = true;
          rightSide.classList.remove('active');
          leftSide.classList.add('active');
          MsgQuestions.textContent = 'Ai raspuns corect ! Pastrezi punctele';
          MsgQuestions.classList.add('winner');
        }
      } else {
        if (switchPlayer) {
          question_4.classList.add('inactive');
          currentScoreP1.textContent = 0;
          currentScore = 0;
          switchPlayer = false;
          rightSide.classList.add('active');
          leftSide.classList.remove('active');
          MsgQuestions.textContent = 'Ai raspuns gresit ! Pierzi punctele';
          MsgQuestions.classList.add('lose');
        } else {
          question_4.classList.add('inactive');
          currentScoreP2.textContent = 0;
          currentScore = 0;
          switchPlayer = true;
          rightSide.classList.remove('active');
          leftSide.classList.add('active');
          MsgQuestions.textContent = 'Ai raspuns gresit ! Pierzi punctele';
          MsgQuestions.classList.add('lose');
        }
      }
      question_playing = false;

    }
  });

};

BackButton.addEventListener('click', reset);

function reset() {
  question_playing = true;
  randomQuestion = 0;
  currentScore = 0;
  questionScreen.classList.remove('active-screen');
  question_1.classList.remove('active-color');
  question_2.classList.remove('active-color');
  question_3.classList.remove('active-color');
  question_4.classList.remove('active-color');
  question_1.classList.remove('inactive');
  question_2.classList.remove('inactive');
  question_3.classList.remove('inactive');
  question_4.classList.remove('inactive');
  question_1.textContent = '';
  question_2.textContent = '';
  question_3.textContent = '';
  question_4.textContent = '';
  questionText.textContent = '';
  MsgQuestions.classList.remove('lose');
  MsgQuestions.classList.remove('winner');
  MsgQuestions.textContent = '';
  bodyContainer.classList.remove('opacity');
}
