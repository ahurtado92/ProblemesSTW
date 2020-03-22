function f4(a,b) {
    return a+b;
}

let llistaA = [1,2,3,4];

let llistaB = llistaA.map(function (val) {
    return f4(val, 23);
});

console.log(llistaB[0]+' '+llistaB[1]+' '+llistaB[2]+' '+llistaB[3]);