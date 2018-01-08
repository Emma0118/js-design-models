/**
 * Created by linajiema on 2018/1/8.
 */
let cost_test = (function () {
    let args = [];
    return function () {
        if(arguments.length === 0) {
            let money = 0;
            for(let i = 0, l = args.length; i < l; i ++) {
                money += args[i];
            }
            return money;
        }else {
            [].push.apply(args, arguments);
            console.log(args);
        }
    }
})();

// cost_test(100);
// cost_test(200);
// console.log(cost_test());

let currying = function (fn) {
    let args = [];
    return function curFn() { //arguments 100 200
        console.log(...arguments);
        if(arguments.length === 0) {
            return fn.apply(this, args);
        }else {
            [].push.apply(args, arguments);
            return curFn //避免使用 callee, 给当前arguments的函数一个名字
        }
    }
}
let cost = (function () {
    let money = 0;
    
    return function () {
        for(let i = 0, l = arguments.length; i < l; i ++) {
            money += arguments[i];
        }
        return money;
    }
})()
let cost_new = currying(cost);
cost_new(100);
cost_new(200);
console.log(cost_new());