function f2(a) {
    if (a >= 0){
        a=2*a
    }else{
        a=-1
    }
    return a
}

function f5(a,b,callback) {
    //a és un objecte, b és una funció, i c és una funció
    callback(b(a));
}

f5(1, f2, function(r) {
    console.log(r);
});