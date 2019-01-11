const fs = require('fs')

const produto = {
    nome: 'Notebook Alienware',
    preco: 20000,
    especificacoes: {
        processador: 'I9 8700',
        placaVideo: 'NVIDIA GEFORCE RTX 2060',
        RAM: 32,
        SSD: 240,
        HD: 1000,
        display: 20,
    }
}

//Gravando um arquivo que será gerado no formato JSON a partir do objeto produto
fs.writeFile(__dirname + '/produtos.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo gravado com sucesso!')
})