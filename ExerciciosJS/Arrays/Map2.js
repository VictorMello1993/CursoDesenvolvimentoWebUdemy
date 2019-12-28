
//Criando um array de JSON
const carrinho = [
    '{"Nome": "Borracha", "Preco": 3.45}',
    '{"Nome": "Caderno", "Preco": 13.90}',
    '{"Nome": "Lapis", "Preco": 1.25}',
    '{"Nome": "Caneta", "Preco": 6.00}',
]

//Desafio: Implementar a função map para retornar um array apenas com os preços 

//Solução 1: Usando apenas uma chamada do map()
const carrinhoObjetos = carrinho.map(function(e){
    // let obj = JSON.parse(e)
    // return `R$ ${obj.Preco.toFixed(2).replace('.', ',')}`
    return `R$ ${JSON.parse(e).Preco.toFixed(2).replace('.', ',')}`
})
console.log(carrinhoObjetos)
//------------------------------------------------------------------------------------------------------------------------
//Solução 2: Usando mais de uma chamada do map()
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.Preco
const paraValorMonetario = vm => `R$ ${vm.toFixed(2).replace('.', ',')}`
const carrinhoObjetos2 = carrinho.map(paraObjeto).map(apenasPreco).map(paraValorMonetario)
console.log(carrinhoObjetos2);
//------------------------------------------------------------------------------------------------------------------------

//Solução 3: Usando a forma tradicional
const apenasPreco2 = (c) => {
    const carrinhoObjetos2 = [];
    for(var i = 0; i < c.length; i++){
        // let obj2 = JSON.parse(c[i])
        // carrinhoObjetos2[i] = `R$ ${obj2.Preco.toFixed(2).replace('.', ',')}`
        carrinhoObjetos2[i] = `R$ ${JSON.parse(c[i]).Preco.toFixed(2).replace('.', ',')}`
    }
    return carrinhoObjetos2;
} 

console.log(apenasPreco2(carrinho))
