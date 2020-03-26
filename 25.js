//exercici 25

f1 = x => x+1;
f1 = x => Promise.resolve(1);

//p = Promise.resolve(0);

p.then(f1).catch(f2)
p.then(f1,f2).catch()

var promiseToCallback = function(f) {
	return function(x, callback) {
		f(x).then(res => {
				callback(null, r)
			},
			err => {callback(err, null)}
		)			
	}
}

f(x).then(XXX)
g(x, function(err, res) {res = XXX })

g = promiseToCallback(f)