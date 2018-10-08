//Exemplo de callback no navegador
// document.getElementsByTagName('body')[0].onclick = function (e){
//     console.log('O click ocorreu');
// }

const eventoClique = function(e){
    console.log('O click ocorreu');
}
document.getElementsByTagName('body')[0].onclick = eventoClique;