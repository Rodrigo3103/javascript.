console.log('Com a Estrutura  While')
console.log('\r') // para quebrar uma linha utilize o [\r] para quebrar duas linha utilize o [\n].
var c = 1


while(c<=10) {
    c = (c<10)?"0"+c:c
    console.log(`passo ${c}`)
    c++
}
console.log('\n') 
console.log('Com a Estrutura Do While')


var d = 1
do {
    d = (d<10)?"0"+d:d
    console.log(`passo ${d}`)
    d++
}while(d<=10)
console.log('\n') 


console.log('Com a Estrutura FOR')
for(e=1;e<=10; e++) {
    e = (e<10)?"0"+e:e
    console.log(`passo ${e}`)
    
}
console.log('\n') 

for(e=10;e>=1;e--) {
    console.log(`passo ${e}`)

}