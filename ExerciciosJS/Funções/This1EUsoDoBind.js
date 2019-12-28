const pessoa = {
    saudacao: 'Olá, mundo!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar();

const falar2 = pessoa.falar;
falar2(); //Será undefined, pois o this não aponta mais para o objeto 'pessoa'. Ocorrerá conflito de paradigmas: funcional e OO

//Para resolver esse problema, utiliza-se a função bind(), para que o objeto seja responsável pela execução da função falar(), logo o 'this' passará a apontar para o objeto 'pessoa'
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();