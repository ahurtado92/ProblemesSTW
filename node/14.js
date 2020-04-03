function Counter() {
    this.a = 1;
    this.notify = 1;

    this.inc = (function () {
        this.a++;
        if ((this.notify != null) && (this.notify instanceof Function)) {
            this.notify(this.a);
        }
    });

    this.count = (function () {
        return this.a;
    });

    this.setNotify = (function (value) {
        if (value instanceof Function) {
            this.notify = value;
        }
    });

}

let o3 = new Counter();
o3.setNotify(function (a) {
    console.log(a);
});
o3.inc();
