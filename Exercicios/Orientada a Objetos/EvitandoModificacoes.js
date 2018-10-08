/*Object.preventExtensios - Evita de adicionar novos atributos de um objeto.
É permitido modificar e excluir atributos, mas não tem como adicionar novas propriedades
de um objeto*/

const produto = Object.preventExtensions({
    nome: 'Notebook',
    preco: 5000.00,
    tag: 'Promoção'
})

console.log(produto);
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Cadeira Gamer DT3 Elise';
produto.descricao = 'Cadeira de couro poliuretano';
delete produto.tag;
console.log(produto);

/*Object.seal - Função complementar do preventExtensions, isto é, além de não permitir adicionar novos atributos
também não é possível excluir os atributos. Porém, ainda é possível modificar os valores dos atributos*/
const pessoa = {nome: 'Victor', idade: 24};
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Mello';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

/*Object.freeze - Mescla de funções Object.preventModifications e Object.seal. Ou seja, não é possível
adicionar, modificar ou remover atributos de um objeto, tornando-o 100% constante*/

const animal = {
    nome: 'Cachorro',
    tipo: 'Mamífero',
    quatroPatas: true
}

Object.freeze(animal);
console.log('Objeto constante: ', Object.isFrozen(animal));
animal.comeVegetais = false;
animal.nome = 'Leão';
delete animal.nome;
console.log(animal);

