const schedule = require('node-schedule') //Importando a dependência node-schedule

//Colocando zeros à esquerda de acordo com o tamanho desejado para uma string
String.prototype.padLeft = function(size){
    var str = String(this)
    while(str.length < (size || 2)){
        str = "0" + str
    }
    return str
}


const tarefa1 = schedule.scheduleJob('*/1 * 16 * * 1', function(){
 console.log('Executando Tarefa 1', new Date().getSeconds())
})                                                     //Temporaziador responsável pela execução
                                                       //de uma tarefa de 5 em 5 segundos,
                                                       // às 11 horas e todas as segundas-feiras


//OBS: é possível criar uma regra de recorrência para execução de temporizadores.
//No exemplo anterior, o primeiro parâmetro passado representa uma string literal de uma regra de recorrência

//Cancelando a execução de uma tarefa usando o setTimeOut(), um dos métodos do JavaScript
setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000) 

//Outros temporizadores do JavaScript:
//setInterval()
//setImmediate()

//-----------------------------------------------------------------------------------------------------------------------------
//Instanciando uma regra de recorrência
const regra = new schedule.RecurrenceRule()
regra.second = [new schedule.Range(0)] //Criando uma regra de recorrência no qual uma tarefa será executada a cada segundo

const relogio = schedule.scheduleJob(regra, function(){
    var hora = new Date().getHours().toString()
    var minuto = new Date().getMinutes().toString()
    var segundo = new Date().getSeconds().toString()

    hora = (hora).padLeft(2)
    minuto = (minuto).padLeft(2)
    segundo = (segundo).padLeft(2)

    console.log(hora + ':' + minuto + ':' + segundo) 
})
