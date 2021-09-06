const cells = Array.from(document.querySelectorAll('.cell'));
const playerTurn = document.querySelector('.player--1');
const displayWhoWin = document.querySelector('.player--win');
const ResetButton = document.getElementById('resetButton');
const XScore = document.querySelector('.X-score');
const OScore = document.querySelector('.O-score');
const DrawScore = document.querySelector('.Draw');

const COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const X_SELECTED = 'X';
const O_SELECTED = 'O';

let X_Win = 0;
let O_Win = 0;
let Draw = 0;

let whoTurn = true;

let continueGame = true;


cells.forEach(cell => {
  cell.addEventListener('click', cellClicked);
});


function cellClicked(e) {
  if (continueGame) {
    const cell = e.target;
    const currentSigned = whoTurn ? X_SELECTED : O_SELECTED;

    placeMark(cell, currentSigned);

    changeMark();

    if (WinCheck(currentSigned)) {

      if (currentSigned === 'X') {
        X_Win++;
        displayWhoWin.innerText = (`Player ${currentSigned}'s winner !!!`);
        displayWhoWin.classList.add(currentSigned);
        XScore.innerText = (`X - ${X_Win}`);
      } else {
        O_Win++;
        displayWhoWin.innerText = (`Player ${currentSigned}'s winner !!!`);
        displayWhoWin.classList.add(currentSigned);
        OScore.innerText = (`O - ${O_Win}`);
      }

      continueGame = false;

    } else if (isDraw()) {
      Draw++;
      displayWhoWin.innerText = (`Draw !!!`);
      displayWhoWin.classList.add('draw');
      DrawScore.innerText = (`Draw - ${Draw}`);
      continueGame = false;
    }
  }
};


// Place Mark

function placeMark(cell, currentSigned) {
  cell.innerText = currentSigned;
  if (currentSigned === 'X') {
    cell.classList.add(currentSigned);
    cell.classList.add('blocked');
    playerTurn.classList.remove('player--1');
    playerTurn.classList.add('player--2');
  } else if (currentSigned === 'O') {
    cell.classList.add(currentSigned);
    cell.classList.add('blocked');
    playerTurn.classList.remove('player--2');
    playerTurn.classList.add('player--1');
  }
};

//Change Mark

function changeMark() {
  whoTurn = !whoTurn;
}

// Win Check

function WinCheck(currentSigned) {
  return COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cells[index].classList.contains(currentSigned);
    })
  })
};

// Draw Check

function isDraw() {
  return [...cells].every(cell => {
    return cell.classList.contains(X_SELECTED) || cell.classList.contains(O_SELECTED);
  });
};


// Reset Game

ResetButton.addEventListener('click', ResetGame);

function ResetGame() {

  whoTurn = true;
  continueGame = true;

  cells.forEach(cell => {
    cell.classList.remove(X_SELECTED);
    cell.classList.remove(O_SELECTED);
    cell.classList.remove('blocked');
    playerTurn.classList.remove('player--2');
    playerTurn.classList.add('player--1');
    cell.innerText = ('');
  });
};