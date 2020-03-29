const fs = require('fs');
const {StringDecoder} = require('string_decoder');
const decoder = new StringDecoder('utf8');

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

        let resFuture = {
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
            resFuture.result = decoder.write(data);
            resFuture.isDone = true;
            if (callback !== null){
                callback(resFuture);
            }

            decoder.end();
        });

        return resFuture;
    }
}

readIntoEnhancedFuture = asyncToEnhancedFuture(fs.readFile);
let enhancedFuture = readIntoEnhancedFuture('a1.txt');
let promise = enhancedFutureToPromise(enhancedFuture);
promise.then(console.log);