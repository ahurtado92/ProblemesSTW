let antipromise = function (promise) {
    return new Promise((resolve, reject) => {
        promise.then((data) => {
            reject(data + ' then rejected!');
        }).catch((data) => resolve(data + ' then accepted!'));
    });
};

antipromise(Promise.reject('Rejected')).then(console.log);
antipromise(Promise.resolve('Accepted')).catch(console.log);