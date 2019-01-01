const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//Obtendo os dados armazenados no banco (servidor) dentro do arquivo funcionarios.json através da requisição GET  
// axios.get(url).then(response => {
//     const funcionarios = response.data
//     console.log(funcionarios)
// })

//Exercício: Obter a mulher chinesa com o menor salário, dentro da lista de 500 funcionários no arquivo funcionarios.json
axios.get(url).then(response => {
    const resultado = response.data.filter(mulher).filter(china).reduce(menorSalario)
    const resultado2 = response.data.filter(mulher).filter(china).reduce(menorSalario2)
    console.log(resultado)
    console.log(resultado2)
})

//Funções de callback
const mulher = m => m.genero == 'F'
const china = c => c.pais == 'China'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

//Usando reduce com Math.min(acc, valorAtual)
const menorSalario2 = (func, funcAtual) => {
    let ms = Math.min(func.salario, funcAtual.salario)
    return func.salario === ms ? func : funcAtual
}
 
//Sem o uso do reduce
// var teste = [3.65, 4.15, 9.78, 1.25]
// console.log(Math.min(...teste))

