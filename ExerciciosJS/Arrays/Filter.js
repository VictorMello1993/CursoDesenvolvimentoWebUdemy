

//Função Filter() => Função utilizada para filtrar um array gerando sub-arrays de acordo com a condição

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
];

// console.log(produtos.filter(function(p){
//         return p.fragil;
// }));

//Desafio: criar 2 funções de callback e usar 2 vezes a função filter para retonar produtos iguais ou maiores que 500 reais e que são frágeis

const verificarSeSaoIguais = e => e.preco >= 500.00;
const produtosFrageis = e => e.fragil;

//Sem usar Arrow functions
// console.log(produtos.filter(function(p){
//     return p.preco >= 500.00 && p.fragil;
// }));

//Com arrow functions
console.log(produtos.filter(verificarSeSaoIguais).filter(produtosFrageis));