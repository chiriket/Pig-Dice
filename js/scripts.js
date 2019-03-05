
$(document).ready(function(){
    $("form#playerName").submit(function(event){
      event.preventDefault();
      var player1Name = $("#Player1").val();
      var player2Name = $("#Player2").val();
       $("#player1Name").text(player1Name);
       $("#player2Name").text(player2Name);Game
    });
     
 
function Player(name, score1, score2, score3) {
  this.playerName = name;
  this.dieScore = score1;
  this.turnScore = score2;
  this.totalScore = score3;
}

var dieRoll1 = 0;
var turnScore1 = 0;
var totalScore1 = 0;

var dieRoll2 = 0;
var turnScore2 = 0;
var totalScore2 = 0;

function rollDice(){
return (Math.floor(Math.random()*6)+1);
};

$("#roll1").click(function() {
 diceRoll1= rollDice();
turnScore1 += diceRoll1;
$("#diceRoll1").text(diceRoll1);
$("#turnScore1").text(turnScore1);
score1(diceRoll1);
});

if (totalScore1 >= 100) {
  alert(this.player1Name + " You win!");
 }
    
$("#roll2").click(function(){
diceRoll2 = rollDice();
turnScore2 += diceRoll2;
  $("#diceRoll2").text(diceRoll2);
$("#turnScore2").text(turnScore2);
totalScore2 += turnScore2;
score2(dieRoll2);
});

if (totalScore2 >= 100) {
  alert(this.player2Name + " You win!");
 }

$("#hold1").click(function(){
$(document.getElementById("hold1").disabled = true);
$(document.getElementById("roll1").disabled = true);
$(document.getElementById("hold2").disabled = false);
$(document.getElementById("roll2").disabled = false);
totalScore1 += turnScore1;
turnScore1 -= turnScore1;
$("#totalScore1").text(totalScore1);
});

$("#hold2").click(function(){
  $(document.getElementById("hold2").disabled = true);
  $(document.getElementById("roll2").disabled = true);
  $(document.getElementById("hold1").disabled = false);
  $(document.getElementById("roll1").disabled = false);
  totalScore2 += turnScore2;
  turnScore2 -= turnScore2;
  
  });
});

   
 
  



  




  




    
  
