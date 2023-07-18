function showTime(){
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var sessao = "AM";

    if(horas>12) {
        sessao = "PM";
    }

    // Variavel = (condição) ? valor true: condição for falso
    horas = (horas<10) ? "0" + horas:horas;
    minutos = (minutos<10) ? "0" + minutos:minutos;
    segundos = (segundos<10) ? "0" + segundos: segundos;

    var time = horas + ":" + minutos +":" + segundos + ":" + sessao;
    window.document.getElementById('MyClockDisplay').innerHTML = time;
    window.document.getElementById('MyClockDisplay').textContent = time; 


    setTimeout(showTime, 1000);

}

showTime();