function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); //Usando o XOR
    //Ou
    const comprarTv32 = trabalho1 != trabalho2; //Usando o XOR
    const manterSaudavel = !comprarSorvete;

    return{comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
}

console.log(compras(true, true));
console.log('\n');
console.log(compras(true, false));
console.log('\n');
console.log(compras(false, true));
console.log('\n');
console.log(compras(false, false));

