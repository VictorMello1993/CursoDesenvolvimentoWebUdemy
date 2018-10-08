function tratarErro(erro){
    // throw new Error('ERRO DESCONHECIDO!'); //Criando uma exceção personalizada;
    // throw 10;
    // throw true;
    // throw 'mensagem';
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!!!');
    } catch(e){
        tratarErro(e);
    } finally{
        console.log('Fim do código');
    }
}

const obj = {
    nome: 'Victor'
    // name: 'Victor'
};
imprimirNome(obj);