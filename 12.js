var O = function () {
    this.count = 0;
    this.notify = null;

    this.inc = function () {
        this.count++;

        if ((this.notify != null) && (this.notify instanceof Function)) {
            this.notify(this.count);
        }
    };
};

o1 = new O();

o1.count = 1;
o1.notify = function (a) {
    console.log(a);
};

o1.inc();