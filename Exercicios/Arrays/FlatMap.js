const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Victor',
        nota: 5.5
    }, {
        nome: 'Vanderson',
        nota: 7.0
    }, {
        nome: 'Camilla',
        nota: 9.0
    }],
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Jonathas',
        nota: 8.9
    }, {
        nome: 'Luciano',
        nota: 6.5
    }, {
        nome: 'Lopes',
        nota: 7.0
    }, {
        nome: 'Deborah',
        nota: 8.5
    }]
}]

const getNotaAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno);


//Obtendo um array com as notas de todos os alunos
const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);

//Obtendo as notas dos alunos de todas as turmas usando uma única estrutura de array
Array.prototype.flatMap = function(callback) { 
    return Array.prototype.concat.apply([], this.map(callback));
}

const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);