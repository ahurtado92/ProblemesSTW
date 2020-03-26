var o2 = (function () {
    var count = 1;
    var notify = null;
    return {
        inc: function () {
            count++;

            if (notify != null) {
                notify(count);
            }
        },
        count: function () {
            return count;
        },
        setNotify(value) {
            if (value instanceof Function) {
                notify = value;
            }
        }
    };
})();

o2.setNotify(function (a) {
    console.log(a);
});
o2.inc();