
const alunos = [{nome: 'Victor', nota: 7.5, bolsista: false},
                {nome: 'Pedro', nota: 5.5, bolsista: true},
                {nome: 'Camilla', nota: 8.0, bolsista: false},
                {nome: 'Ana', nota: 4.3, bolsista: true}];


console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, valorAtual){
    console.log(acumulador, valorAtual);
    return acumulador + valorAtual;
}, 10); //É opcional passar o valor do índice do elemento atual do array que será processado mais o próprio array como parâmetro do reduce

/*Considerando o exemplo acima, foi especificado o valor 10 como valor inicial a ser contabilizado no array,
ou seja, o valor 10 passa a assumir o primeiro índice do vetor. Por padrão, a função reduce considera que
o primeiro elemento seja o elemento qie esteja no índice 0 do array*/


console.log(resultado); //O resultado é a soma dos elementos do array a partir de uma chamada da função reduce()

/*A função reduce funciona de maneira semelhante que criar um array com valores numéricos que serão 
lidos de maneira sequencial, devido aos parâmetros que representam o valor inicial que será setado
no índice 0, e o valor atual que está no índice que está sendo lido no momento da iteração do FOR*/


//Outro exemplo comum: usando reduce para chamar funções de callback que retorna o maior valor contido no array
const numeros = [{x: 22}, {x: 42}];
var maxCallBack = (acc, atual) => Math.max(acc.x, atual.x);
var maxCallBack2 = (acc, atual) => Math.max(acc, atual);


//Usando reduce sem passar o valor inicial
console.log(numeros.reduce(maxCallBack));

//Passando o valor inicial 10
console.log(numeros.map(el => el.x).reduce(maxCallBack2, 10));


//Exemplo 3: Elimiminando a duplicidade de elementos do array
let arr = [1,2,1,2,3,5,4,5,3,3,3,4,4,4,4];

let resultadoTeste = arr.sort().reduce((inicial, atual) => {
    if(inicial.length === 0 || inicial[inicial.length - 1] !== atual){
        inicial.push(atual);
    }
    return inicial;
}, []);

console.log(resultadoTeste);