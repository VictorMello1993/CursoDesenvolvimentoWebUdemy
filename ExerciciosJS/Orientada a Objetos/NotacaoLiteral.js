const a = 1;
const b = 2;
const c = 3;

//Antes do lançamento do ECS6:
const obj1 = {a: a, b: b, c: c};

//Após o lançamento do ECS6:
const obj2 = {a, b, c};
console.log(obj1, obj2);

//Criando um atributo de um objeto a partir das variáveis
const nomeAtributo = 'Nota';
const valorAtributo = 9.50;
const obj3 = {};
obj3[nomeAtributo] = valorAtributo;
console.log(obj3);

const obj4 = {[nomeAtributo]: valorAtributo};
console.log(obj4);

//Definição de funções dentro de um objeto na forma literal
//Antes do ECS6
const obj5 = {
    funcao1: function(){
        //...
    },
    //Depois do lançamento do ECS6
    funcao2(){
        //...
    }
}

console.log(obj5);