/*Herança baseada em protótipos: um protótipo é um objeto que possui uma referência que aponta para os seus
descendentes. Ou seja, se definirmos e tentarmos acessar os atributos de um objeto que esteja na hierarquia
de protótipos, JavaScript irá consultar os atributos que estão no contexto em que foram definidos. Se não
existir um atributo de um objeto X, ele percorre para o nível mais acima da hierarquia, do seu pai, o Y,
verificando se o mesmo atributo está definido nele. Caso não exista também neste objeto, será percorrido
para o nível mais acima deste objeto, até encontrar. Se o último objeto da hierarquia não possuir o atributo
que se deseja encontrar, o valor deste atributo será undefined*/

/*Por definição, em JavaScript, todo objeto possui um atributo, de maneira implícita, chamado prototype,
que é uma referência que aponta para o seu objeto pai (geralmente o pai seria Object.prototype, mas podemos
alterar a referência de um protótipo. Exemplo, a partir dos objetos Gato e Cachorro, podemos alterar a
referência de Object.prototype criando um objeto chamado Animal)*/


const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//O atributo __proto__ indica quem é o pai de um objeto filho
console.log(ferrari.__proto__);
console.log(volvo.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__); /*Object.prototype, como é pai de todos os objetos do JavaScript,
                                          nunca terá um objeto pai do mesmo*/
console.log(Object.prototype.__proto__ === null);

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);
console.log(ferrari.prototype);