//Formas diferentes de se criar objetos em JavaScript

//Forma literal
const obj = {};
console.log(obj);

//Object JS
console.log(typeof Object);
const obj1 = new Object;
console.log(typeof obj1);

//Funções construtoras
function produto(nome, preco, desconto){
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto);
    }
}

const p1 = new produto('Caneta', 5.99, 0.10);
const p2 = new produto('Notebook', 2000, 0.20);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//OBS: a variável nome será visível no escopo global, pois não está definida dentro de um objeto ou de uma função.
//Porém, não é possível alterar os valores das variáveis preco e desconto, pois estão visíveis apenas dentro da função getPrecoComDesconto()


//Função factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4);
const f2 = criarFuncionario('Victor', 1900, 1);
console.log(f1.getSalario(), f2.getSalario());

//Object,create
const filha = Object.create(null);
filha.nome = 'Victor'
console.log(filha);

//Função que converte um JSON para um objeto 
const fromJson = JSON.parse('{"Info": "Sou um JSON"}')
console.log(fromJson.Info);