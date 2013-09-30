function Player(){ //class  Player
}

Player.prototype.picks = function(pick) //Player.picks
{
  this.pick = pick;
}
function Game(player1,player2){ //def initialize Game with instance vars
  this.player1 =player1; //@player = player
  this.player2 =player2;

}
var PAIRS ={
rock: {beats: 'scissors'},
paper: {beats: 'rock'},
scissors: {beats: 'paper'}
}

Game.prototype.winner =function(){ //Game.winner
  // return this.player1;
  if (PAIRS[this.player1.pick]['beats' //no symbols exists
      ]==this.player2.pick) {
      return this.player1
  }
  else {
    return this.player2 
  }
}
