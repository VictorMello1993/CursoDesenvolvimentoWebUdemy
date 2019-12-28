
//Exemplo 1: criando objeto
const teste = {
    nome : 'Victor Santos',
    idade : 24,
    endereco : {
        logradouro : 'Av Miguel Antonio Fernandes 31 Casa 62',
        cidade : 'Rio de Janeiro',
        UF: 'RJ',
        CEP : 22790682
    }
};

//Acessando os membros do objetos
console.log(teste.nome, teste.sobrenome, teste.idade);

//Utiizando o operador destructuring para acessar variáveis de um atributo
const {nome, idade} = teste;
console.log(nome, idade);

//Alterando os nomes das variáveis
const {nome: n, idade: i} = teste;
console.log(n, i);

const{sobrenome, bemHumorado = false} = teste;
console.log(sobrenome, bemHumorado);

const{endereco : {logradouro, cidade, numero}} = teste;
console.log(logradouro, cidade, numero); //Neste caso, o atributo número não está setado dentro do objeto teste, portando o valor será undefined



