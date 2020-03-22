//Pagina 8 problemas, ejercicio 32
var promiseBarrier = function(n) {
	var list = [];

	var functions = [];
	var counter = 0;

	for(let i=0; i<n; i++) {
		list[i] = function(x1) { // f1, f2, f3

			// (1)
			counter++;

			return new Promise((resolve, reject) => {
				//resolve(x1); 
				functions[i] = resolve;
				params[i] = x1;

				// (2)
				if(counter==n) {
					for (let j=0; j<n; j++){
						var r = functions[j];
						r(params[j]);
					}
					
				}

			});
		}
	}
	return list;
}

var list = promiseBarrier(3)