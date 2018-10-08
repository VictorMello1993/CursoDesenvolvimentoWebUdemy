//Objetos são coleções dinâmicas de pares chave e valor

//Criando um objeto através de uma função Object
const produto = new Object;

//Uma das formas de definir atributos dinamicamente de um objeto
produto.nome = 'Notebook';
produto['Nome da marca'] = 'Dell'
produto.preco = 5000;

console.log(produto);
console.log('\n');

//Excluindo atributos de um objeto
delete produto.preco; //Eliminando o atributo preco
delete produto['Nome da marca']; //Eliminando o atributo Nome da marca
console.log(produto);
console.log('\n');

const carro = {
    modelo: 'A4',
    valor: 90000,
    proprietario : {
        nome: 'Victor Santos',
        idade: 24,
        //Um objeto pode conter outro objeto como seu atributo
        endereco: {
            logradouro: 'Avenida Miguel Antônio Fernandes',
            numero : 31,
            complemento: 'Casa 62'
        }
    },
    //Um objeto pode conter arrays de objetos como atributos
    condutores: [{
        nome: 'Vanderson Guidi',
        idade: 33
    }, {
        nome: 'Maxuel Santana',
        idade: 35
    }],
    //Um objeto pode conter funções como atributos
    calcularValorSeguro: function(){

    }
}

//Acessando atributos de um objeto
carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Rua ABC'
console.log(carro);
console.log('\n\n');

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;

console.log(carro);
// console.log(carro.condutores.length);