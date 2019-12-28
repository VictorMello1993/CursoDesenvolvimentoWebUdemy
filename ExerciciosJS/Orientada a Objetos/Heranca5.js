console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

//Adicionando a funcionalidade da função String que permite inverter a cadeia de caracteres de uma string
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

//Sem definir no protótipo do objeto contido na string
const str = 'Victor';
console.log(str.split('').reverse().join(''));

//Com protótipo de objeto de string, usa-se apenas a forma literal
console.log('Victor'.reverse());

//Adicionando uma nova funcionalidade da função Array que retorna o primeiro elemento de um array
Array.prototype.first = function() {
    return this[0];
}

console.log([1,2,3,4,5].first());
console.log(['a', 'b', 'c', 'd'].first());


/*CUIDADO! Evite sobrescrever funções que já existem no protótipo de uma função, pois poderá gerar efeitos
colaterais quando utilizar outras funções do protótipo, como é o caso da função toString(). Todas
as funções de JavaScript internamente utilizam toString().*/ 
String.prototype.toString = function() {
    return 'Deu ruim';
}
console.log('Victor'.reverse()); //LASCOU TUDO =X
