let functionPromiseComposer = (function (f1, f2) {
    return (function (x) {
        return new Promise((resolve, reject) => {
            f2(x).then((result) => {
                f1(result).then((result) => {
                    resolve(result);
                }).catch((result) => {
                    reject(result);
                });
            }).catch((result) => {
                reject(result);
            });
        });
    });
});

let f1 = x => new Promise((resolve, reject) => resolve(x+1));
functionPromiseComposer(f1, f1)(3).then(console.log);

let f3 = x => new Promise((resolve, reject) => reject('always fails'));
functionPromiseComposer(f1, f3)(3).catch(console.log);