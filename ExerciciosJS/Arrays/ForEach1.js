const aprovados = ['Victor', 'Camilla', 'Vanderson', 'Maxuel'];

/*Percorrendo os elementos do array utilizando o forEach, que internamente percorre todos os elementos
do array chamando a função de callback passado para forEach()*/
aprovados.forEach(function(nome, indice, array){
    // console.log(`${indice + 1}) ${nome}`);
    // console.log(`${array}`); //Neste caso estaria imprimindo um array inteiro por iteração. No total foram 4 vezes
    console.log(`${indice + 1}`) //Imprimindo apenas indices;
});
console.log('\n');

/*Usando a função arrow como função de callback, passando apenas um parâmetro, não é obrigado passar
o índice do elemento correspondente*/
aprovados.forEach(nome => console.log(nome));
console.log('\n');

//Armazenando uma função de callback numa variável e passando-a como parâmetro da função forEach()
const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);

/*OBS: a função forEach pode assumir no máximo 3 parâmetros, sendo o primeiro representa um elemento
do array, o segundo seria o seu índice correspondente, e o terceiro seria o próprio array*/

