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

class DecreasingCounter extends Counter {
   inc = (function () {
        this.a--;
        if ((this.notify != null) && (this.notify instanceof Function)) {
            this.notify(this.a);
        }
    });
}

var dc = new DecreasingCounter();
dc.setNotify(function (a) {
    console.log(a);
});
dc.inc();
