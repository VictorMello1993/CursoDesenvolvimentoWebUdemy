//Lendo um arquivo fs
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

/*Forma síncrona (Não é recomendado, pois em situações reais, o arquivo a ser lido pode
mais pesado, o que leva mais tempo para ler completamente o conteúdo do arquivo, ou seja,
durante a leitura síncrona, o eventlooping será travado até completar a sua leitura)*/
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Forma assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Outra forma de ler arquivo JSON em vez de utilizar os métodos de leitura:
const config = require('./arquivo.json')
console.log(config.db) //Esta leitura é síncrona

/*OBS: Na leitura assíncrona, a resposta da leitura do arquivo não é o conteúdo do próprio
arquivo, mas sim será executada uma função de callback após completar a leitura de um
arquivo (de maneira síncrona). Por esse motivo, no caso, a última chamada do console.log
foi executado antes do console.log executado na leitura assíncrona*/

//Leitura de um diretório
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo de uma pasta')
    console.log(arquivos)
})
/*O resultado é um array de arquivos que fazem parte do diretório atual 
(no caso, a pasta Node)*/
