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

function readIntoFuture(fileName) {
    let basePath = './';

    fs.readFile(basePath + fileName, 'utf8', function (err, data) {
        if (err) {
            throw err;
        }

        future = new Future(data);

    });

    return new Future();
}

future = readIntoFuture('a1.txt');

console.log(future);

setTimeout(function () {
    console.log(future);
}, 1000);