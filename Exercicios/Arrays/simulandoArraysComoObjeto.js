const quaseArray = {0: 'Victor', 1: 'Pedro', 2: 'José', 3: 'Camilla'};
console.log(typeof quaseArray);

//Adicionando a propriedade toString no objeto para simular como se fosse um array
Object.defineProperty(quaseArray, 'toString', {
    value: function(){return Object.values(this)},
    enumerable: false,
});

console.log(quaseArray[0]); //Acessando o primeiro atriubito do objeto;

const arrayCompleto = ['Victor', 'Pedro', 'José', 'Camilla'];
console.log(quaseArray.toString(), arrayCompleto);

