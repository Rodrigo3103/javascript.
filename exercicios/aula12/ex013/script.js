function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')   
    var data = new Date() 
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    var sessao = "AM"

    if(hora>12) {
        sessao = "PM";
    }

    hora = (hora<10)? "0"+ hora: hora;
    minuto = (minuto<10)? "0"+ minuto:minuto;
    segundo = (segundo<10)? "0"+ segundo:segundo;
    
    

    msg.innerHTML = `agora são ${hora}:${minuto}:${segundo}-${sessao}`
    if(hora>=0 && hora <=4) {
        //Madrugada
        img.src = 'imagens/madrugada.png'
        window.document.body.style.background = '#0B2559'     
        seccor = window.document.getElementById('principal')
        seccor.style.background = '#2a416d'
        
    } else if (hora>=5 && hora<=12) {
        //Manhãm
        img.src = 'imagens/manhã.png'
        window.document.body.style.background = '#A1C7E0'
        seccor = window.document.getElementById('principal')
        seccor.style.background = '#adc1ce'
        seccor.style.color = '#00ae88'
        
    }
    else if(hora>=13 && hora <=18) {
        //Tarde
        window.document.body.style.background = '#B96028'
        img.src = 'imagens/tarde.png'
        seccor = window.document.getElementById('principal')
        seccor.style.background = '#966f56'
    }
    else if (hora>=19 && hora<=23) {
        //noite
        window.document.body.style.background = '#023535'
        img.src = 'imagens/noite.png'
        seccor = window.document.getElementById('principal')
        seccor.style.background = '#385858'
    
    } 
    setTimeout(carregar,1000)

}

carregar()

function showTime() {
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var milisegundos = data.getMilliseconds();
    var sessao = "AM";
    

    if(horas>12) {
        sessao = "PM"
    }

    horas = (horas<10)? "0"+horas : horas;
    minutos = (minutos<10)? "0"+minutos: minutos;
    segundos = (segundos<10)? "0"+ segundos: segundos;
    milisegundos = (milisegundos<10)? "0" + milisegundos: milisegundos;

    var horasReal = window.document.getElementById('relogio');
    var time = `${horas}:${minutos}:${segundos} - ${sessao}`
    horasReal.innerHTML = time;

    setTimeout(showTime,1000);
}

showTime();