function Counter() {
    this.a = 1;
    this.notify = null;

    this.inc = function () {
        this.a++;
        if (this.notify != null) {
            this.notify(this.a);
        }
    }

    this.count = function () {
        return this.a;
    }

    this.setNotify = function (value) {
        if ((this.notify != null) && (this.notify instanceof Function)) {
            this.notify = value;
        }
    }

}

var o3 = new Counter();
o3.setNotify(function (a) {
    console.log(a);
});
o3.inc();