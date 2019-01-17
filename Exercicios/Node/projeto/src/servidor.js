//Configuração do Express

const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
 console.log('Middleware 1')
 next()
})

// app.get('/produtos', (req, res, next) => {
//     res.send({nome: 'Mouse Logitech G403', preco: 500.45}) //OBS: O método send retorna o resultado de um objeto no formato JSON
// })

//A função use() realiza a chamada das funções middleware que serão atendidas para qualquer requisão no servidor
app.use((req, res, next) => {
    res.send({nome: 'Mouse Logitech G403', preco: 500.45}) //OBS: O método send retorna o resultado de um objeto no formato JSON
})

//Executando Express a partir de uma determinada porta
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})

