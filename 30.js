

var functionPromiseComposer = function(f1, f2) {
    var f3 = function (x) {
        return f2(x).then(f1);
    }
}

var f1 = x => new Promise((resolve, reject) => resolve(x+1));
functionPromiseComposer(f1, f1);