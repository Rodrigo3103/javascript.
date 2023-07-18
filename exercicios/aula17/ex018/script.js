let num = window.document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []



function isNumero(n){ 
    if(Number(n)>=1 && Number(n) <= 100) {
        
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        window.alert(`O Número ${Number(num.value)} foi adiciona com sucesso!`)
        let item = document.createElement('option')
        item.text  = `Valor ${num.value} Add a lista!`
        lista.appendChild(item)
        res.innerHTML = ''
        

    } else {
        window.alert(`O número ${Number(num.value)} já em lista ou Valor Inválido.`)
    }
    num.value = '' // 
    num.focus() //

}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione Valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            media += valores[pos]/valores.length
            if (valores[pos]>maior)
                maior = valores[pos]
            if(valores[pos]<menor)
                menor = valores[pos]

        }
        res.innerHTML = ''
        res.innerHTML += `<p> ao todo temos ${tot} Números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi o valor ${maior} na posição.</p>`
        res.innerHTML += `<p> O menor valor informado foi o valor ${menor} na posição.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média é ${media}.</p>`

    }

}

function horasAtual() {    
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var mensagem = "Mensagem de Saudação!"
    var sessao = "AM/PM"
    let mostrarHorasAtual = window.document.getElementById('relogio')

    horas =(horas<10)?"0"+horas:horas;
    minutos = (minutos<10)?"0"+minutos:minutos;
    segundos = (segundos<10)?"0"+segundos:segundos;
    sessao = (horas<=12)?"AM":"PM";

    if(horas>=0 && horas<=4) {
        mensagem = "Boa Madrugada! "
    } else if(horas>=5 && horas<12) {
        mensagem = "Bom Dia! "
    } else if(horas>= 13 && horas<=18) {
        mensagem = "Boa Tarde!"
    } else if(horas>=19) {
        mensagem = "Boa Noite!"
    }


    mostrarHorasAtual.innerHTML = `${mensagem} ${horas}:${minutos}:${segundos} - ${sessao}`

    



    setTimeout(horasAtual,1000)
    
}

horasAtual()

