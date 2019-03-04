var player1="";
var player2="";

var diceRoll = function () {
  return Math.floor(6*Math.random())+1;
}

function Player(turn) {
  this.diceroll = 0;
  this.roundtotal = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}


Player.prototype.rollone = function() {
  if (this.diceroll === 1) {
  this.roundtotal = 0;
  alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
  } else {
  this.roundtotal += this.diceroll;
  }
}
Player.prototype.hold = function () {
    this.totalscore += this.roundtotal;
    this.roundtotal = 0;
    alert(this.playerName + ", your turn is over!");
  
