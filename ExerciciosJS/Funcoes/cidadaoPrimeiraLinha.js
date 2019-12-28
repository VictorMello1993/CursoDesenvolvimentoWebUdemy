//Criar função de forma literal. Por padrão uma função em JavaScript retorna undefined se não for especificado o return
function f1(){

}


//Armazenar função numa variável
const f2 = function(){

}

//Armazenar função num array
const array = [function(a, b){return a + b}, f1, f2];

//OBS: funções em JavaScript representam dados como qualquer outro tipo de dado

//Acessando o primeiro índice do array que representa a chamada da função anônima.
console.log(array[0](2,3));


//Armazenar funções como atributos de um objeto
const obj = {}
obj.falar = function(){return 'Olá!'};
console.log(obj.falar());

//Armazenar funções como parâmetros de outras funções
function run(func){
    func();
}
run(function(){console.log('testando...')});

//Uma função pode retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c);
    }
}
soma(2,3)(4);

const resultado = soma(10,20); //Retornando parte do retorno da função para ser utilizada como uma chamada para uma nova função.
resultado(500);
