const fs = require('fs');

when = function (f1){
    if (!(this instanceof when)) return new when(f1);
    this.do = function (f2) {
        f1(f2);
    }
}

var f1 = function (callback) { fs.readFile('a1.txt', callback) }
var f2 = function (error, result) { console.log(result.toString()) }

when(f1).do(f2);