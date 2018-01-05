/**
 * Created by linajiema on 2018/1/5.
 */
var getSingle = function (fn) {
    var ret;
    return function () {
        return ret || (ret = fn.apply(this, arguments));
    }
}
var getScript = getSingle(function () {
    return document.createElement('script');
})

var script1 = getScript();