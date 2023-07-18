function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if(num.value.length == 0 || num.value == "") {
        window.alert('[ERRO] Digite um Número Inteiro')
    }else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // aqui fazemos com que a tabuada seja zerada novamente.
        while(c<=10) {
            let  item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }    

    }



}

function horaAtual() {
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var sessao = "";
    var mensagemSaudacao = ''
    var horaCerta = window.document.getElementById('relogio')
    var formatoHora = ''

    horas = (horas<10)?"0"+horas:horas;
    minutos = (minutos<10)?"0"+minutos:minutos;
    segundos = (segundos<10)?"0"+segundos:segundos;

    sessao = (horas<13)?"AM":"PM";

    if(horas>=0 && horas<=4 ) {
        mensagemSaudacao = "Boa Madrugada! "
    }else if(horas>=5 && horas<=12) {
        mensagemSaudacao = "Bom Dia! "
    }else if(horas>=13 && horas<=18) {
        mensagemSaudacao = "Boa Tarde! "
    }else if(horas>=19) {
        mensagemSaudacao = "Boa Noite! "
    }
    formatoHora = `${mensagemSaudacao} <br> Horário Oficial de Brasília   ${horas}:${minutos}:${segundos} - ${sessao}`
    horaCerta.innerHTML = formatoHora;
    setTimeout(horaAtual,1000)
    

}
horaAtual();

