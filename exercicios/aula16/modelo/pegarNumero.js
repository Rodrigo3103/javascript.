function pegarNumero() {
    let numeroTela = window.document.getElementById('inum');
    let numero = Number(numeroTela.value);
    let listaNumeros = [];
    let mostraNumeros = window.document.getElementById('testerapido');


    listaNumeros.push(numero);

    for (let i = 1; i >= listaNumeros.length; i++) {
        mostraNumeros.innerHTML = i;
    }






}
