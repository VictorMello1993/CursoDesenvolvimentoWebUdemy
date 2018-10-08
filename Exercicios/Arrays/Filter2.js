Array.prototype.filter2 = function(callback){
    const novoArray = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            novoArray.push(this[i]);
        }
    }
    return novoArray;
}


const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
];


const verificarSeSaoIguais = e => e.preco >= 500.00;
const produtosFrageis = e => e.fragil;

console.log(produtos.filter2(verificarSeSaoIguais).filter2(produtosFrageis));