/**This program demonstrates the inheritance in Javascript which is based on prototype
 * Created by linajiema on 2018/1/3.
 */

(() => {
    // a clone of Object.prototype
    //all data are object
    let obj1 = {};
    console.log(Object.getPrototypeOf(obj1) === Object.prototype); // a.__proto__ === Object.prototype
    
    //creating an object by cloning an object, specifically by New in Javascript
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function() {
        return this.name;
    }
    
    let a = new Person('sven');
    console.log(a.name);
    var  name = a.getName();
    console.log(name);
    console.log(Object.getPrototypeOf(a) === Person.prototype)
    
})()