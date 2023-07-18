//recursividade
function fatorial(n) {
    if(n==1) {
        return 1

    }else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(17))



function fatorando(b=0) {
    let fat = 1
    for(c=b; c>1; c--){
        fat *=c
    }
    return fat
}

console.log(fatorando(5))