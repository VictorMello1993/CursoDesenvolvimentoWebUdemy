//Importação/Exportação de arquivos (módulos) do Node para outros módulos

//Formas de importar/exportar módulos no Node

/*1) Usando o this numa variável que representa uma propriedade de um objeto torna
visível a outros módulos*/

//Antes de adicionar atributos ao objeto - Resultado: objeto vazio
console.log(this);
this.ola = 'Olá mundo!';


//2)Usando o objeto exports
exports.bemVindo = 'Bem vindo ao node';

//3)Usando o module.exports
module.exports.ateLogo = 'Até a próxima';

//Após a adição dos atributos ao objeto contido em um módulo
console.log(this);