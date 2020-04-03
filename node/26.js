const fs = require('fs');

let readToPromise = function (file) {
    let basePath = './';

    return new Promise((resolve, reject) => {
        fs.readFile(basePath + file, function (err, data) {
            if (err) {
                reject(err);
            }

            resolve(data);
        });
    });
};

readToPromise("a1.txt").then(x => console.log("Contents: ", x))
    .catch(x => console.log("Error: ", x));

readToPromise("notfound.txt").then(x => console.log("Contents: ", x))
    .catch(x => console.log("Error: ", x));