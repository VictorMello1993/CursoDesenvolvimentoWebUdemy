function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1-this.desc) * (1 + imposto)} `;
}

const produto = {
    nome: 'Notebook',
    preco: 5000,
    desc: 0.15,
    getPreco
}

console.log(getPreco()); //As variáveis preco e desc não estão definidas dentro do escopo global devido ao uso do this dentro da função

//Porém, usando o escopo global, a função já reconhece os valores que foram passados
global.preco = 20;
global.desc = 0.2;
console.log(getPreco());

//Chamando a função a partir de um objeto
console.log(produto.getPreco());

//Usando as funções Call e Apply para chamar uma função
console.log(getPreco.call(produto));
console.log(getPreco.apply(produto));

//A diferença entre as funções call e apply é a passagem de parâmetros
console.log(getPreco.call(produto, 0.30, '$'));

/*Na função call, a passagem dos parâmetros para a função a ser chamada ocorre de forma direta,
sendo que o primeiro parâmetro será sempre o contexto em que será executado, enquanto os outros
serão parâmetros atribuídos para a função chamada*/

//Na função apply, os parâmetros a serem passados para a função chamada devem ser definidos em um array
console.log(getPreco.apply(produto, [0.50, '$']));
