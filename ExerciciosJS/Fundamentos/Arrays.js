const valores = [4.0, 5.6, 8.2, 7.5];
console.log(valores[0], valores[2]);

console.log(valores[10]); //Retornando o valor num índice que não foi definido, no caso irá retornar o undefined

/*Porém, JavaScript, ao contrário das outras linguagens, um array possui tamanho variável, podendo crescer ou diminuir
conforme o necessário. Além disso, um array é heterogêneo, ou seja, aceita valores de tipos distintos em uma única
estrutura.*/

//Atribuindo o valor na 5ª posição do array que não existia
valores[4] = 100;
console.log(valores[4]);
console.log(valores.length); //Antes o array "valores" possuía tamanho 4, agora possui tamanho 5 após a atribuição

console.log('\n');

//Por ser heterogêneo, podemo adicionar valores de qualquer tipo num array
valores.push({id: 3}, false, null, 'teste');

console.log(valores.length); //Agora temos 9 elementos num array

for (let i = 0; i < valores.length; i++) {
    console.log(valores[i]);
}

console.log('\n');

valores.pop(); //Removendo o último elemento do array
console.log(valores.length); //Agora temos 8 elementos

console.log(typeof valores);

for (let i = 0; i < valores.length; i++) {
    console.log(valores[i]);
}

