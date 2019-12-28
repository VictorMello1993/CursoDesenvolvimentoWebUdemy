//Função prototype

function MeuObjeto(){
    console.log(MeuObjeto.prototype);
}

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);
console.log(obj1.__proto__ === Object.prototype);

/*Ao criar um objeto utilizando a função construtora através do operador new, 
o protótipo deste objeto passa a apontar para a função que foi definida, e não mais para Object.prototype.
Definindo objetos na forma literal ou a partir de new Object, por padrão o seu protótipo 
aponta para Object.prototype.*/

MeuObjeto.prototype.nome = 'Anonimo';
MeuObjeto.prototype.falar = function(){console.log(`Bom dia! Meu nome é ${this.nome}`)};
/*Qualquer objeto que for instanciado a partir de MeuObjeto terá acesso aos atributos nome e o 
método falar() do seu protótipo, do pai.*/

obj1.falar();
obj2.nome = 'Victor';
obj2.falar();

//Agora vamos ver a situação para objetos literais
const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; 
obj3.nome = 'Zezinho';
obj3.falar();

/*Ao criar um objeto na forma literal, se deseja que o mesmo aponte para o protótipo da função 
que foi definida em vez de Object.prototype, deverá atribuir o MeuObjeto.prototype para o protótipo do 
objeto criado, o seu atributo __proto__ O processo é manual*/

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
console.log(Object.prototype.__proto__ === undefined);

console.log(MeuObjeto.prototype);

console.log(typeof MeuObjeto,typeof MeuObjeto.prototype);
console.log(typeof obj1.__proto__);

/*Como se pode perceber, MeuObjeto.prototype é um objeto, assim como o atributo que representa o conceito
de protótipo do objeto - __proto__ -. Logo, tanto obj1.__proto__ quanto obj2.__proto__ apontam para
MeuObjeto.prototype*/

console.log(typeof MeuObjeto.__proto__, typeof Function.prototype);
