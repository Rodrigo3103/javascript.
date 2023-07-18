function horasAtual() {
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    let sessao = ''
    let mensagemSaudacao = ''
    let mostrarHorasAtual=window.document.getElementById('relogio')

    horas = (horas<10)?"0"+horas:horas;
    minutos = (minutos<10)?"0"+minutos:minutos;
    segundos = (segundos<10)?"0"+segundos:segundos;

    if(horas>=0 && horas<=4) {
        mensagemSaudacao = 'Boa Madrugada! '
        sessao = 'AM'
    }else if(horas>=5 && horas<=12) {
        mensagemSaudacao = 'Bom Dia! '
        sessao = 'AM'
    }else if(horas>=13 && horas<=18) {
        mensagemSaudacao = 'Boa Tarde! '
        sessao = 'PM'
    } else if(horas>=19) {
        mensagemSaudacao = 'Boa Noite!'
        sessao = 'PM'
    }

    mostrarHorasAtual.innerHTML = `${mensagemSaudacao} ${horas}:${minutos}:${segundos} - ${sessao}`
    setTimeout(horasAtual,1000)
}
// daqui pra cá é apenas pra foto//


let corpo = window.document.body
var img = document.createElement('img')
img.setAttribute('src','img')
let fundoQuadro = window.document.getElementById('quadro')
let simbolo = window.document.getElementById('logotipo')

//corpo.addEventListener('click', tempoDia)
//corpo.addEventListener('click', tempoTarde)
//corpo.addEventListener('click', tempoNoite)

function inicialPagina() {    
    img.setAttribute('src','imagens/carregamento.png')
    fundoQuadro.appendChild(img)
    simbolo.innerHTML = '&#x1F1F7;'
}

function tempoDia() {
    
    corpo.style.background = '#4B83A6'
    simbolo.innerHTML = "&#x2600;&#xFE0F;"
   
    img.setAttribute('src', 'imagens/manha.png')
    fundoQuadro.appendChild(img)

}

function tempoTarde() {
    corpo.style.backgroundColor = '#E89F51'
    let simbolo = window.document.getElementById('logotipo')
    simbolo.innerHTML = "&#x1F31E;"
    img.setAttribute('src','imagens/tarde.png')
    fundoQuadro.appendChild(img)
    

    

}

function tempoNoite() {

    corpo.style.backgroundColor = '#011140'
    let simbolo = window.document.getElementById('logotipo')
    simbolo.innerHTML = "&#x1F31C;"
    img.setAttribute('src','imagens/noite.png')
    fundoQuadro.appendChild(img)

    
}

