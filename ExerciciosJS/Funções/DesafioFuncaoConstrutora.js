function pessoa(nome, idade){
    // let nome;
    // let idade;

    this.nome = nome;
    this.idade = idade;

    this.falar = function(){
        return `Olá, meu nome é ${nome}. Tenho ${idade} anos.`
    }

    // this.setNome = function(nome){
    //     this.nome = nome;
    // }

    // this.setIdade = function(idade){
    //     this.idade = idade;
    // }

    this.getNome = function(){
        return nome;
    }

    this.getIdade = function(){
        return idade;
    }
}

// const p1 = new pessoa;
const p1 = new pessoa('Victor', 24);
// p1.setNome('Victor');
// p1.setIdade(24);
p1.falar();
console.log(p1.falar());
console.log(p1.getNome());
console.log(p1.getIdade());




