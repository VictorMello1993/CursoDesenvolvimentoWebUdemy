//Pessoa -> 123 -> {...}
const pessoa = {nome: 'João'};


/*Um objeto que foi declarando como const, só não pode ser alterado a referência em que ela aponta, isto é,
um endereço de memória que aponta para os seus atributos. Por esse motivo, os seus atributos podem ser modificados.*/
pessoa.nome = 'Victor'; //OK
console.log(pessoa);

// pessoa = {nome: 'Maria'};
// console.log(pessoa); //ERRO! Não pode atribuir um novo objeto, que aponta para um novo endereço de memória, para um objeto que foi previamente definido como uma constante

//Para fazer com que os atributos não sofram nenhum tipo de alteração, utiliza-se a função freeze()
const produto = Object.freeze({nome: 'Notebook', preco: 5000, });

produto.nome = 'Caneta';
produto.preco = 10000;
delete produto.nome;
delete produto.preco;
produto.desconto = 0.13;

console.log(produto); /*Não retorna erros, o interpretador JavaScript ignora qualquer alteração nos atributos,
                        desde a adição, atribuição e exclusão de atributos*/
