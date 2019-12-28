const notas = [7.7, 8.0 , 5.5, 4.2, 10];

//Sem callback
let notasBaixas = [];
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas);

//Com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7;
})
console.log(notasBaixas2);

//Utilizando a função arrow
const notasMenorQue7 = nota => nota < 7;
// const notasBaixas3 = notas.filter(nota => nota < 7);
const notasBaixas3 = notas.filter(notasMenorQue7);
console.log(notasBaixas3);