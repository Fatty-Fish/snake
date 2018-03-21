var tool = require("./tool.js");
var managerClick = {
    managerfunc: function() {
        var oManager = tool.getTag("#manager");
        oManager.onclick = function(event) {
            var e = event || window.event;
            if (e.target === oManager.children[0]) {
                tool.speed = 150;
                oManager.children[0].innerText = "OK";
            } else if (e.target === oManager.children[1]) {
                tool.speed = 300;
                oManager.children[1].innerText = "OK";
            } else {
                tool.speed = 600;
                oManager.children[2].innerText = "OK"
            }
        }
    }
}

module.exports = managerClick;