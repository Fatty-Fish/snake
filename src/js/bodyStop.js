var tool = require("./tool.js");
var oBody = tool.getTag("#body");

var bodyStop = function() {
    oBody.style.background = "#8FA";
    oBody.innerText = "Game Over"
    document.onkeydown = null;
};
module.exports = bodyStop;