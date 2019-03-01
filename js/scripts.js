var player1="";
var player2="";

var diceRoll = function () {
  return Math.floor(6*Math.random())+1;
}

function Player(turn) {
  this.roll = 0;
  this.roundtotal = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}


Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
  // this.changeturn();
  } else {
  this.tempscore += this.roll;
  }
}
