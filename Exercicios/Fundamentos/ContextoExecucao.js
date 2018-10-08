let a = 3;
global.b = 'teste';
this.c = 456;
this.d = 'teste';
this.e = false;

console.log(a);
console.log(this.a);
console.log(global.a);
console.log(global.b); //Global em node.js é equivalente ao objeto window sendo executado no navegador
//Ou...
console.log(b);

console.log(this.c);
console.log(module.exports.c); /*É equivalente ao declarar "this" numa variável recebendo algum valor. 
                                 Dessa forma, essa variável será exportada para fora do arquivo que representa um módulo.
                                 Em node.js, cada arquivo é organizado de forma modularizado, diferentemente quando
                                 o programa é executado diretamente pelo navegador, no qual os arquivos muitas 
                                 vezes são minificados, tornando menos pesados para execução direta no escopo global
                                 (window)*/

console.log(module.exports === this);
console.log(module.exports); //Irá retornar um objeto cujas variáveis definidas com o "this" representam as suas propriedades
module.exports = {h: 456, i: 'teste', j: false};
console.log(module.exports);

abc = 3; //Criando uma variável ocultando o var o let é equivalente a definí-la no escopo global
console.log(global.abc);
abc = 'teste'; //Irá sobrescrever o valor da variável abc previamente definida
console.log(abc);