console.log(7/0); //Retorna o tipo Infinity para representar um valor numérico infinito
console.log("10" / 2); //OK
console.log("10, 2" / 2); /*Erro! O JavaScript não reconhece o valor numérico com vírgula, 
                            pois o padrão para representar valores de ponto flutuante é por meio de pontos*/

console.log("10.2" / 2); //OK
console.log("Show!" * 2); //Erro! Strings que não contém apenas dígitos não podem ser utilizadas para cálculos matemáticos
console.log(0.1 + 0.7); //Ok, mas gera imprecisão para esse tipo de operação de números de ponto flutuante
// console.log(10.toString()); //Erro! É impossível converter um valor de um tipo literal para qualquer tipo de dado
console.log(10.345.toFixed(2));

console.log('3' - 2); //No contexto de strings, o operador de subtração não faria sentido. Portanto, o resultado será a subtração entre os números com dígitos
console.log('3' + 2); //Neste caso, será realizada a concatenação, pois este operador faz sentido no contexto de strings
console.log('5' * 2); //Retorna o resultado da multiplicação entre valores numéricos e caracteres de dígitos de um string, pois o operador de multiplicação não faz sentido no contexto de strings