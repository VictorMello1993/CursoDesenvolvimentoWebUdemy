// var numero = 1;
let numero = 1;
{
    // let numero = 2;
    let numero2 = 1;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);

/*Variáveis definidas como let possuem apenas 1 escopo. É um escopo de bloco, ou seja, somente serão visíveis se forem
declaradas apenas dentro de um bloco, sendo ou não uma função, diferentemente das variáveis var*/
