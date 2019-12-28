//Usando herança de protótipos utiizando Object.create()

const pai = {
    nome: 'Victor',
    corCabelo: 'preto'
};

/*Uma alternativa à função setPrototypeOf() é utilizar a função create(). 
Ele cria objeto e automaticamente já define quem é o protótipo deste objeto, 
representado pelo parâmetro da função*/

//Exemplo - criando um objeto filha1 cujo protótipo é o objeto pai, passado como parâmetro
const filho1 = Object.create(pai);
filho1.nome = 'Vanderson'; 
console.log(filho1.corCabelo);
console.log(filho1.nome, filho1.corCabelo);

const filho2 = Object.create(pai, {
    nome: {value: 'Maxuel', writable: false, enumerable: true}
});

console.log(filho2.nome);
filho2.nome = 'Camilla';
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`);

console.log(Object.keys(filho1));
console.log(Object.keys(filho2));

/*OBS: se setar a propriedade enumerable como false, ao imprimir Object.keys(), simplesmente não aparecerá
a chave. Uma outra situação que causa o mesmo efeito é tentar imprimir */

//Imprimindo cada identificador (chave) do atributo do objeto filho2
for(let key in filho2){
    filho2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`);
}

/*A cada iteração, será chamado o método hasOwnProperty() para verificar se no objeto filho2 existe
um atributo que foi definida dentro do próprio objeto. Se retornar true, significa que será exibido
o identificador deste atributo do próprio objeto, ou seja, o atributo será sobrescrito 
no lugar do seu protótipo. Caso o valor retornado seja false, signfica que 
este atributo não foi definido no próprio objeto, mas será buscado nos objetos protótipos mais próximos
da hierarquia até encontrá-lo.*/

