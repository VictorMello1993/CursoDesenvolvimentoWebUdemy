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
    
    // const hora = {
    //     horaDezena: '0',
    //     horaUnidade: '0',
    //     separadorHora: ':',
    //     minutoDezena: '0',
    //     minutoUnidade: '0',
    //     separadorMinuto: ':',
    //     segundoDezena: '0',
    //     segundoUnidade: '0'
    // }    

    const conteudo = `
    <span class="digito">0</span>
    <span class="digito">0</span>
    <span class="separador">:</span>
    <span class="digito">0</span>
    <span class="digito">0</span>
    <span class="separador">:</span>
    <span class="digito">0</span>
    <span class="digito">0</span>    
    `
    // const horaDezena = $('<span class="digito">').html('0')
    // const horaUnidade = $('<span class="digito">').html('0')
    // const minutoDezena = $('<span class="digito">').html('0')
    // const minutoUnidade = $('<span class="digito">').html('0')
    // const segundoDezena = $('<span class="digito">').html('0')
    // const segundoUnidade = $('<span class="digito">').html('0')

    // const separadorHora = $('<span class="separador">').html(':')
    // const separadorMinuto = $('<span class="separador">').html(':')
              
    const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)
    
    $(this).addClass('temporizador')

    // $(this).append(horaDezena, horaUnidade, separadorHora, 
    //                 minutoDezena, minutoUnidade, separadorMinuto,
    //                 segundoDezena, segundoUnidade, mensagem)
    
    $(this).append(conteudo.trim(), mensagem)

    const html = conteudo.match(/<span.+>\d<\/span>/g)
    const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)    
    const horarioAlvo = regex.exec(opcoesFinais.horario)    

    let temporizador = setInterval(() => {
        const agora = new Date()
        const alvo = new Date()
        alvo.setHours(horarioAlvo[1])
        alvo.setMinutes(horarioAlvo[2])
        alvo.setSeconds(horarioAlvo[3])

        const diferencaEmMili = alvo.getTime() - agora.getTime()        

        if(diferencaEmMili >= 0){
            const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())

            $(html[0]).html(diferenca[1][0])
            $(html[1]).html(diferenca[1][1])
            $(html[2]).html(diferenca[2][0])
            $(html[3]).html(diferenca[2][1])
            $(html[4]).html(diferenca[3][0])
            $(html[5]).html(diferenca[3][1])

            // horaDezena.html(diferenca[1][0])
            // horaUnidade.html(diferenca[1][1])
            // minutoDezena.html(diferenca[2][0])
            // minutoUnidade.html(diferenca[2][1])
            // segundoDezena.html(diferenca[3][0])
            // segundoUnidade.html(diferenca[3][1])
        }
        else{
            clearInterval(temporizador)
        }
    }, 1000);

    return this
    }
})(jQuery)