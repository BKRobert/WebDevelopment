'use strict';
const btns = document.querySelectorAll('.drum');
const w = document.querySelector('.w ');
const a = document.querySelector('.a ');
const s = document.querySelector('.s ');
const d = document.querySelector('.d ');
const j = document.querySelector('.j ');
const k = document.querySelector('.k ');
const l = document.querySelector('.l ');

let audioObj;
function playSound(key) {
  if (key === 'W') {
    audioObj = new Audio('sounds/tom-1.mp3');
    return audioObj.play();
  }
  if (key === 'A') {
    audioObj = new Audio('sounds/tom-2.mp3');
    return audioObj.play();
  }
  if (key === 'S') {
    audioObj = new Audio('sounds/tom-3.mp3');
    return audioObj.play();
  }
  if (key === 'D') {
    audioObj = new Audio('sounds/tom-4.mp3');
    return audioObj.play();
  }
  if (key === 'J') {
    audioObj = new Audio('sounds/kick-bass.mp3');
    return audioObj.play();
  }
  if (key === 'K') {
    audioObj = new Audio('sounds/crash.mp3');
    return audioObj.play();
  }
  if (key === 'L') {
    audioObj = new Audio('sounds/snare.mp3');
    return audioObj.play();
  }
}
btns.forEach(btn =>
  btn.addEventListener('keydown', function (e) {
    const k = e.keyCode;
    if (k === 87) {
      playSound('W');
    }
    if (k === 65) {
      playSound('A');
    }
    if (k === 83) {
      playSound('S');
    }
    if (k === 68) {
      playSound('D');
    }
    if (k === 74) {
      playSound('J');
    }
    if (k === 75) {
      playSound('K');
    }
    if (k === 76) {
      playSound('L');
    }
  })
);

btns.forEach(btn =>
  btn.addEventListener('click', function () {
    playSound(`${btn.textContent.toUpperCase()}`);
  })
);
