let mergedPromise = function (p) {
    return new Promise((resolve) => {
        p.then((data) => {
            resolve(data);
        }).catch((data) => {
            resolve(data);
        });
    });
};

mergedPromise(Promise.resolve(0)).then(console.log);
mergedPromise(Promise.reject(1)).then(console.log);