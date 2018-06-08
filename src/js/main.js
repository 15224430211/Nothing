var canvas = document.getElementById('fucking');
var context = canvas.getContext("2d");
// context.fillRect(0,0,100,50);
// context.strokeStyle="blue";
// context.strokeRect(110,0,100,50);
// context.clearRect(0,0,50,10);
var drawCircle = function() {
    context.beginPath();
    context.arc(150, 100, radius, 0, Math.PI * 2);
    context.closePath();
    context.lineWidth = 2; //线条宽度
    context.strokeStyle = 'rgba(250,250,50,1)'; //颜色
    context.stroke();
    radius += 0.5; //每一帧半径增加0.5

    //半径radius大于30时，重置为0
    if (radius > 30) {
        radius = 0;
    }
};