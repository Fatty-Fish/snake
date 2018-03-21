var tool = require("./tool.js");
var oUl = tool.getTag("#box");
var creatSnake = function() {
    var snake = parseInt(Math.random() * 374);
    tool.ArrS.push(snake);
    var arrow = oUl.children[tool.ArrS[0]];
    arrow.style.background = "green";
    arrow.innerText = "s";
};
module.exports = creatSnake;