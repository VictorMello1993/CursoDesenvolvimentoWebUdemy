// //setInterval - chama a função de callback (evento) repetidas vezes em um intervalo de tempo especificado
var intervalo = setInterval(imprimir, 1000);

function imprimir(){
    console.log("Olá mundo!");
}

//setTimeOut - chama função de callback (evento) uma única vez em um intervalo de tempo especificado
var parar = setTimeout(function(){
    clearInterval(intervalo)
}, 10000); //Após 10 segundos será executada a função passada no primeiro parâmetro do setTimeOut(). Neste caso, essa função contém a 
           //chamada do clearInterval(), que interrompe a execução do setInterval()




