var canvas = document.getElementById("matrix"),ctx = canvas.getContext("2d");
matrix.setX(0)
matrix.setW(ww)
matrix.setH(wh)
matrix.zIndex = '-1'
var cw = ww, ch = wh;

const fontSize = 15, maxAplha = 1000, events = 6, decrement=1.07;

var matrix = [];

ctx.fillRect(0,0,cw,ch);

for(var i = 0; i < cw/fontSize;i++){
	let line = [];
	for(var j = 0; j < ch/(fontSize);j++){
		line.push(0);
	}
	matrix.push(line);
}

ctx.fillStyle = "#42c920";

ctx.font = fontSize+"px Courier";

function render() {
	ctx.fillStyle = "#000";
	ctx.globalAlpha = 1;
	ctx.fillRect(0,0,cw,ch);
	ctx.fillStyle = "#42c920";
	for (var i = matrix.length - 1; i >= 0; i--) {
		for (var j = matrix[0].length - 1; j>= 0; j--) {
			ctx.globalAlpha = matrix[i][j]/maxAplha;
			ctx.fillText(String.fromCharCode((Math.floor(Math.random()*256))),i*fontSize,j*(fontSize));
		}
	}
}

function update() {
	for (var i = events; i >= 0; i--) {
		matrix[Math.floor(Math.random()*matrix.length)][0] = (maxAplha/2) + Math.floor(Math.random()*(maxAplha/2));
	}
	for (var i = matrix.length - 1; i >= 0; i--) {
		matrix[i][0]/=decrement;
	}
	for (var i = matrix.length - 1; i >= 0; i--) {
		for (var j = matrix[0].length - 1; j > 0; j--) {
			matrix[i][j] = matrix[i][j-1]/decrement;
		}
	}
}

setInterval( function () {
	update();
	render();
},30)

