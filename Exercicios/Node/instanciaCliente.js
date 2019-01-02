//Importando módulos que não foram utilizados na função factory. Neste caso, os mesmos serão cacheados pelo Node
const instanciaA = require('./instanciaUnica')
const instanciaB = require('./instanciaUnica')

instanciaA.inc()
instanciaA.inc()
console.log(instanciaB.valor) /*Como a constante instanciaB e instanciaA compartilham o mesmo objeto, sem o uso
                                da função factory, o resultado é o mesmo para ambos os casos*/

//--------------------------------------------------------------------------------------------------------------------------------
//Criando instâncias novas (que foram utilizadas na função factory)
const instanciaNova1 = require('./instanciaNova')()
const instanciaNova2 = require('./instanciaNova')()

instanciaNova1.inc()
instanciaNova1.inc()
console.log(instanciaNova2.valor) /*O valor do contador da constante instanciaNova2 não foi alterado, pois
                                    somente a constante instanciaNova1 não foi alterada.*/

console.log(instanciaNova1.valor)
//---------------------------------------------------------------------------------------------------------------------------------
