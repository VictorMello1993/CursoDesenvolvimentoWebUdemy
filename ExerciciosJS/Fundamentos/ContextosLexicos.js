// var saudacao = 'Olá';
// let saudacao = 'Olá!'; //Contexto léxico  1
const saudacao = 'Olá!';

function exec(){
    // const saudacao  = 'Eae'; //Contexto léxico 2
    return saudacao;
}

/* const saudacao = 'Epa!!!'; Erro! Nunca se pode redaclarar uma variável com o mesmo nome que esteja no mesmo contexto léxico,
                            com exceção das variáveis declaradas como var e let*/                   
// var saudacao = 'Epa!!';
//let saudacao = 'Epa!!';
const saudacao = 'Epa!!';

const cliente = {
    nome : 'Victor Santos',
    idade : 24,
    peso : 59,
    endereco : {
        logradouro : 'Avenida Miguel Antônio Fernandes',
        numero : 31,
        complemento : 'Casa 62'
    }
}


console.log(saudacao);
console.log(exec()); /*Se a variável com o mesmo nome não for encontrada dentro de um contexto de função, o JavaScript
                        irá procurar esta variável que esteja em um contexto mais próximo, no caso está no contexto 
                        do navegador (está dentro do objeto Window)*/

