var tool = require("./tool.js");
var oUl = tool.getTag("#box");

function find() {
    var food = parseInt(Math.random() * 374);
    for (var ele in tool.ArrS) {
        if (tool.ArrS[ele] === food) {
            console.log(999)
            return find();
        }
    };
    return food;
}
var creatFood = function() {
    var food = find();
    tool.ArrF = [];
    tool.ArrF.push(food);
    var target = oUl.children[food];
    target.style.background = "blue";
    target.innerText = "f";
};
module.exports = creatFood;