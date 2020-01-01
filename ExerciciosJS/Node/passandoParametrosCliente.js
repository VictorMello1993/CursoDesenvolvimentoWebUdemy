const pessoas = ['Ana', 'Victor', 'Vanderson', 'Camilla']
const pessoa = {nome: 'Victor', idade: 25, sono: false, status(){
    return 'Jogando Assassins Creed'
}}

const obj1 = require('./passandoParametros')(pessoas) //Função que retorna um array
console.log(obj1)
// const obj1 = require('./passandoParametros')('Ana', 'Victor', 'Vanderson', 'Camilla')

console.log('\n')

const obj2 = require('./passandoParametros')(pessoa) //Função que retorna um objeto
console.log(obj2)

