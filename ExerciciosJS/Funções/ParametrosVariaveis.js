function soma(){
    let soma = 0;
    for(i in arguments){ //A propriedade arguments recupera todos os parâmetros que foram passados na chamada da função que por definição não possui
        soma += arguments[i];
    }
    return soma;
}

// console.log(soma());
// console.log(soma(5));
console.log(soma(1.1,2.2,3.3));
// console.log(soma(1.1,2.2, "Teste"));
// console.log(soma('a', 'b', 'c'));