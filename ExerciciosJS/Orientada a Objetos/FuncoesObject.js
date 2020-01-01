//Funções de Object

const pessoa = {
    nome: 'Victor',
    idade: 24,
    peso: 55
}

//Obteando as chaves dos atributos de um objeto
console.log(Object.keys(pessoa));

//Obtendo os valores dos atributos de um objeto
console.log(Object.values(pessoa));

/*Obtendo uma lista de chaves e valores de cada atributos em um array. Cada par de chaves/valor está vinculado
em um sub-array de 2 posições*/
console.log(Object.entries(pessoa));


//Obtendo cada par chaves/valor usando forEach()
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

//Usando a mesma função forEach, mas usando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})


//Definindo uma propriedade de um objeto. Neste caso está incluindo a data de nascimento de objeto pessoa
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //Propriedade listada
    writable: false, //Propriedade não pode ser alterada,
    value: '15/12/1993',

});

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento); /*Como a propriedade foi definida como não editável, não significa que em
                                     tempo de execução será retornado um erro, mas funciona da mesma forma
                                     que a função freeze(), o interpretador ignora a atribuição de um valor
                                     de um atributo que foi previamente definido*/
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));


const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4};
const obj = Object.assign(dest, o1, o2); /*A função assign concatena todos os atributos dos objetos passados
                                           para o objeto de destino (1º parâmetro da função), a partir
                                           do 2º parâmetro em diante. Se o identificador dos atributos
                                           de um dos objetos passados corresponder ao ateributo do
                                           objeto que de destino, ocorrerá a sobrescrita deste atributo*/