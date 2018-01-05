/**
 * This program demonstrates the use in Constructor
 * Created by linajiema on 2018/1/3.
 */

let myClass = function () {
    this.name = 'sven';
    return {
        name : 'anne' //显式得返回一个object类型对象 改变了 obj.name
    }
}
let obj = new myClass();
console.log(obj.name) //
