const nome = 'Victor';


console.log(nome.charAt(3)); //Retorna um caracter em um índice especificado.
console.log(nome.charAt(7)); //JavaScript na maioria das situações não retorna erros
console.log(nome.charCodeAt(3)); //Retorna o valor ASCII de um caracter correspondente
console.log(nome.indexOf('i')); //Retorna o índice de um caracter correspondente. Se o caracter a ser buscado não consta na string, retornará -1.

console.log(nome.substring(1)); //Retorna uma substring a partir da posição 1
console.log(nome.substring(0, 3)); //Retorna uma substring a partir da posição 0 (inclusive) até a posição 3 (exclusive)

console.log(nome.replace('i', 'a')); //Substituindo um caracter existente numa string ao outro caracter especificado. Caso não exista o caracter, retornará o texto original

//Concatenando strings usando literais
console.log(nome.concat(' Santos ').concat('de Mello'));

//utilizando o operador de concatenação
console.log(nome + ' Santos ' + 'de ' + 'Mello');
console.log(nome.replace(/\d/g, 'e'));

console.log('Victor,Vanderson,Maxuel'.split(',')); //Divide uma string em um array através de um caracter separadorS
console.log('Ana,Maria,Pedro'.split(/./)); //Usando expressões regulares



