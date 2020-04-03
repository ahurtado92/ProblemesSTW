let parallelPromise = function (p1, p2) {
    return new Promise((resolve, reject) => {
        let rp1;
        let rp2;
        let halfWay = false;

        p1.then(x => {
            rp1 = x;
            if (halfWay) {
                resolve([rp1, rp2]);
            } else {
                halfWay = true;
            }
        });

        p2.then(x => {
            rp2 = x;
            if (halfWay) {
                resolve([rp1, rp2]);
            } else {
                halfWay = true;
            }
        });
    });
};

let p2 = parallelPromise(Promise.resolve(0), Promise.resolve(1));
p2.then(console.log);