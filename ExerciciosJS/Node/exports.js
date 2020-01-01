//Fundamentos da função exports - Como exportar módulos da maneira correta?

console.log(module.exports === this)
console.log(module.exports === exports)

// this.nome = 'Victor Santos'
// exports.idade = 25
module.exports.profissao = 'Programador'

// exports = null
// // console.log(module.exports)

// exports = {
//     nome: 'Teste'
// }

// console.log(module.exports) /*É importante notar que mesmo alterando a referência de um objeto a partir de 'exports'
//                                (ou pelo 'this)', o que será de fato retornado é o 'module.exports', pois tanto o 
//                                'this' quanto o 'exports' são apenas variáveis que apontam para o mesmo objeto. 
//                                Portanto, não é correto exporta os módulos do seu projeto usando o exports. 
//                                A maneira correta é por meio da variável 'module.exports'*/        


module.exports = {publico: true}
module.exports = {nome: 'teste'}