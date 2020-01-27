(function ($) {
    $.fn.temporizador = function (opcoes) {

        /*Mesclando o que tiver de valor padrão com o valor passado
          para a chamada da função, através da função
          extend()*/
        const opcoesFinais = $.extend({
            /*Mensagem padrão caso não seja passada a 
            mensagem de fora*/
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes)

        
        function MontarContador() {            
            return [$('<span>').addClass('digito').append('0'),
            $('<span>').addClass('digito').append('0'),
            $('<span>').addClass('separador').append(':'),
            $('<span>').addClass('digito').append('0'),
            $('<span>').addClass('digito').append('0'),
            $('<span>').addClass('separador').append(':'),
            $('<span>').addClass('digito').append('0'),
            $('<span>').addClass('digito').append('0')]
        }
        
        // const digito = '<span class="digito">'
        // const separador = '<span class="separador">'

        // const conteudo = {
        //     horaDezena: $(digito).html('0'),
        //     horaUnidade: $(digito).html('0'),
        //     minutoDezena: $(digito).html('0'),
        //     minutoUnidade: $(digito).html('0'),
        //     segundoDezena: $(digito).html('0'),
        //     segundoUnidade: $(digito).html('0'),
        //     separadorHora: $(separador).html(':'),
        //     separadorMinuto: $(separador).html(':')
        // }

        // const horaDezena = $('<span class="digito">').html('0')
        // const horaUnidade = $('<span class="digito">').html('0')
        // const minutoDezena = $('<span class="digito">').html('0')
        // const minutoUnidade = $('<span class="digito">').html('0')
        // const segundoDezena = $('<span class="digito">').html('0')
        // const segundoUnidade = $('<span class="digito">').html('0')

        const conteudo = MontarContador()
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')

        // $(this).append(horaDezena, horaUnidade, separadorHora, 
        //                 minutoDezena, minutoUnidade, separadorMinuto,
        //                 segundoDezena, segundoUnidade, mensagem)

        $(this).append(conteudo, mensagem)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const horarioAlvo = regex.exec(opcoesFinais.horario)

        let temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const diferencaEmMili = alvo.getTime() - agora.getTime()

            if (diferencaEmMili >= 0) {
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())

                // horaDezena.html(diferenca[1][0])
                // horaUnidade.html(diferenca[1][1])
                // minutoDezena.html(diferenca[2][0])
                // minutoUnidade.html(diferenca[2][1])
                // segundoDezena.html(diferenca[3][0])
                // segundoUnidade.html(diferenca[3][1])

                conteudo[0].html(diferenca[1][0])
                conteudo[1].html(diferenca[1][1])
                conteudo[3].html(diferenca[2][0])
                conteudo[4].html(diferenca[2][1])
                conteudo[6].html(diferenca[3][0])
                conteudo[7].html(diferenca[3][1])
            }
            else {
                clearInterval(temporizador)
            }
        }, 1000);

        return this
    }
})(jQuery)