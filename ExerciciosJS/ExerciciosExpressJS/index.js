const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')

app.use(bodyParser.text())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))


/*Embora na função dentro do módulo saudacaoMid.js não estejam declarados os parâmetros req, res e next(), 
ela não deixa de ser uma função middleware, pois se trata de uma função que retorna uma função middleware*/
app.use(saudacao('Victor'))


//use(), por padrão, funciona para qualquer URL e para qualquer tipo de requisição, ou seja, aceita praticamente todos os verbos da requisição HTTP (GET, POST, PUT, DELETE, etc...).
//Especificando a URL no primeiro parâmetro da use() indica que a requisição funciona somente para uma URL específica
// app.use('/teste',(req, res) => {
//     res.send('Olá <b>mundo!</b>')
// })

//O método all() funciona de fato para quaisquer tipos de requisição HTTP
// app.all('/teste',(req, res) => {
//     res.send('Olá <b>mundo!</b>')
// })



//A ordem das funções é importante no padrão Chain of Responsability, onde existe uma função que recebe requisição, resposta e a função next(), chamado de middleware
//O next() é responsável pela execução da próxima função middleware na ordem definida
app.use((req, res, next) => {    
    console.log('Antes...')
    next()
})



/*Normalmente, na requisição GET, os parâmetros são provenientes diretamente da URL. Já a requisição POST, os parâmetros são provenientes
do corpo da requisição (body parser), comum em formulários na Web*/
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano ${req.query.ano}`) //Acessando os parâmetros da requisição via QueryString
})

//Método mais 'arcaico' de passar os dados da requisição POST (alternativamente seria passar os dados da requisição utilizando body-parser)
app.post('/corpo', (req, res) => {
    // let body = ''
    // req.on('data', function(part) { //Durante a requisição, passar os dados da requisição ao corpo
    //     body += part
    // })

    // req.on('end', function() { //Quando a requisição terminar, enviar os dados da requisição como resposta
    //     // res.json(JSON.parse(body)) //Quando o formato de resposta é um JSON
    //     res.send(body)
    // })

    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => { //Acessando os parâmetros da requisição diretamente da URL
    res.send(`Cliente ${req.params.id} selecionado`)
})


app.get('/teste', (req, res, next) => {
    console.log('Durante...')
    res.json({
        //Propriedades referentes à requisição (data, count, skip, limit)
        data: {
            nome: 'Victor',
            idade: 26,
            profissao: 'Programador Jr I',
            cidade: 'Rio de Janeiro',
            cursos: [
                { id: 1, nome: 'Curso JavaScript Avançado', plataforma: 'Udemy' },
                { id: 2, nome: 'Curso Machine Learning & Python', plataforma: 'Udemy' },
                { id: 3, nome: 'Curso Python do básico ao avançado', plataforma: 'Udemy' },
                { id: 4, nome: 'Curso HTML, CSS & JavaScript', plataforma: 'Udemy' },
            ]
        },
        count: 30,
        skip: 0,
        limit: 3
    })
    next()
})
// Os formatos de respostas podem ser em JSON, HTML, XML, CSV, Binário, etc

app.use((req, res) => {    
    console.log('Depois...')    
})


app.listen(3000, () => console.log('Executando...'))

/*OBS: uma porta de comunicação só pode ser ocupada por um único processo em execução. Não é permitido que várias máquinas executassem script do Node
para rodar uma aplicação  na mesma porta que já está em uso. Para isso, é preciso matar um processo com CTRL + C*/

// Nodemon é ideal para monitorar o servidor apenas em ambiente de desenvolvimento*/

// PM2 é uma outra dependência para monitoramento da aplicação back-end, mas voltado para o ambiente de produção