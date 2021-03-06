//Configuração do Express

const porta = 3003

const express = require('express')
const app = express()
const bancoDados = require('./bancoDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

// app.get('/produtos', (req, res, next) => {
//  console.log('Middleware 1')
//  next()
// })

// app.get('/produtos', (req, res, next) => {
//     res.send({nome: 'Mouse Logitech G403', preco: 500.45}) //OBS: O método send retorna o resultado de um objeto no formato JSON
// })

app.get('/produtos', (req, res, next) => {
    res.send(bancoDados.getProdutos())
})

//Realizando a requisição GET com parâmetros
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

//Atualizando o registro de produto
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.params.id
    })
    res.send(produto)
})

//Excluindo o registro de produto
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDados.excluirProduto(req.params.id)
    res.send(produto)
})

//A função use() realiza a chamada das funções middleware que serão atendidas para qualquer requisão no servidor
// app.use((req, res, next) => {
//     res.send({nome: 'Mouse Logitech G403', preco: 500.45}) //OBS: O método send retorna o resultado de um objeto no formato JSON
// })

//Executando Express a partir de uma determinada porta
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})

