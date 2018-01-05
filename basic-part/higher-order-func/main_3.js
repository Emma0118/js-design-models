/**
 * Created by linajiema on 2018/1/5.
 */
var isType = function (type) {
    return function (obj) { //[1,2]
        return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    }
}
var isArray = isType('Array');
console.log(isArray([1,2]));