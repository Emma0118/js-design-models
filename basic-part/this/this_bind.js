/**Create a bind function by apply
 * Created by linajiema on 2018/1/3.
 */
Function.prototype.bind = function (context) {
    let self = this;
    console.log(self);
    return function () {
        return self.apply(context, arguments);
    }
}
let obj = {
    name : 'emma'
}

let func = function () {
    console.log(this.name)
}.bind(obj)

func();