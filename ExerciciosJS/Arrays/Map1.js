/*Função Map(): Utilizada para mapear um array para outro array de um mesmo tamanho, com a transformação dos
seus dados*/

const numeros = [1,2,3,4];

//Criando um novo array onde cada elemento que representa um valor numérico é o dobro do original
let resultado = numeros.map(function(e){
    return e * 2;
});

console.log(resultado);

//A função map seria um For com um propósito de modificar cada elemento do array

//Adicionando mais funções de callback a serem passados para função Map()
const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraValorMonetario = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = numeros.map(soma10).map(triplo).map(paraValorMonetario);
console.log(resultado);