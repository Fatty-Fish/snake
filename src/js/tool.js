var tool = {
    getTag: function(str) {
        var idreg = /#\w+/;
        var classreg = /\.\w+/;
        var name;
        if (str.match(idreg)) {
            name = str.substring(1);
            return document.getElementById(name);
        } else if (str.match(classreg)) {
            name = str.substring(1);
            return document.getElementsByClassName(name)[0];
        }
    },
    ArrS: [],
    ArrF: [],
    time: 3,
    speed: null
}
module.exports = tool;