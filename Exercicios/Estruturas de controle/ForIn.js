const notas = [5.5, 7.5, 8];

// for(i in notas){
//     console.log(i, notas[i]);
// }


for(let i in notas){
    console.log(i, notas[i]);
}

//A estrutura for in permite obter apenas os índices de cada elemento de uma coleção (os arrays), e não o próprio elemento

const pessoa = {
    nome: 'Victor',
    sobrenome: 'Mello',
    idade: 24,
    peso: 55
}

//Percorrendo todos os atributos do objeto pessoa utilizando o for in
// for(atributo in pessoa){
//     console.log(`${atributo} = ${pessoa[atributo]}`);
// }


// console.log(atributo); /*Irá imprimir o último atributo do objeto pessoa, 
//                         pois a variável iteradora dentro de um for in 
//                         implicitamente está definida no escopo global*/

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}

console.log(atributo); //Definindo a variável let não permite acesso fora do escopo do for