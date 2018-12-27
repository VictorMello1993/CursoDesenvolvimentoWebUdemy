const exportar = require('./exports')
console.log(exportar)
console.log(exportar.idade) /*Neste caso, o objeto não será retornado, pois exports é só uma variável que aponta 
                            para o mesmo objeto referenciado pelo module.exports*/

                            /*Dessa forma, se alterarmos a referência do objeto apontado pelo module.exports em um
                              módulo que será exportado para os outros módulos, ao importar o objeto passa a ter
                              uma referência diferente*/
