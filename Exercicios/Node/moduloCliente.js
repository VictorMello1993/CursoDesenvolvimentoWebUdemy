/*Este módulo será utilizada para acessar os módulos moduloA.js e moduloB.js, ou seja,
para importação dos mesmos*/

//Importando o arquivo moduloA

//usando o padrão commons.js, que representa sistemas de módulos do node.js
const moduloA = require('./moduloA'); /*Usando o caminho relativo para referenciar
                                        o módulo que está presente no seu projeto*/

//Importando o moduloB.js
const moduloB = require('./moduloB');

//Acessando os módulos importados
console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);
console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());
console.log(moduloB);