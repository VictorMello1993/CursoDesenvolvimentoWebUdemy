//Sintaxe da criação de funções arrow
let dobro = function (num){ //Função tradicional
    return 2 * num;
}

//Função arrow com um parâmetro e com escopo
dobro = (num) => {
    return 2 * num;
}

//Função arrow com um parâmetro e de uma única linha (retorno implícito)
dobro = (num) => 2 * num;
console.log(dobro(Math.PI));

let teste = () => 'teste';
console.log(teste());

//Função arrow com mais de um parâmetro
let teste2 = (num1, num2) => num1 *= num2;
console.log(teste2(500,10));