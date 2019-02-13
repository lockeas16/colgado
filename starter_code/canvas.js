function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  // limpiar tablero
  this.ctx.clearRect(0,0,1200,800);
};

HangmanCanvas.prototype.drawLines = function () {

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {
  this.ctx.lineWidth = 10;

  switch (shape) {
    case 9:
      this.ctx.beginPath();
      this.ctx.moveTo(100,750);
      this.ctx.lineTo(300,750);
      this.ctx.lineTo(200,650);
      this.ctx.lineTo(100,750);
      this.ctx.stroke();
      break;
    case 8:
      this.ctx.beginPath();
      this.ctx.moveTo(200,650);
      this.ctx.lineTo(200,100);
      this.ctx.stroke();
      break;
    case 7:
      this.ctx.beginPath();
      this.ctx.moveTo(200,100);
      this.ctx.lineTo(600,100);
      this.ctx.stroke();
      break;

    case 6:
      this.ctx.beginPath();
      this.ctx.moveTo(600,100);
      this.ctx.lineTo(600,200);
      this.ctx.stroke();
      break;
    case 5:
      this.ctx.beginPath();
      this.ctx.arc(600,250,50,0,Math.PI*2);
      this.ctx.stroke();
      break;

    case 4:
      this.ctx.beginPath();
      this.ctx.moveTo(600,300);
      this.ctx.lineTo(600,500);
      this.ctx.stroke();
      break;

    case 3:
      this.ctx.beginPath();
      this.ctx.moveTo(600,350);
      this.ctx.lineTo(500,400);
      this.ctx.stroke();
      break;

    case 2:
      this.ctx.beginPath();
      this.ctx.moveTo(600,350);
      this.ctx.lineTo(700,400);
      this.ctx.stroke();
      break;

    case 1:
      this.ctx.beginPath();
      this.ctx.moveTo(600,500);
      this.ctx.lineTo(500,550);
      this.ctx.stroke();
      break;

    case 0:
      this.ctx.beginPath();
      this.ctx.moveTo(600,500);
      this.ctx.lineTo(700,550);
      this.ctx.stroke();
      break;

    default:
      break;
  }
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};

let hangman = new Hangman();
hangman.secretWord = hangman.getWord();
let canvas = new HangmanCanvas(hangman.secretWord);

document.getElementById('start-game-button').onclick = function () {
  canvas.createBoard();
  canvas.drawHangman();
};

document.addEventListener("keydown", event =>{
  console.log(event.keyCode);
  console.log(hangman.checkIfLetter(event.keyCode));
  console.log(hangman.checkClickedLetters(event.key));
});