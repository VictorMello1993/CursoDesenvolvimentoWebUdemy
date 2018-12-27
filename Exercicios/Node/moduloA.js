//Importação/Exportação de arquivos (módulos) do Node para outros módulos

//Antes de adicionar atributos ao objeto - Resultado: objeto vazio
console.log(this);

//Formas de importar/exportar módulos no Node

/*1) Usando o this numa variável que representa uma propriedade de um objeto torna
visível a outros módulos*/
this.ola = 'Olá mundo!';

//2)Usando o objeto exports
exports.bemVindo = 'Bem vindo ao node';

//3)Usando o module.exports 
module.exports.ateLogo = 'Até a próxima';

//Após a adição dos atributos ao objeto contido em um módulo
console.log(this);

//OBS: usando o this, exports ou module.exports (a mais comum) criam um objeto dentro de um módulo.