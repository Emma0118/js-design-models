/**
 * This program demonstrates the This in Javascript
 * called as function in object
 * Created by linajiema on 2018/1/3.
 */

(() => {
    let obj = {
        a : 1,
        getA() {
            alert(this === obj);
            alert(this.a);
        }
    }
    obj.getA();
})()