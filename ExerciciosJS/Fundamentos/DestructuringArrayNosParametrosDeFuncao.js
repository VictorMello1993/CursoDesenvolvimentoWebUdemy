function rand([min = 0, max = 1000]){
    if(min > max){
        [min, max] = [max, min]; //Invertendo o valor mínimo e máximo
    }
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([992])); //Passando apenas o valor mínimo
console.log(rand([50, 40]));
console.log(rand([,10])); //Passando apenas o valor máximo, o 2º elemento do array
console.log(rand([])); //A função retorna valores aleatórios na faixa de 0 a 1000
console.log(rand()); //Erro! Não é possível desestruturar variáveis que retornam undefined ou null, a não ser que seja atribuído um array vazio para o parâmetro da função


