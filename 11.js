function asyncMap (list, f, callback2) {
    //...
}

asyncMap(['a1.txt'], fs.readFile, function (a, b) {
    console.log(b);
});