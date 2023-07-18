function horaAtual(){
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var sessao = "AM"
    var mensagem = ""
    var mostarHora = window.document.getElementById('relogio');

    horas  = (horas<10)?"0"+horas:horas;
    minutos = (minutos<10)?"0"+minutos:minutos;
    segundos = (segundos<10)?"0"+segundos:segundos;
    
    sessao = (horas<13)?"AM":"PM";

    if(horas>=0 && horas<=4) {
        mensagem= "Boa Madrugada!"
    }else if(horas>=5 && horas<=12) {
        mensagem = "Bom Dia!"
    }else if(horas>=13 && horas<=18) {
        mensagem = "Boa Tarde!"
    }else if(horas>=19) {
        mensagem = "Boa Noite!"
    }

    mostarHora.innerHTML = `${mensagem} ${horas}:${minutos}:${segundos} - ${sessao}`

    setTimeout(horaAtual,1000)
}

function contar() {
    let inicio = window.document.getElementById('iInicio')
    let final = window.document.getElementById('iFim')
    let passo = window.document.getElementById('iPasso')
    let resposta = window.document.getElementById('res')
    
    if(inicio.value.lenght == 0 || final.value.lenght == 0 || passo.value.lenght == 0 || inicio.value =="" || final.value == "" || passo.value == "") {

        window.alert('[ERRO] Falatam dados')
    }else {
        resposta.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        //let c = 1 // variavel contador
        //resposta.innerHTML = 'testando'
        if(p<=0) {
            resposta.innerHTML = `Passo Invalido!`
        }else if(i<f){   
            // contagem Progressiva
            for(c = i; c <= f ; c+=p ) {
                resposta.innerHTML += `&#128073; ${c}  ` 

            }
            resposta.innerHTML +=`&#127937`
        }else {
            // contagem Regressiva
            for(c = i; c>=f; c-=p) {
                resposta.innerHTML += `&#128073; ${c}`
            }
            resposta.innerHTML +=`&#127937`
        }

    
    }
}



