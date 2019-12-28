//Classe - lançando no ECMAScript 2015
class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Victor');
p1.falar();

const criarPessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    };
}

const p2 = criarPessoa('Victor');
p2.falar();