//Como usar o this de maneira correta dentro do Node?

//Fora da função
console.log(this === global)
console.log(this === module)
console.log(this === exports)
console.log(this === module.exports)

console.log('\n')

//Dentro da função
function testar(){
    console.log(this === global)
    console.log(this === module)
    console.log(this === exports)
    console.log(this === module.exports)
    this.nome = 'Victor' //CUIDADO! O objeto está sendo alterado dentro do escopo global!
}

testar()
/*OBS: Fora da função, o this não aponta para o escopo global, e sim para o próprio módulo,
mas dentro da função, o this não aponta para o módulo, e sim para o escopo global.*/
