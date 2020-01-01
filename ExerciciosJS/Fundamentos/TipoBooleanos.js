let isAtivo = false; //Usando um literal
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(isAtivo); //Neste caso o valor retornado não é mais do tipo booleano, mas sim o tipo Number

isAtivo = 'Sim';
console.log(isAtivo); //Agora passou a ser uma string

console.log(!isAtivo); //Invertendo o valor lógico da variável isAtivo
console.log(!!isAtivo); //NOT duas vezes faz com que o valor booleano seja original
console.log(isAtivo);

//Os tipos que sempre retornam o valor true
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log(!!33);

//Os tipos que sempre retornam o valor false
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log(!!('' || null || 0 || 'teste')); /*Retorna true pois pelo menos um das assertivas deve ser verdadeiro
                                              Nesse contexto, como o valor padrão para '' null e 0 são falsos,
                                              no fim das contas o valor padrão retornado no console.log será true,
                                              devido ao texto 'teste' existente nesse mesmo contexto de valores
                                              lógicos*/

                                             /*O operador || não somente retorna o valor lógico em uma expressão
                                              lógica, mas define os valores padrões das variáveis*/

let teste = '';
// teste = 'Desconhecido';
console.log(teste || 'Victor'); 

