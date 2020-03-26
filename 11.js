const fs = require('fs');
const {StringDecoder} = require('string_decoder');
const decoder = new StringDecoder('utf8');

function asyncMap (list, f, callback2) {
    let basePath = './';
    let resultList = [];
    let err = null;
    //...
    let map = new Promise((resolve, reject) => {

        list.map((fileName, index, array) => {f(basePath + fileName, function (err, result) {
            if (err != null) {
                callback2(err, resultList);
                throw err;
            }

            resultList[index] = decoder.write(result);

            if (index === array.length - 1) {
                decoder.end();
                resolve({'err' : err, 'resultList' : resultList});
            }
        })});
    });

    map.then((vector) => {
        callback2(vector['err'], vector['resultList']);
    });
}

asyncMap(['a1.txt'], fs.readFile, function (a, b) {
    console.log(b);
});