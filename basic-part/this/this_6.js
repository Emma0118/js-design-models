/**
 * Created by linajiema on 2018/1/3.
 */
document.getElementById = (function (func) {
    return function () {
        return func.apply(document, arguments);
    }
})(document.getElementById);

var getId  = document.getElementById;
var div = getId('div1');

var testFun = function () {
    "use strict"; // in ordinary model, this is window
    console.log(this); // in strict model this is null
}
testFun.call(null);
console.log(div.id);

//most often we use apply or call to use other objects' methods rather than changing this, for instance
console.log(Math.max.apply(null, [1,2,3,4]));
