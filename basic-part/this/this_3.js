/**
 * This program demonstrates the This in an example
 * Created by linajiema on 2018/1/3.
 */
(() => {
    window.id = 'window';
    document.getElementById('div1').onclick =  function() {
        console.log(this.id);
        let that = this;
        let callback = () => { // 箭头函数， this指向了 div
            console.log(this.id);
        }
        callback();
    }
})()


