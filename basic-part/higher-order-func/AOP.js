/**
 * Created by linajiema on 2018/1/8.
 */
Function.prototype.before = function (beforefn) {
    let _self = this; //保存原函数的引用
    return function () {
        // console.log(`_self:${_self};this:${this}`);
        beforefn.apply(this, arguments);
        return _self.apply(this, arguments); //func
    }
}
Function.prototype.after = function (afterfn) {
    let _self = this;
    return function () {
        console.log(this)
        let ret = _self.apply(this,arguments) //before 1 -> func 2
        afterfn.apply(this, arguments); // after 3
        return ret;
    }
}

var func = function () {
    console.log(2)
}

func = func.before(function () {
    console.log(1)
}).after(function () {
    console.log(3)
})

func();