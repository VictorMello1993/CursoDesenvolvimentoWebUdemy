function area(largura, altura){
    const area = largura * altura;
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2`);

    } else {
        return area;
    }
}

console.log(area(2,2));
console.log(area(2)); //O 2º parâmetro será undefined, e o retorno da função será NaN, pois ao realizar qualquer operação de um valor válido com o undefined, o resultado será NaN
console.log(area()); //Os parâmetros irão receber undefined, e o resultado do retorno será NaN
console.log(area(2, 3, 17, 22, 44)); //Apenas o 1º e o 2º parâmetros serão utilizados na função, enquanto o restante será ignorado
console.log(area(5,5)); //O retorno da função será undefined, pois não foi especificado o valor de retorno desta função