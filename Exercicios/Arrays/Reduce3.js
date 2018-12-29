//Implementação da função reduce

//Sem o valor inicial
Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0];
    for(let i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this);
    }

    return acumulador;
}

//Com o valor inicial
Array.prototype.reduce3 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1;
    // let acumulador;

    //Verificando se o valor inicial está setado
    // if(valorInicial){
    //     acumulador = valorInicial;

    // } else {
    //     acumulador = this[0];
    // }

    //Ou 
    let acumulador = valorInicial || this[0];
    
    for(let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this);
    }
    return acumulador;
}

const soma = (total, valor) => total + valor;
const numeros = [1,2,3,4,5,6];

// console.log(numeros.reduce2(soma));
console.log(numeros.reduce3(soma,21));