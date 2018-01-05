/**callback in other instances
 * Created by linajiema on 2018/1/5.
 */

//need: create 100 divs, and hide them
    //1.
var appendDiv = function () {
    for(var i = 0; i < 100; i ++) {
        var div = document.createElement('div');
        div.innerHTML = i;
        document.body.appendChild(div);
        div.style.display = 'none'; //it is not good the set display as 'none' for it is not always applied.
    }
}
// appendDiv();
//2. improve variability based on 1.
var appendDiv_2 = function (callback) {
    for(var i = 0; i < 2; i ++) {
        var div = document.createElement('div');
        div.innerHTML = i;
        document.body.appendChild(div);
        if(callback instanceof Function) {
            callback(div);
        }
    }
}
appendDiv_2(function (node) {
    node.style.color = 'red';
});