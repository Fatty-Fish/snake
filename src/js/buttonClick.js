var tool = require("./tool.js");
var createSnake = require("./creatSnake.js");
var createFood = require("./creatFood.js");
var oButton = tool.getTag("#button");
var oManager = tool.getTag("#manager");
var oBody = tool.getTag("#body");
var oCover = tool.getTag(".cover");
var oTimer = tool.getTag(".timer");
var moveSnake = require("./moveSnake.js");
var timer;
var btnClick = {
    btnfunc: function() {
        oButton.onclick = function() {
            oBody.style.background = "white";
            oCover.style.display = "none";
            oManager.style.display = "none";
            this.style.display = "none";
            createSnake();
            createFood();
            timer = setInterval(function() {
                oTimer.innerText = --tool.time;
                if (tool.time === 0) {
                    clearInterval(timer)
                    oTimer.innerText = "Fighting!"
                    moveSnake.movefunc();
                }
            }, 1000)
        }
    }
}
module.exports = btnClick;