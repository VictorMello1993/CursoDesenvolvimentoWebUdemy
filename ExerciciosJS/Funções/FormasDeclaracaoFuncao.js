//Tipos de declaração de funções

/*Forma mais tradicional (function declaration - definir a palavra reservada function mais o nome da função, 
    com os seus parâmetros e com algum retorno)*/
function soma(x, y){
    return x + y;
}

//Function expression
const sub = function(x, y){
    return x - y;
}

//Named function expression
const mult = function mult(x, y){
    return x * y;
}

//OBS: Existe uma diferença em termos de execução de funções em JavaScript

/*I- Para funções do tipo function declaration, o interpretador JavaScript carrega todas as funções automaticamente
antes de executar o seu código. Ou seja, se invocar essa função antes de ela ser definida, não ocorrerá erros, pois
previamente as funções já foram interpretadas*/

/*II. Porém, para funções expression e named function expressions, o interpretador só reconhece a chamada da 
função depois que ela foi definida, pois ela está limitada por uma variável.*/