/**
 * This program demonstrates Javascript inheritance by ES6 Class
 * Created by linajiema on 2018/1/3.
 */

class Animal {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
}

class Dog extends Animal {
    constructor(name, id) {
        super(name, id);
    }
    speak() {
        return "woof";
    }
}
let dog = new Dog('Scamp', '001');
console.log(`${dog.getName()} syas ${dog.speak()} id: ${dog.getId()}`)
