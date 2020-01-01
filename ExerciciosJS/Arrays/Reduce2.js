

const alunos = [{nome: 'Victor', nota: 7.5, bolsista: false},
                {nome: 'Pedro', nota: 5.5, bolsista: true},
                {nome: 'Camilla', nota: 8.0, bolsista: false},
                {nome: 'Ana', nota: 4.3, bolsista: true}];



//Desafio 1: Retornar um booleano testando se todos os alunos são bolsistas

//Desafio 2: Retornar um booleano testando se algum aluno é bolsista



//1)
const todosOsAlunosSaoBolsistas = (inicial, atual) => inicial && atual;
console.log(alunos.map(a => a.bolsista).reduce(todosOsAlunosSaoBolsistas));

//2)
const algumAlunoEhBolsista = (inicial, atual) => inicial || atual;
console.log(alunos.map(a => a.bolsista).reduce(algumAlunoEhBolsista));

