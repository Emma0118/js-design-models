/**
 * This program demonstrates the closure and its use in Javascript
 * Created by linajiema on 2018/1/4.
 */
var nodes = document.getElementsByTagName('div');

for(let i = 0; i < nodes.length; i++) {
    nodes[i].onclick = function () {
        alert(i);
    }
}

var Type = {};
for(var i = 0, type; type = ['String', 'Array', 'Number'][i ++]; ){
    (function (type) {
        Type['is' + type] = function (obj) {
            console.log(Object.prototype.toString.call(obj));
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        }
    })(type)
}
console.log(Type.isArray([]));
console.log(Type.isString('str'));