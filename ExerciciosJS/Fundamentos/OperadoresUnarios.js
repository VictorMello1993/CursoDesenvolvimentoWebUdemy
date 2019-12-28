let a = 2, b = 1;

--a;
b++;

console.log(a, b);

console.log(++a === b--); /*O valor será false, pois o segundo operando só será decrementado após a comparação com o
                            primeiro operando que está sendo incrementado antes de ser comparado*/


console.log(a === b); //Neste caso, estão sendo comparados os valores que foram atribuídos após os resultados dos incrementos