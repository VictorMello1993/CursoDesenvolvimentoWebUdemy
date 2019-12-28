//Armazenando uma função numa variável
const somar = function(a, b){ //Função anônima
    console.log(a + b);
}


//Formas mais reduzidas de declarar uma função
somar(4 ,2);
const soma = (a, b) => { //Função Arrow
    return a + b;
}

console.log(soma(1000, 5000));

//Retorno implícito
const subtracao = (a, b) => a - b; //Função que executa uma única linha de código
console.log(subtracao(500, 200));

//Função arrow que recebe apenas um parâmetro
const soma2 = a => console.log(a);
soma2('Olá mundo!');