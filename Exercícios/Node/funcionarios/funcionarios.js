const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//Obtendo os dados armazenados no banco (servidor) dentro do arquivo funcionarios.json através da requisição GET  
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
})

//Exercício: Obter a mulher chinesa com o menor salário, dentro da lista de 500 funcionários no arquivo funcionarios.json