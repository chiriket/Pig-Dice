$(document).ready(function(){
 $("form#playerName").submit(function(event){
   event.preventDefault();
   var player1Name = $("input#Player1").val();
   var player2Name = $("input#Player2").val();
    $("#player1Name").text(player1Name);
    $("#player2Name").text(player2Name);
  })
  
  function player(turn) {
    this.diceroll = 0;
    this.turnscore = 0;
    this.totalscore = 0;
    this.turn = turn;
    this.playerName;
  }

  $(".diceroll").click(function player1() {
    var diceroll = Math.floor(Math.random() * 6) + 1;
    parseInt($(".totalscore").text(diceRoll));
  }


  




    
  
