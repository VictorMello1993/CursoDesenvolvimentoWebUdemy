const express = require('express')
const app = express()

//use(), por padrão, funciona para qualquer URL e para qualquer tipo de requisição, ou seja, aceita praticamente todos os verbos da requisição HTTP (GET, POST, PUT, DELETE, etc...).
//Especificando a URL no primeiro parâmetro da use() indica que a requisição funciona somente para uma URL específica
// app.use('/teste',(req, res) => {
//     res.send('Olá <b>mundo!</b>')
// })

//O método all() funciona de fato para quaisquer tipos de requisição HTTP
// app.all('/teste',(req, res) => {
//     res.send('Olá <b>mundo!</b>')
// })

// app.get('/teste', (req, res) => {
//     res.json({
//         nome: 'Victor',
//         idade: 26,
//         profissao: 'Programador Jr I',
//         cidade: 'Rio de Janeiro',
//         cursos: [
//             {id: 1, nome: 'Curso JavaScript Avançado', plataforma: 'Udemy'},
//             {id: 2, nome: 'Curso Machine Learning & Python', plataforma: 'Udemy'},
//             {id: 3, nome: 'Curso Python do básico ao avançado', plataforma: 'Udemy'},
//             {id: 4, nome: 'Curso HTML, CSS & JavaScript', plataforma: 'Udemy'},
//         ]
//     })
// })

app.get('/teste', (req, res) => {
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
})

// Os formatos de respostas podem ser em JSON, HTML, XML, CSV, Binário, etc


app.listen(3000, () => console.log('Executando...'))

/*OBS: uma porta de comunicação só pode ser ocupada por um único processo em execução. Não é permitido que várias máquinas executassem script do Node
para rodar uma aplicação  na mesma porta que já está em uso. Para isso, é preciso matar um processo com CTRL + C*/

// Nodemon é ideal para monitorar o servidor apenas em ambiente de desenvolvimento*/

// PM2 é uma outra dependência para monitoramento da aplicação back-end, mas voltado para o ambiente de produção