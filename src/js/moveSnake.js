var timer1;
var tool = require("./tool.js");
var bodyStop = require("./bodyStop.js");
var clearUlStyle = require("./clearUlStyle.js");
var createFood = require("./creatFood.js");
var renewSnake = require("./renewSnake.js");
var moveSnake = {
    movefunc: function() {
        speeder = tool.speed || 600;
        document.onkeydown = function(event) {
            var e = event || window.event
            var flag1 = true;
            clearInterval(timer1);
            if (e.keyCode === 38) { //上
                if (flag1) {
                    flag1 = false;
                    if (tool.ArrS[0] < 25) {
                        //蛇生成在第一行，却按了上键：
                        bodyStop();
                    } else {
                        timer1 = setInterval(function() {
                            if (tool.ArrS[0] < 25) {
                                //每次向上运动，如果判断蛇头到达第一行，却继续向上：
                                bodyStop();
                                //把已经向上的部分退回
                                tool.ArrS[0] += 25;
                                clearInterval(timer1)
                            }
                            //清除向上移动时后面样式：
                            clearUlStyle();
                            if (tool.ArrS[0] - 25 === tool.ArrF[0]) { //吃到食物：
                                tool.ArrS.unshift(tool.ArrF[0]);
                                renewSnake();
                                createFood();
                            } else {
                                //往数组前面加一个
                                tool.ArrS.unshift((tool.ArrS[0] - 25))
                                for (var i = 1; i < tool.ArrS.length; i++) {
                                    if (tool.ArrS[0] === tool.ArrS[i] && tool.ArrS.length !== 1) { //吃到自己：
                                        bodyStop();
                                        clearInterval(timer1)
                                    }
                                }
                                tool.ArrS.splice(tool.ArrS.length - 1, 1);
                                renewSnake();

                            }
                        }, speeder)
                    }
                }
            } else if (e.keyCode === 40) { //下 
                if (flag1) {
                    flag1 = false;
                    if (tool.ArrS[0] > 349) {
                        bodyStop();
                    } else {
                        timer1 = setInterval(function() {
                            if (tool.ArrS[0] > 349) {
                                bodyStop();
                                tool.ArrS[0] -= 25;
                                clearInterval(timer1)
                            }
                            clearUlStyle();
                            if (tool.ArrS[0] + 25 === tool.ArrF[0]) {
                                tool.ArrS.unshift(tool.ArrF[0]);
                                // ArrS[1] -= 25;
                                renewSnake();
                                createFood();
                            } else {
                                tool.ArrS.unshift(tool.ArrS[0] + 25);
                                for (var i = 1; i < tool.ArrS.length; i++) {
                                    if (tool.ArrS[0] === tool.ArrS[i] && tool.ArrS.length !== 1) { //吃到自己：

                                        bodyStop();
                                        clearInterval(timer1)
                                    }
                                }
                                tool.ArrS.splice(tool.ArrS.length - 1, 1);
                                renewSnake();
                            }
                        }, speeder)
                    }
                }
            } else if (e.keyCode == 37) { //左
                //左墙数组 t:
                var t = [];
                for (var i = 0; i < 15; i++) {
                    t.push(25 * i);
                }
                if (flag1) {
                    flag1 = false;
                    for (var i = 0; i < 15; i++) {
                        if (tool.ArrS[0] == t[i]) {
                            bodyStop();
                        }
                    }
                    timer1 = setInterval(function() {
                        for (var i = 0; i < 15; i++) {
                            if (tool.ArrS[0] == t[i]) {
                                bodyStop();
                                clearInterval(timer1)
                                tool.ArrS[0] += 1;
                            }
                        }
                        clearUlStyle();
                        if (tool.ArrS[0] - 1 === tool.ArrF[0]) {
                            tool.ArrS.unshift(tool.ArrF[0]);
                            renewSnake();
                            createFood();
                        } else {
                            tool.ArrS.unshift(tool.ArrS[0] - 1);
                            for (var i = 1; i < tool.ArrS.length; i++) {
                                if (tool.ArrS[0] === tool.ArrS[i] && tool.ArrS.length !== 1) {
                                    bodyStop();
                                    clearInterval(timer1)
                                }
                            }
                            tool.ArrS.splice(tool.ArrS.length - 1, 1);
                            renewSnake();
                        }
                    }, speeder)
                }
            } else if (e.keyCode == 39) { //右
                var t = [];
                for (var i = 0; i < 15; i++) {
                    t.push(24 + 25 * i);
                }
                if (flag1) {
                    flag1 = false;
                    for (var i = 0; i < 15; i++) {
                        if (tool.ArrS[0] == t[i]) {
                            bodyStop();
                        }
                    }
                    timer1 = setInterval(function() {
                        for (var i = 0; i < 15; i++) {
                            if (tool.ArrS[0] == t[i]) {
                                bodyStop();
                                clearInterval(timer1)
                                tool.ArrS[0] -= 1;
                            }
                        }
                        clearUlStyle();
                        if (tool.ArrS[0] + 1 === tool.ArrF[0]) {
                            tool.ArrS.unshift(tool.ArrF[0]);
                            renewSnake();
                            createFood();
                        } else {
                            tool.ArrS.unshift(tool.ArrS[0] + 1);
                            for (var i = 1; i < tool.ArrS.length; i++) {
                                if (tool.ArrS[0] === tool.ArrS[i] && tool.ArrS.length !== 1) {
                                    bodyStop();
                                    clearInterval(timer1)
                                }
                            }
                            tool.ArrS.splice(tool.ArrS.length - 1, 1);
                            renewSnake();
                        }
                    }, speeder)
                }

            }
        };
    }
};
module.exports = moveSnake;