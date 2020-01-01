var numero = 1;
{
    var numero  = 2;
    console.log('dentro = ', numero);
}

console.log('fora = ', numero); /*OK! As variáveis estão no mesmo escopo (Window), nenhuma delas foi definida dentro de
                                    uma função. Porém, é preciso tomar o máximo de cuidado para não redeclarar uma
                                    variável var de um mesmo nome (ou mesmo identificador), pois ela sobrescreve o
                                    valor que foi atribuído no contexto anterior, só pelo fato de estar no mesmo
                                    escopo que a nova variável var, podendo causar conflito de nomes*/

