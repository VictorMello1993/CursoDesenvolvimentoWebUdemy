const [a] = [10]; //Atribuindo o valor para uma variável na primeira prosição do array via destructuring
console.log(a);

const[n1, , n3, , n5, n6 = 0] = [10,7,9,8]; //A saída será: n1 = 10, n3 = 9, n5 = undefined e n6 = 0 como valor padrão
console.log(n1, n3, n5, n6);

//Usando a desestruturação aninhada
const[,[,nota]] = [[, 8, 8], [9, 6, 8]] /*A saída será: primeiro array atribuído é ignorado, enquanto que o segundo
                                          terá um de seus membros com valor válido. No caso, o segundo elemento do
                                          2º array terá o valor 6, enquanto o primeiro é ignorado, e o último
                                          elemento está fora da definição do array*/
                                          
console.log(nota);

//Exemplo 2:
const[,,,[nota1, nota2],,] = [[,9,8], [9,6,4,2.5], [7.5, 8.25, , 10], [5.5, , 7]];
console.log(nota1, nota2); //nota 2 retornará undefinided, pois o segundo elemento do 4º array foi ignorado na atribição
