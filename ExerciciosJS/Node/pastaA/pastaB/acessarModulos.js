//Acessando o módulo moduloA que está fora da pasta B usando o caminho relativo
const moduloA = require('../../moduloA') 
console.log(moduloA.ateLogo)

const c = require('./pastaC') /*
                                    Neste caso, como está sendo usado o padrão index.js, não é necessário referenciar
                                    o próprio arquivo*/
console.log(c.teste)


//Importando um módulo pré-instalados com o npm
// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)


