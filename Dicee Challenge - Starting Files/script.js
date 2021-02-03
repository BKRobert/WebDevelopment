'use strict';

const dice1 = document.querySelector('.img1');
const dice2 = document.querySelector('.img2');
const rollbtn = document.querySelector('.roll');
const winerText = document.querySelector('h1');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

const rolldice = function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  //console.log(randomNumber);
  return randomNumber;
};

rollbtn.addEventListener('click', function () {
  const diceRoll1 = rolldice();
  const diceRoll2 = rolldice();
  dice1.src = `images/dice${diceRoll1}.png`;
  dice2.src = `images/dice${diceRoll2}.png`;

  if (diceRoll1 > diceRoll2) {
    winerText.innerHTML = 'Player 1 Wins';
    player1.style.color = 'gold';
    player2.style.color = 'grey';
  }
  if (diceRoll1 < diceRoll2) {
    winerText.innerHTML = 'Player 2 Wins';
    player1.style.color = 'grey';
    player2.style.color = 'gold';
  }
  if (diceRoll1 === diceRoll2) {
    winerText.innerHTML = 'Tie';
    player1.style.color = 'gold';
    player2.style.color = 'gold';
  }
});
