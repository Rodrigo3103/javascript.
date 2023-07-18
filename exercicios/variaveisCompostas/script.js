let num = [5,8,1, 500, 300, 42, 98, 109, 87, 86, 87, 63, 74, 56,5]

function ordernar(a,b) {// serve para ordenar o vetor de forma correta!
    return a-b
}

console.log(num.sort(ordernar))

for (let i in num) {
    num[i] = (num[i]<10)?"0"+num[i]:num[i]
    if(i<10){
        console.log(`A posição  0${i} tem o valor ${num[i]}`)
    }else {
        console.log(`A posição  ${i} tem o valor ${num[i]}`)
    }
}

