function getRandomColor() {
    var rgb = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    return rgb;
}

var btn_one = document.querySelector(".menu-button");
var Divs = document.querySelectorAll(".menu-button");
btn_one.onclick = function () {
    for (var i = 0; i < Divs.length; i++) {
        Divs[i].style.backgroundColor = getRandomColor();
    }
};

