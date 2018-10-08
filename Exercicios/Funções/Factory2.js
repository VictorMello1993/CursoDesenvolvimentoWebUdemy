function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Processador Intel', 750.00));
console.log(criarProduto('Samsung Galaxy S7 Edge', 2000.00));