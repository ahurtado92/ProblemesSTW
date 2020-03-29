const fs = require('fs');
const {StringDecoder} = require('string_decoder');
const decoder = new StringDecoder('utf8');

function asyncToEnhancedFuture(action) {
    let registeredCallback = null;
    let enhancedFuture = {
        isDone: false,
        result: null,
        registerCallback: (callback) => {
            if (enhancedFuture.isDone) {
                callback(enhancedFuture);
            } else {
                registeredCallback = callback;
            }
        }
    };
    return (args) => {
        action(args, (error, result) => {
            enhancedFuture.isDone = true;
            enhancedFuture.result = decoder.write(result);

            if (registeredCallback !== null) {
                registeredCallback(enhancedFuture);
            }

            decoder.end();
        });
        return enhancedFuture;
    };
}

// Test the thing...
let readIntoEnhancedFuture = asyncToEnhancedFuture(fs.readFile);
let enhancedFuture = readIntoEnhancedFuture('a1.txt');
enhancedFuture.registerCallback(function(ef) {
    console.log(ef);
});