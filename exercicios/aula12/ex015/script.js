function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();
    var horaAtual = window.document.getElementById('teste')
    var sessao = 'AM'
    var saudacao = "Bom Dia"

    if(hora>0 && hora<5) {
        saudacao = "Boa Madrugada!"
    } else if(hora>=5 && hora<13) {
        saudacao = "Bom Dia!"
    } else if(hora>=13 && hora<19) {
        saudacao = "Boa tarde!"
    } else if(hora>=19) {
        saudacao = "Boa Noite!"
    }


    if(hora>12) {
        sessao = "PM"
    }

    hora = (hora<10)?"0"+hora:hora;
    minuto = (minuto<10)?"0"+minuto:minuto;
    segundo = (segundo<10)?"0"+segundo:segundo;

    // meu código pra teste
    var msg = window.document.getElementById('teste')
    msg.innerHTML = "ola, a data atual é: "+data+ " certo!"
    // fim do código pra testes
    if(fano.value.lenght == 0 || fano.value > ano || fano.value =="") {
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        

        if(fsex[0].checked) {
            genero = 'Masculino'
            if (idade>=0 && idade <=10) {
                // Criança
                img.setAttribute('src','crianca-m.png')

            }else if (idade >=11 && idade <= 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.png')

            } else if (idade >= 22 && idade<=65) {
                //Adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else if (idade >=66) {
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            } 
        }
        else if(fsex[1].checked){
            genero = 'Feminino'
            if (idade>=0 && idade <=10) {
                img.setAttribute('src', 'crianca-f.png')
            } else if (idade>10 && idade <=21) {
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade>21 && idade <=65) {
                img.setAttribute ('src', 'adulto-f.jpg')
            } else if (idade >=66) {
                img.setAttribute('src', 'idoso-f.png')
            }

        }
        
        
        res.innerHTML = `<p>Detectamos uma pessoa do sexo ${genero} aparentemente  com idade de ${idade} anos.</p>`
        res.appendChild(img)
        horaAtual.innerHTML = `${saudacao} Agora são ${hora}:${minuto}:${segundo} - ${sessao}`

        setTimeout(verificar,1000)
        
        
    }

}