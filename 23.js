
let p;

/**
 * Apartat A
 * @type {Promise<number>}
 */
p = Promise.resolve(0).then(x => x + 1).then(x => x + 2).then(x => x + 4);
p.then(x => console.log('Apartat A: ' + x));

/**
 * La Promesa es resol retornant un 0, al primer 'then' tenim que:
 * x = 0
 * y, a més a això li sumem 1, amb el que ans queda:
 * x = x + 1 = 1
 * Al segon 'then' fem:
 * x = x + 2 = 1 + 2 = 3
 * Al tercer i últim 'then' fem:
 * x = x + 4 = 3 + 4 = 7
 * Finalment tenim que:
 * x = 7
 */

/**
 * Apartat B
 * @type {Promise<never>}
 */
p = Promise.reject(0).then(x => x + 1).catch(x => x + 2).then(x => x + 4);
p.then(x => console.log('Apartat B: ' + x));

/**
 * La promesa es rebutja retornant un 0, com la promesa ha sigut rebutjada ens saltem el 'then', amb el que tenim que:
 * x = 0
 * Al catch, com la promesa va ser rebutjada, no l'ignorem i fem:
 * x = x + 2 = 0 + 2 = 2
 * Al 'then' després del catch no l'ignorem i fem:
 * x = x + 4 = 2 + 4 = 6
 * Amb el que tenim que:
 * x = 6
 */

/**
 *
 */

/**
 * Apartat C
 * @type {Promise<number>}
 */
p = Promise.resolve(0).then(x => x + 1).then(x => x + 2).catch(x => x + 4).then(x => x + 8);
p.then(x => console.log('Apartat C: ' + x));

/**
 * Apartat D
 * @type {Promise<never>}
 */
p = Promise.reject(0).then(x => x + 1).then(x => x + 2).catch(x => x + 4).then(x => x + 8);
p.then(x => console.log('Apartat D: ' + x));

/**
 * Apartat E
 * @type {Promise<never>}
 */
p = Promise.reject(0).then(x => x + 1, null).catch(x => x + 2).catch(x => x + 4);
p.then(x => console.log('Apartat E: ' + x));