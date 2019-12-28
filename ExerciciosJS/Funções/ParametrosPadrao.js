//Definindo valor padrão dos parâmetros da função
//Antes do lançamento do ECMA 2015
//Forma 1:
function soma1(a, b, c){
    //Definindo valores padrão de a, b e c = 1
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0));

//Forma2:
function soma2(a,b,c){
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1; //Passando o índice 1 (2º parâmetro) a ser testado
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0));

//Após o lançamento do ECMA 2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0));

