function horaAtual (){ // inicia a função e damos um nome a ela
    var data = new Date(); // pegamos a função atual do sistema
    var horas = data.getHours(); // pegamos a hora atual da função do sistema, através do método get
    var minutos = data.getMinutes();// pegamos o minuto atual da função do sistema, através do método get
    var segundos = data.getSeconds();// pegamoos o segundo atual da função do sistema, atravpes do método get.
    var sessao = "AM"
    var fundo = window.document.body
    if(horas>12) { sessao = "PM"} // fazemos uma condição , se for na parte da tarde o sistema nos manda o "PM" no lugar do "AM"

    
    
    // --------- um estilo de if diferente ------
    horas  =(horas<10)? "0"+horas:horas; // aqui verificamos uma condição 
    minutos = (minutos<10)? "0"+minutos:minutos; // ''
    segundos = (segundos<10)? "0"+segundos:segundos; // ''


    var horario = window.document.getElementById('relogio') // pegamos o elemento da div chamada pelo o ID de relógio
    horario.innerHTML = `Hora Atual ${horas}: ${minutos}: ${segundos} - ${sessao}` // fazemos mostrar no lugar da div uma mensagem do rélogio 

    setTimeout(horaAtual,1000) // fazemos o relógio em tempo real em tela.
  // parte imagens  
    img = window.document.getElementById('foto')
    
    
    if(horas>=0 && horas<=4) {
        img.src = 'imagens/ceu-madrugada.png'
        fundo.style.background = '#071745'
        


    }else if(horas>=5 && horas <13) {
        img.src = 'imagens/ceu-manham.png'
         
        
        
        
    } else if (horas>=13 && horas<19) {
        img.src = 'imagens/ceu-tarde.png'
        fundo.style.background = '#BD8B20'
    }
    else if (horas>=19) {
        img.src ='imagens/ceu-noite.png'
        fundo.style.background = '#1C2E70'
        
    }
    
}



