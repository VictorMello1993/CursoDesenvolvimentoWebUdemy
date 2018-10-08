console.log(typeof console);


const obj1 = {};
obj1.nome = 'Pedra';
// obj1['Idade'] = 24;
obj1['nome'] = 'Pedra2'; //Sobrescrita dos valores do atributo nome

console.log(obj1); 
console.log(obj1.nome);
// console.log(obj1.Idade);


function Obj(nome){
    this.nome = nome; //O atributo nome ficará visível apenas no momento da criação de um novo objeto to tipo Obj
    this.exec = function(){
        console.log('Executando...');
    }
}

//Criação de novos objetos através de funções construtoras
const objeto1 = new Obj('Victor Santos');
const objeto2 = new Obj('Pedro Soares');

//Acessando os membros da função Obj
console.log(objeto1.nome);
console.log(objeto2.nome);
objeto2.exec();

