/**
 * call and apply usages in Javascript
 * Created by linajiema on 2018/1/3.
 */
//1. change this: realize bind, pls go to this_bind.js
let obj1 = {
    name : 'sven'
}
let obj2 = {
    name : 'anne'
}
window.name = 'window';
let getName = function () {
    console.log(this.name);
}
getName.call(obj1);
getName.call(obj2);

document.getElementById('div1').onclick = function () {
    alert(this.id);
    let func = function () {
        alert(this.id);
    }
    func.call(this);
}

//2. use other objects' method
//2.1 use other constructor function
let A = function (name) {
    this.name = name;
}
let B = function () {
    A.apply(this, arguments);
}
B.prototype.getName = function () {
    return this.name;
}
let b = new B('Sven');;
console.log(b.getName());
