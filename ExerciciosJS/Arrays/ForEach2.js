//Implementando a função forEach do array manualmente
Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);        
    }
} 

const aprovados = ['Victor', 'Camilla', 'Vanderson', 'Maxuel'];

/*Percorrendo os elementos do array utilizando o forEach, que internamente percorre todos os elementos
do array chamando a função de callback passado para forEach()*/
aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`);
    // console.log(`${array}`); //Neste caso estaria imprimindo um array inteiro por iteração. No total foram 4 vezes
    // console.log(`${indice + 1}`) //Imprimindo apenas indices;
    // console.log(array);
});

