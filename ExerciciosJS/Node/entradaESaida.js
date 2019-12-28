const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

//A tela irá apresentar a mensagem no console toda vez que o usuário executa o flag -a
if(anonimo){ 
    process.stdout.write('Olá mundo!\n')
    process.exit() //Matando o processo
} else {
    process.stdout.write('Informe o seu nome: ') 
    process.stdin.on('data', data => { 
        const nome = data.toString().replace('\r\n', '')

        process.stdout.write(`Olá, ${nome}!!\r\n`)
        process.exit()
    })
}

//process.stdout.write() - Saída de dados no console
//process.stdin.on('nomeEvento') - Entrada de dados no console

//Por padrão, o evento mais utilizado é ondata, onde o mesmo é disparado quando o usuário pressiona ENTER