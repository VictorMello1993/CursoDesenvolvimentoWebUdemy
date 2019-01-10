require('./global')
console.log(MinhaApp.saudar())

/*Erro! O padrão é não permitir que nenhum objeto global seja alterado. Para solucionar,
utiliza-se a função freeze() no objeto global*/
MinhaApp.sistema = 'Sistema XPTO2'
console.log(MinhaApp.sistema)