const fs = require('fs');

let Future = (function (result) {
    this.result = result || null;
    this.isDone = this.result != null;

    return {
        isDone: this.isDone,
        result: this.result,
    };
});

let future = new Future();

function asyncToFuture(f) {
    return function (fileName) {
        f(fileName, function (err, data) {
            if (err) {
                throw err;
            }

            future = new Future(data);
        });
        return new Future();
    }
}

let readIntoFuture2 = asyncToFuture(fs.stat);
future = readIntoFuture2('a1.txt');
setTimeout(function () {
    console.log(future);
}, 1000);