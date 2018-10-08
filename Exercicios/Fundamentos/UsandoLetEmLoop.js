for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log('i = ', i); /*ERRO! O iterador i, como foi definido como let, será visível apenas dentro de um FOR, e fora
                          dele, não houve nenhuma declaração desta mesma variável*/