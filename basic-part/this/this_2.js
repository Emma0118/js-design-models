/**
 * This program demonstrates the This in Javascript
 * called as ordinary function
 * Created by linajiema on 2018/1/3.
 */
(() => {
    window.name = 'globalName';
    let myObj = {
        name : 'sven',
        getName() {
            return this.name;
        }
    }

    
    let getName = myObj.getName;
    console.log(getName()) //called as ordinary function
    // same as below
    let getGlobal = () => {
        return this.name;
    }
    console.log(getGlobal())
    
    //but different with below
    console.log(myObj.getName()); // get seven
})()