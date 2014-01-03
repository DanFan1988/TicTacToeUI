(function(root) {
  var TTT = root.TTT = ( root.TTT || {} );

  var TTTUI = TTT.TTTUI = function(game){
    this.game = game;
  }

  TTTUI.parsePos = function(num) {
    var positions = [[0,0], [0,1], [0,2],
                     [1,0], [1,1], [1,2],
                     [2,0], [2,1], [2,2]];

    return positions[parseInt(num) - 1];
  };


  TTTUI.prototype.handleClick = function(event) {
    var pos = TTTUI.parsePos(event.target.id);
    $(".status").text(this.game.player + "'s turn.")

    if (this.game.valid(pos)){
      $(event.target).attr('data-mark', this.game.player)
      this.game.move(pos)
    }

    if (this.game.winner()) {
      console.log("winner!")
      $(".status").text(this.game.player + " wins!")
    }
  };



})(this)

$(function () {
  var UI = new TTT.TTTUI(new TTT.Game());
  $(".tile").on("click", UI.handleClick.bind(UI));
})