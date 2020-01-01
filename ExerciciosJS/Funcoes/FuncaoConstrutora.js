//Função construtora - Função que pode ser definida como uma classe para instanciá-la
function Carro(velocidadeMaxima = 200, delta = 5){
    //Atributo privado
    let velocidadeAtual = 0;

    //Método público
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;

        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

//Método publico - Método de acesso get para obter um atributo privado
this.getVelocidadeAtual = function(){
    return velocidadeAtual;
}

//Método privado
// let getVelocidadeAtual = function(){
//     return velocidadeAtual;
// }

}
//Instanciando uma classe
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual());


const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());


//Para definir o método privado, basta definir a função dentro da classe como sendo const ou let