const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// Formato padrão da requisição de um form quando é realizada a submissão é urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// Realizando requisição para url /usuarios
// app.get('/usuarios', (req, resp) => {
//     // Obtendo os dados preenchidos do formulário no corpo da requisição
//     console.log(req.body);

//     // Usando o GET, para que os dados sejam retornados para o backend, utiliza-se query string, e não no corpo da requisição
//     console.log(req.query);
     
//     resp.send('<h1>Usuário incluído com sucesso!</h1>');
// });

// Realizando requisição para url /usuarios
app.post('/usuarios', (req, resp) => {
    // Obtendo os dados preenchidos do formulário no corpo da requisição
    console.log(req.body);
     
    resp.send('<h1>Usuário incluído com sucesso!</h1>');
});


app.post('/usuarios/:id', (req, resp) => {
    // Obtendo o parâmetro id na requisição
    console.log(req.params.id);

    // Obtendo os dados preenchidos do formulário no corpo da requisição
    console.log(req.body); 

    resp.send('<h1>Usuário alterado com sucesso!</h1>');
});

// Escutando a porta 3003 para aguardar a requisição de dados do formulário
app.listen(3003);