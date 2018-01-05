/**This program demonstrates the order-design model using closure
 * Created by linajiema on 2018/1/5.
 */

//1.Object-oriented without closure

var Tv = {
    open() {
        console.log('打开电视机')
    },
    close() {
        console.log('关上电视机');
    }
}

var OpenTvCommand = function (receiver) { //constructor
    this.receiver = receiver;
}
OpenTvCommand.prototype.execute = function () {
    this.receiver.open();
}
OpenTvCommand.prototype.undo = function () {
    this.receiver.close()
}

var setCommand = function (command) {
    document.getElementById('execute').onclick = function () {
        command.execute();
    }
    document.getElementById('undo').onclick = function () {
        command.undo();
    }
}

// setCommand(new OpenTvCommand(Tv));

//2. Object-oriented with closure

var Tv_2 = {
    open() {
        console.log('打开电视机')
    },
    close() {
        console.log('关上电视机');
    }
}
var createCommand = function (receiver) {
    var execute = function () {
        return receiver.open();
    }
    var undo = function () {
        return receiver.close();
    }
    return {
        execute,
        undo
    }
}
setCommand(createCommand(Tv_2));