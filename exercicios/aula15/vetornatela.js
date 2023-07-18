let valores = [8,1,7,4,2,9]
console.log('\n')
console.log('Com a Estrutura FOR tradicional')
for (let pos=0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('\n')
console.log(`Com o FOR feito com a estrutura IN`)
for(let pos in valores) {
    console.log(`A posição ${pos}tem o valor ${valores[pos]}`)

}

console.log('\n')

// procurando valores em um vetor

valores.indexOf(7)

console.log(valores.indexOf(7) ) // nesse caso ele achou o 7  que estava na segunda posição.

proc = 4

valores.indexOf(proc)

console.log(`${valores.indexOf(proc)}`) // quando buscarmos um  valor que não existe ele nos retornará -1, o js utiliza isso pra nos indicar que o valor não existe.
