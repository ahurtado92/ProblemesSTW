function f3 (llista){
    var llista2 = [];
    for (let key in llista) {
        llista2[key] = llista[key]+23;
    }
    return llista2;
}

var l = f3([1,2,3]);
console.log(l[0]+' '+l[1]+' '+l[2]);