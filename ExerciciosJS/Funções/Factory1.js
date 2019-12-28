//Função factory - Função que retorna objetos

//Factory simples
function criarPessoa(){
    return {
        nome: 'Victor',
        sobrenome: 'Mello'
    }
}

console.log(criarPessoa()); //A partir de uma chamda da função, automaticamente o objeto é criado com o seu retorno

