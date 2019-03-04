var player1="";
var player2="";

var diceRoll = function () {
  return Math.floor(6*Math.random())+1;
}

function playerName(turn) {
  this.diceroll = 0;
  this.turnscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.player;
}
   
Player.prototype.rollone = function() {
  if (this.diceroll === 1) {
  this.turnscore = 0;
  alert("Sorry " + this.playerName + ", you rolled a 1!")
  } else {
  this.turnscore += this.diceroll;
  }
}
Player.prototype.hold = function () {  
    this.totalscore += this.roundtotal;
    this.turnscore = 0;
    alert(this.playerName + ", your turn is over!");
}
    
  
