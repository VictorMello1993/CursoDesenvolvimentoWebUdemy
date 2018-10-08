const vetor = [];

for(let i = 0; i < 10; i++){
    vetor.push(function(){
        console.log(i);
    })
}

vetor[2]();
vetor[6]();
vetor[8]();