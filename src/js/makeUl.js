var tool = require("./tool.js");
var oUl = tool.getTag("#box");
var makeUl = function() {
    var liStr = "";
    for (var i = 0; i < 375; i++) {
        liStr += "<li></li>";
    }
    oUl.innerHTML = liStr;
}
module.exports = makeUl;