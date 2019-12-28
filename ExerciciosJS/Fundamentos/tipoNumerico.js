const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const nota1 = 7.50;
const nota2 = 5.00;

const media = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2);

console.log('Média: ' + media);
console.log(media.toFixed(2)); //Utilizando 2 casas decimais
//O critério de restringir o número de casas decimais em JavaScript já utiliza o arredondamento

var num = 7.5666666;
console.log(num.toFixed(2));
console.log(media.toString(), typeof media.toString());
console.log(media.toString(2), typeof media.toString(2)); //Representação de string num valor binário



