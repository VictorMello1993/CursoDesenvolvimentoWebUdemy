const nome = 'Victor';

//Concatenação tradicional
const concatenacao = 'Olá, ' + nome + '!';

//Usando template strings
const template = ` Olá 
                  ${nome}!`;

console.log(concatenacao, template);

const soma = `25 * 2 = ${25 * 2 }`;
console.log(soma);

const uppercase = str => str.toUpperCase();
console.log(`Ei! ${uppercase('Cuidado!')}`);
