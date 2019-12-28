function rand({min = 0, max = 1000}){
    var teste = Math.random();
    // const valor = Math.random() * (max - min) + min
    const valor = teste * (max - min) + min;
    var resultado = Math.floor(valor);
    return resultado;
}

const obj = {max: 50, min: 40};
console.log(rand(obj));
console.log(rand({min: 955})); //O max vai retornar 1000 como valor padrão.
console.log(rand({})); //Gera valores aleatórios na faixa de 0 a 1000;
console.log(rand()); //Erro na desestruturação das variáveis que são undefined ou null, a não que seja atribuído um objeto vazio para o parâmetro da função
