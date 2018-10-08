let valor; //Não inicializada
console.log(valor); //Por padrão, uma variável é sempre undefined, que não inicializada no decorrer do seu código

valor = null; //Neste caso, o valor foi definida, mas não aponta para nenhuma referência de memória, significa ausência de valor
console.log(valor);

const produto = {}; //Criando um objeto vazio
console.log(produto.preco); // O preço não está definido no objeto produto, portanto a saída será undefined
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; /*Não é recomendável atribuir undefinded para uma variável, 
                            uma vez que o JavaScript já realiza todo o critério de verificação 
                            de que uma variável está ou não definida*/
console.log(produto);
console.log(produto.preco);

// delete produto.preco; //Removendo o atributo preco da definição do objeto produto
console.log(produto); //Retorna vazio, sem atributos

produto.preco = null;
console.log(produto);
console.log(produto.preco);
console.log(!!produto.preco); //A saída será false
console.log(produto);

