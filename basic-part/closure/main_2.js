/**
 * use closure to cache result
 * Created by linajiema on 2018/1/4.
 */

var mult = function () {
    var a = 1;
    for(var i = 0; i < arguments.length; i ++) {
        a *= arguments[i]
    }
    return a;
}
// console.log(mult(2,9));
//closure in practice
//1. set cache
var cache = {};
var mult_1 = function () {
    var args = Array.prototype.join.call(arguments, ',');
    if(cache[args]) {
        return cache[args];
    }
    var a = 1;
    for(var i = 0; i < arguments.length; i ++) {
        a *= arguments[i];
    }
    return cache[args] = a;
}
// console.log(mult_1(4,5));

//2.refine 1 by closure
var mult_2 = (function () {
    var cache = {}; // it is always good practice to keep variables in a function to avoid making global variables
    var calculate = function () { //use closure to keep independent method in a function, by doing this, we can change this method without making influence to the main function
        var a  = 1;
        for(var i = 0; i < arguments.length; i ++) {
            a *= arguments[i];
        }
        return a;
    }
    return function () {
        var args = Array.prototype.join.call(arguments, ',');
        if(cache[args]) {
            return cache[args];
        }
        return cache[args] = calculate.apply(null, arguments);
    }
})();
console.log(mult_2(7,8,5))