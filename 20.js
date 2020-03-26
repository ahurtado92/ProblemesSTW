const fs = require('fs');
const {StringDecoder} = require('string_decoder');
const decoder = new StringDecoder('utf8');

when = function (f){
    this.promises = [];
    this.results = {};

    this.promises.push(new Promise((resolve, reject) => {
        f (function (err, data) {
            if (err) {
                throw err;
            }

            this.results['error1'] = err;
            this.results['result1'] = decoder.write(data);

            resolve();
        });
    }));

    this.and = (function (g) {
        this.promises.push(new Promise((resolve, reject) => {
            g(function (err, data) {
                if (err) {
                    throw err;
                }

                this.results['error2'] = err;
                this.results['result2'] = decoder.write(data);

                decoder.end();
                resolve();
            });
        }));

        return this;
    });

    this.do = (function (h) {
        Promise.all(this.promises).then(() => {
            h(this.results['error1'], this.results['error2'], this.results['result1'], this.results['result2']);
        });
    });

    return this;
};

f1 = function(callback) {
    fs.readFile('a1.txt', callback)
};

f2 = function(callback) {
    fs.readFile('a2.txt', callback);
};

f3 = function(err1, err2, res1, res2) {
    console.log(res1, res2);
};

when(f1).and(f2).do(f3);