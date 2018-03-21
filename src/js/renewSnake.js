var tool = require("./tool.js");
var oUl = tool.getTag("#box");
var renewSnake = function() {
    tool.ArrS.forEach(function(ele, index) {
        oUl.children[ele].style.background = "green";
        oUl.children[ele].innerText = "s";
    })
}
module.exports = renewSnake;