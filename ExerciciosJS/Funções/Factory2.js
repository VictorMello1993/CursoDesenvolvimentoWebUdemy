function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

function criarProduto2(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1,
        precoLiquido: function(preco, desconto){
            return preco - preco * desconto
            }
        }
    }


console.log(criarProduto('Processador Intel', 750.00));
console.log(criarProduto('Samsung Galaxy S7 Edge', 2000.00));
console.log(criarProduto2('Notebook Dell', 4500.00))

