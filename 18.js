const fs = require('fs');

var asyncToEnhancedFuture = function (f) {
    return (fileName) => {

        var callback = null;

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
};

readIntoEnhancedFuture = asyncToEnhancedFuture(fs.readFile);
enhancedFuture = readIntoEnhancedFuture('a1.txt');
enhancedFuture.registerCallback(function (ef) { console.log(ef) });

