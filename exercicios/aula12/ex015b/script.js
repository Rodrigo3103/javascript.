

function horaAtual() {
    var data = new Date()
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();
    sessao = "AM";
    mensagemProDia = "";
    resposta = window.document.getElementById('res')

    hora = (hora < 10) ? "0" + hora : hora;
    minuto = (minuto < 10) ? "0" + minuto : minuto;
    segundo = (segundo < 10) ? "0" + segundo : segundo;

    var HoraAgora = window.document.getElementById('relogio');

    if (hora > 12) {
        sessao = "PM";
    }

    if (hora > 0 && hora <= 5) {
        mensagemProDia = "Boa Madrugada!"
    } else if (hora >= 6 && hora <= 12) {
        mensagemProDia = "Bom Dia!"
    } else if (hora >= 13 && hora <= 18) {
        mensagemProDia = "Boa Tarde!"
    } else if (hora >= 19) {
        mensagemProDia = "Boa Noite!"
    }

    HoraAgora.innerHTML = `${mensagemProDia} agora são: ${hora}:${minuto}:${segundo} - ${sessao}`

    setTimeout(horaAtual,1000)


}



function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('inu')
    var res = document.querySelector('div#res')


    if(fano.value.lenght == 0 || fano.value > ano || fano.value =="") {
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
        var fsexo = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('src', 'foto')

        if(fsexo[0].checked){
            genero = 'Masculino'
            if(idade>0 && idade<=10) {
                img.setAttribute('src', 'crianca-m.png')
            } else if(idade>10 && idade<=21) {
                img.setAttribute('src', 'jovem-m.png')
            }
            else if(idade>21 && idade<=65) {
                img.setAttribute('src', 'adulto-m.jpg')
            }
            else if(idade>65) {
                img.setAttribute('src','idoso-m.png')
            }
        } 
        
        
        
        
        
        
        
        else if(fsexo[1].checked){
            genero = 'Feminino'
            if(idade>0 && idade<=10) {
                img.setAttribute('src', 'crianca-f.png')
            } else if(idade>10 && idade<=21) {
                img.setAttribute('src', 'jovem-f.png')
            }
            else if(idade>21 && idade<=65) {
                img.setAttribute('src', 'adulto-f.jpg')
            }
            else if(idade>65) {
                img.setAttribute('src','idoso-f.png')
            }
        }
        
        res.innerHTML = `<p>Detectamos uma pessoa do sexo ${genero} aparentemente  com idade de ${idade} anos.</p>`
        res.appendChild(img)
    }
}