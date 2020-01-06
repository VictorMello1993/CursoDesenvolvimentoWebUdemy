(function($){
    $.fn.temporizador = function(opcoes) {

        /*Mesclando o que tiver de valor padrão com o valor passado
          para a chamada da função, através da função
          extend()*/
        const opcoesFinais = $.extend({
            /*Mensagem padrão caso não seja passada a 
            mensagem de fora*/
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes)
    
    const digito = $('<span class="digito">').html('0')
    const separador = $('<span class="separador">').html(':')
    
    const horaDezena = digito
    const horaUnidade = digito
    const minutoDezena = digito
    const minutoUnidade = digito
    const segundoDezena = digito
    const segundoUnidade = digito
    
    const separadorHora = separador
    const separadorMinuto = separador
    const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)
    
    $(this).addClass('temporizador')
    $(this).append(horaDezena, horaUnidade, separadorHora, 
                    minutoDezena, minutoUnidade, separadorMinuto,
                    segundoDezena, segundoUnidade, mensagem)
    
    const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
    const horarioAlvo = regex.exec(opcoesFinais.horario)
    // console.log(horarioAlvo)

    let temporizador = setInterval(() => {
        const agora = new Date()
        const alvo = new Date()
        alvo.setHours(horarioAlvo[1])
        alvo.setMinutes(horarioAlvo[2])
        alvo.setSeconds(horarioAlvo[3])

        const diferencaEmMili = alvo.getTime() - agora.getTime()
        // console.log(diferencaEmMili)

        if(diferencaEmMili >= 0){
            const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())
            console.log(diferenca)

            horaDezena.html(diferenca[1][0])
            horaUnidade.html(diferenca[1][1])
            minutoDezena.html(diferenca[2][0])
            minutoUnidade.html(diferenca[2][1])
            segundoDezena.html(diferenca[3][0])
            segundoUnidade.html(diferenca[3][1])
        }
        else{
            clearInterval(temporizador)
        }
    }, 1000);

    return this
    }
})(jQuery)