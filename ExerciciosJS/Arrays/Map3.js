Array.prototype.map2 = function(callback){
    const novoArray = [];
    for(let i = 0; i < this.length; i++){
       novoArray.push(callback(this[i], i, this));
    }
    return novoArray;
}

//Criando um array de JSON
const carrinho = [
    '{"Nome": "Borracha", "Preco": 3.45}',
    '{"Nome": "Caderno", "Preco": 13.90}',
    '{"Nome": "Lapis", "Preco": 1.25}',
    '{"Nome": "Caneta", "Preco": 6.00}',
]

//Desafio: Implementar a função map para retornar um array apenas com os preços 
const carrinhoObjetos = carrinho.map2(function(e){
    let obj = JSON.parse(e);
    return obj.Preco;
})

console.log(carrinhoObjetos);