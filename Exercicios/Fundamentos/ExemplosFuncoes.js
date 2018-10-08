
//Função sem retorno
function soma(a, b){
    console.log(a + b);
}

soma(4,2);
soma(4); //Irá retornar NaN, pois o segundo parâmetro não recebeu o valor passado (valor + undefinded = NaN)
soma(1,19,3,4,5); //Neste caso, a função terá o seu valor retornado válido, pois já foram passados os valores para todos os parâmetros da função

soma(); //Irá retornar NaN, pois a soma dos valores das variáveis com undefined resulta em NaN
console.log(undefined + undefined);

//Função com retorno
function soma2(a,b = 0){
    return a + b;
}

console.log(soma2(500, 200));
console.log(soma2(500)); //Irá retornar o valor 500, pois o segundo parâmetro foi inicializado com valor 0 como valor padrão.

function soma3(a, b = 500){//Definindo 500 como valor padrão de b
return a + b;
} 
console.log(soma3(1000));
console.log(soma3(1000, 2500));
console.log(soma3()); //Se não passar nenhum valor para os parâmetros definidos na função, o resultado será NaN

function soma4(a = 500, b = 500){
    return a + b;
}

console.log(soma4(1000, 5000));
console.log(soma4(1000));
console.log(soma4(6000));
console.log(soma4()); //Neste caso, como foram definidos os valores padrões para todos os parâmetros da função, o resultado nunca será NaN para todos os casos
console.log(soma4(1000, undefined)); //Até mesmo passando undefined, o valor retornado nunca será NaN
console.log(soma4(5000, null)); //Passando null ao um dos parâmetros da função, ele receberá o valor 0
console.log(soma4(null, null)); //Passando null para todos os parâmetros envolvidos, o valor retornado pela função será 0
console.log(soma4(undefined, undefined)); //Retornará a soma dos valores padrões dos parâmetros


