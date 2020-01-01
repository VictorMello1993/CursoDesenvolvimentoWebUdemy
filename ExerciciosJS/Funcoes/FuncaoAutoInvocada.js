//IIFE -> Immediately Invoked Function Expression

/*É utilizada para acessar ou manipular variáveis e outras funções com intuito de fugir do escopo global.
Ou seja, tudo o que for definido dentro da função, será disponível apenas dentro de funções*/

(function(){
    console.log('Será executada na hora!');
    console.log('Foge do escopo mais abrangente');
})();