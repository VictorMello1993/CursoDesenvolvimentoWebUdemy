//Cadeia de protótipos (prototype chain)
//Exemplo 1
const avo = {atr: 'A'};
const pai = {__proto__: avo, atr: 'B'}; /*Este objeto está apontando para o objeto pai, o objeto avo,
                                           atribuindo a referencia do avo para o atributo do pai que contém
                                           __proto__*/ 

const filho = {__proto__: pai, atr2: 'C'};
console.log(filho.atr); /*atr não está definido no objeto filho nem no pai, mas existe no objeto avo. Portanto
                          eles estão na mesma hierarquia de protótipos*/

console.log(filho.atr0); /*Neste caso, este atributo não está definido em todos os objetos da hierarquia
                          de protótipos nem para Object.prototype*/

Object.prototype.atr0 = 'Z'; //Não é recomendável que faça isso, pois pode impactar nos outros objetos da hierarquia dentro do seu código
console.log(filho.atr0, filho.atr, filho.atr1, filho.atr2, filho.atrA);


//Exemplo 2
const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta;

        } else {
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 /*Ocorrerá o sombreamento de atributos. O interpretador sempre busca atributos dos 
                  objetos do nível mais interno para o nível mais externo da hierarquia de protótipos*/
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` /*Sombreamento de métodos, chamando o objeto mais externo da hierarquia 
                                                    através da palavra reservado super*/
    }
}

//Estabelecendo uma herança
Object.setPrototypeOf(ferrari, carro); //1º parâmetro: objeto filho - 2º parâmetro - protótipo do objeto especificado
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.aceleraMais(300);
console.log(volvo.status());

ferrari.aceleraMais(300);
console.log(ferrari.status());
