
$(document).ready(function(){
    $("form#playerName").submit(function(event){
      event.preventDefault();
      var player1Name = $("#Player1").val();
      var player2Name = $("#Player2").val();
       $("#player1Name").text(player1Name);
       $("#player2Name").text(player2Name);
     });
  
     
function Player(name) {
 this.diceroll = 0;
 this.turnScore =0;
 this.totalScore =0;
 this.playerName;
  }
    
function rollDice(){
return (Math.floor(Math.random()*6)+1);
};

$("#roll1").click(function() {
 diceScore1= rollDice();
  turnScore1 += diceScore1;
  $("#diceScore1").text(diceScore1);
$("#turnScore1").text(turnScore1);
});
    
$("#roll2").click(function(){
   diceScore2 = rollDice();
   turnScore2 += dieScore2;
  $("#diceScore2").text(diceScore2);
$("#turnScore2").text(turnScore2);
});

if (totalScore1 >= 100) {
  alert(this.player1Name + " You win!");
 }

if (totalScore >= 100) {
  alert(this.player1Name + " You win!");
 }

  

$("#hold1").click(function(){
$(document.getElementById("Hold1").disabled = true);
$(document.getElementById("roll1").disabled = true);
$(document.getElementById("Hold2").disabled = false);
    $(document.getElementById("roll2").disabled = false);
    totalScore1 += turnScore1;
    turnScore1 -= turnScore1;
    $("#totalScore1").text(totalScore1);

    
  });

  $("#Hold2").click(function(){
    $(document.getElementById("Hold2").disabled = true);
    $(document.getElementById("roll2").disabled = true);
    $(document.getElementById("Hold1").disabled = false);
    $(document.getElementById("roll1").disabled = false);
    totalScore2 += turnScore2;
    turnScore2 -= turnScore2;
  
  });
});

   
 
  



  




  




    
  
