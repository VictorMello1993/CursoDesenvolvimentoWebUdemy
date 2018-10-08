//Herança em classes

class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome;

    }
}

//Estabelecendo uma herança de classes
class Pai extends Avo{
    constructor(sobrenome, profissao = 'Analista de Sistemas'){
        super(sobrenome); //Chamando o construtor da superclasse
        this.profissao = profissao;
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva');
    }
}

const filho = new Filho;
console.log(filho);

const pai = new Pai('Barreiros de Mello', 'Contador');
console.log(pai);

const pai2 = new Avo('Rocha Santos', 'Militar');
console.log(pai2);

/*OBS: Uma classe em JavaScript, uma vez instanciada, será convertida para função construtora. 
Isso ocorre graças à função constructor()*/
