var mergedPromise = function (p) {
    return new Promise((resolve, reject) => {
        p.then(resolve);
        p.catch(resolve);
    });
};

mergedPromise(Promise.resolve(0)).then(console.log);
mergedPromise(Promise.reject(1)).then(console.log);