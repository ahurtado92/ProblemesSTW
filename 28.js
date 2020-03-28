const fs = require('fs');

var enhancedFutureToPromise = function () {
    return new Promise(
        (resolve, reject) => {
            enhancedFuture.registerCallback(ef => {
                resolve(ef.result);
            })
        }
    );
}

var asyncToEnhancedFuture = function (f) {
    return (fileName) => {

        let callback = null;

        var resFuture = {
            isDone: false,
            result: null,
            registerCallback: function (p) {
                if (resFuture.isDone){
                    p(resFuture);
                } else {
                    callback = p;
                }
            }
        };

        f(fileName, (err, data) => {
            resFuture.result = data;
            resFuture.isDone = true;
            if (callback !== null){
                callback(resFuture);
            }
        });

        return resFuture;
    }
}

readIntoEnhancedFuture = asyncToEnhancedFuture(fs.readFile);
var enhancedFuture = readIntoEnhancedFuture('a1.txt');
var promise = enhancedFutureToPromise(enhancedFuture);
promise.then(console.log);