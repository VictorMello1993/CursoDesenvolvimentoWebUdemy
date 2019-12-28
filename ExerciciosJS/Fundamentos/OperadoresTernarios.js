//Função arrow que compara a média dos alunos (sem escopo)
// const resultado = media => media >= 7 ? 'Aprovado' : 'Reprovado';

//Função arrow com escopo
const resultado = media => {
    const status = media >= 7 ? 'Aprovado' : 'Reprovado';
    return status;
}

console.log(resultado(7.1));
console.log(resultado(5.5));

