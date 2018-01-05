/**
 * This programd shows how to use call and apply change This
 * Created by linajiema on 2018/1/3.
 */
let obj1 = {
    name : 'sven',
    getName() { //改成箭头函数后 this 指向了 window
        return this.name;
    }
}
let obj2 = {
    name : 'anne'
}

console.log(obj1.getName());
console.log(obj1.getName.call(obj2)); //this