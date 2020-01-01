console.log(typeof Array, typeof new Array, typeof[]);

//Criando um array instanciado através da função Array
let aprovados = new Array('Victor', 'Vanderson', 'Camilla');
console.log(aprovados);
console.log(aprovados[0]); //Acessando o primeiro elemento do array

//Criando um array literal
let aprovados1 = ['Bia', 'Pedro', 'Arthur'];
console.log(aprovados1[0]);
console.log(aprovados1[1]);
console.log(aprovados1[2]);
console.log(aprovados1[3]); //Este índice não existe na definição de array. Só possui 3 elementos. Resultado: undefined


aprovados1[3] = 'Paulo'; //Foi adiconado mais um elemento do array. Logo, o tamanho será 4.
console.log(aprovados1.length);

/*OBS: É importante considerar que array em JavaScript é uma estrutura de dados dinâmica e heterogênea,
diferentemente das outras linguagens de programação que geralmente são fortemente tipadas. Ou seja, ele
cresce à medida que são adicionados novos elementos, e diminui à medida que os elementos
são excluídos, e aceitam valores de diferentes tipos para cada índice*/

//Outra forma de adicionar elementos no array - função push()
aprovados1.push('Maxuel');
console.log(aprovados1.length); //Agora temos 5 elementos em um array

//Adicionando 10º elemento do array
aprovados1[9] = 'Rafael';
console.log(aprovados1.length); /*Agora temos 10 elementos, sendo que o último elemento
                                  possui valor válido, mas os índices 5,6,7 e 8 serão
                                  setados para undefined, pois não foi atribuído nenhum
                                  valor para esses índices*/

console.log(aprovados1[8] === undefined);
console.log(aprovados1 + '\n');
console.log(aprovados1.sort() + '\n'); //Imprimindo elementos do array de forma ordenada

//Antes da exclusão
console.log('Antes da Exclusão: \n' + aprovados1);

//Excluindo 1 elemento do array - 2ª posição
delete aprovados1[1];
console.log('Após a exclusão: \n' + aprovados1);
console.log(aprovados1[1]);
console.log(aprovados1[2]);

/*Agora iremos utilizar o método splice, que é responsável tanto para adicionar quanto para remover
elementos de um array*/
let aprovados2 = ['Ana', 'Erica', 'Luciano'];
// aprovados2.splice(1, 1);//A partir do índice 1, deseja-se excluir 1 elemento. Neste caso, será excluída a Érica
// aprovados2.splice(1,2); //A partir do índice 1, deseja-se excluir 2 elementos, a Érica e o elemento subsequente

// aprovados2.splice(1,2, 'João', 'Victor'); /*Primeiramente será realizada a exclusão dos elementos a partir do índice 1
//                                            e logo em seguida são adicionados 2 novos elementos em seus respectivos lugares*/

// aprovados2.splice(1,0, 'João', 'Victor'); /* A partir do índice 1, não será realizada a exclusão.
//                                             Apenas serão adicionados 2 novos elementos */

aprovados2.splice(1,1, 'João', 'Pedro'); /*A partir do índice 1, será excluído o segundo elemento, e logo
                                          em seguida serão adicionados 2 novos elementos a partir deste
                                         índice*/
console.log(aprovados2);