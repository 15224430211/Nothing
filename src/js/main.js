var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var g1 = context.createLinearGradient(0, 0, 100, 300);
g1.addColorStop(0, '#E55D87');
g1.addColorStop(1, '#5FC3E4');
context.fillStyle = g1;
context.fillRect(0, 0, 400, 300);


var n = 0;
var dx = 150;
var dy = 150;
var s = 100;
context.beginPath();
context.fillStyle = 'pink';
context.strokeStyle = 'rgb(0,0,100)';
var x = Math.sin(0);
var y = Math.cos(0);
var dig = Math.PI / 15 * 7;
for (var i = 0; i < 30; i++) {
    var x = Math.sin(i * dig);
    var y = Math.cos(i * dig);
    context.lineTo(dx + x * s, dy + y * s);
    console.log( x ,y )
}
context.closePath();
context.fill();
context.stroke();
