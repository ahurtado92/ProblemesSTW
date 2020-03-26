const fs = require('fs');

f6 = function (llista, callback) {
    let result = [];

    let readFiles = new Promise((resolve, reject) => {
        llista.forEach(function (element, index, array) {
            fs.readFile('./' + element, 'utf8', function (err, data) {
                if (err) {
                    throw err;
                }
                console.log('data: ' + data);
                result.push(data);

                if (index === array.length - 1) {
                    resolve();
                }
            });
        });
    });

    readFiles.then(() => {
        callback(result);
    });
};

f6(['a1.txt','a2.txt'],function (result) {
    console.log(result)
});
