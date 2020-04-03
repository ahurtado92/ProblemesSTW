let asyncComposer = function (f1, f2) {
    return function (x, f) {
        f2(x, function (error, res) {
            if (error != null) {
                throw error;
            }

            f1 (res, function (err, data) {
                if (err) {
                    throw err;
                }

                f(err, data);
            });
        });
    };
};

let f1 = function (a, callback) {
    callback(null, a + 1);
};

let f3 = asyncComposer(f1, f1);

f3 (3, function (error, result) {
    console.log(result);
});

f1 = function(a, callback) {
    callback(null, a + 1)
};

f2 = function(a, callback) {
    callback("error", "")
};

f3 = asyncComposer(f1, f2);

f3(3, function(error, result) { console.log(error, result) } )