const alunos = [
    {nome: 'Victor', nota: 8.0},
    {nome: 'Vanderson', nota: 5.5}
];


/*Imperativo => Como deve ser feito? Os detalhes da 
implementação de funções são mais importantes do que uma simples declaração*/ 
let total1 = 0;
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);


/*Declarativo => O que deve ser feito? Os detalhes internos de uma função não são
                 importantes. Declarando uma função já é suficiente para atender
                 a um certo objetivo do problema, pois internamente já executa
                 todo o passo-a-passo da implementação de uma função*/

const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);


