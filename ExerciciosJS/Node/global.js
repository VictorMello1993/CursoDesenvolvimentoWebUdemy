/*Assim como o navegador, o Node também possui objeto global o qual permite que seja 
visível em qualquer arquivo*/

// global.MinhaApp = {
//     sistema: 'Sistema XPTO',
//     saudar(){
//         return 'Olá, mundo!'
//     }
// }

global.MinhaApp = Object.freeze({
    sistema: 'Sistema XPTO',
    saudar(){
        return 'Olá, mundo!'
    }
})
