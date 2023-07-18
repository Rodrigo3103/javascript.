function MostrarHoraAtual() {    
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var sessao = ''
    var msg = ''
    var ttxhora = window.document.getElementById('relogio')

    horas = (horas<10)?"0"+horas:horas;
    minutos = (minutos<10)?"0"+minutos:minutos;
    segundos = (segundos<10)?"0"+segundos:segundos;

    if(horas>=0 && horas<=4) {
        msg = 'Boa Madrugada!'
    }else if(horas>=5 && horas<=12) {
        msg = 'Bom Dia!'
    }else if(horas>=13 && horas<=18) {
        msg = 'Boa Tarde!'
    }else if(horas>=19) {
        msg = 'Boa Noite!'
    }

    sessao = (horas<=13)?"AM":"PM"

    ttxhora.innerHTML = `${msg} ${horas}:${minutos}:${segundos}`
    setTimeout(MostrarHoraAtual,1000)
}
MostrarHoraAtual();



