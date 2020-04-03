let promiseBarrier = function(n) {
	let list = [];
	let functions = [];
	let counter = 0;
	let params = [];

	for(let i=0; i<n; i++) {
		list[i] = function(x1) { // f1, f2, f3
			counter++;

			return new Promise((resolve, reject) => {
				//resolve(x1); 
				functions[i] = resolve;
				params[i] = x1;

				// (2)
				if(counter === n) {
					for (let j=0; j<n; j++){
						let r = functions[j];
						r(params[j]);
					}
				}
			});
		};
	}

	return list;
};

var [f1, f2] = promiseBarrier(2);
Promise.resolve(0)
	.then(x => { console.log("c1 s1"); return x; })
	.then(x => { console.log("c1 s2"); return x; })
	.then(x => { console.log("c1 s3"); return x; })
	.then(x => { console.log("c1 s4"); return x; })
	.then(f1);
Promise.resolve(0)
	.then(f2)
	.then(x => { console.log("c2 s1"); return x; })
	.then(x => { console.log("c2 s2"); return x; });

var [f1, f2, f3] = promiseBarrier(3);
Promise.resolve(0)
	.then(x => { console.log("c1 s1"); return x; })
	.then(x => { console.log("c1 s2"); return x; })
	.then(x => { console.log("c1 s3"); return x; })
	.then(f1)
	.then(x => { console.log("c1 s4"); return x; });
Promise.resolve(0)
	.then(x => { console.log("c2 s1"); return x; })
	.then(f2)
	.then(x => { console.log("c2 s2"); return x; });
Promise.resolve(0)
	.then(f3)
	.then(x => { console.log("c3 s1"); return x; })
	.then(x => { console.log("c3 s2"); return x; })
	.then(x => { console.log("c3 s3"); return x; });

var [f1, f2] = promiseBarrier(2);
Promise.resolve(1).then(f1).then(console.log);
Promise.resolve(2).then(f2).then(console.log);