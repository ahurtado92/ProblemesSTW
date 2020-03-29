//Pagina 8 problemas, ejercicio 32
let promiseBarrier = function(n) {
	let list = [];
	let functions = [];
	let counter = 0;

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

let list = promiseBarrier(3);