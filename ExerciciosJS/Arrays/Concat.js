/*Método concat() => Função que concatena todos os elementos de um array em 
um novo array*/

const contabil = ['Victor', 'Vanderson', 'Maxuel', 'Camilla'];
const financeiro = ['Jonathas', 'Marcel', 'William', 'Felipe'];
const colaboradoresMXM = contabil.concat(financeiro, 'Julian'); /*Também é possível
adicionar novos elementos no array de concatenação*/

/*Imprimindo a concatenação dos arrys contabil e financeiro para um novo array
que representa um array de todos os colaboradores */
console.log(colaboradoresMXM);


//Concatenando todos os elementos passados como parâmetro a um array vazio
console.log([].concat([1,2],[3,4],5, [[6,7], [8,9]]));
