(function(){
	var self.Board = function(width, height){
		this.width = width;
		this.height = height;
		this.playing = false;
		this.game_over = false;
		this.bars = [];
		this.ball = null;
	}

	self.Board.prototype = {
		get elements(){
			var elements = this.bars;
			elements.push(ball);
			return elements;
		}
	}
})();

(function(){
	self.BoardView = function(canvas, board){
		this.canvas = canvas;
		this.canvas.width = board.width;
		this.canvas.height = board.height;
		this.contexto = canvas.getContext("2d");
		}
})

window.addEventListener("Load", main);

function main(){
	var boar = new Board(800, 400);
	var canvas = document.getElementById('canvas', board);
	var boar_view = new BoardView();
}