var tool = require("./tool.js");
var oUl = tool.getTag("#box");
var clearUlStyle = function() {
    for (var i = 0; i < 375; i++) {
        if (i === tool.ArrF[0]) {
            continue;
        }
        oUl.children[i].style.background = "";
        oUl.children[i].innerText = "";
    }
};
module.exports = clearUlStyle;