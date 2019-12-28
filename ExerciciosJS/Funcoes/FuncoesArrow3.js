let comparaComThis = function (param){
    console.log(this === param)
}

// //Por padrão, se não for criado nenhum objeto no código, o escopo da variável será global (ou window se for executado direamente pelo navegador)
comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global); //Agora o this não aponta mais para o escopo global, pois a função bind() forçou para que o this aponte para o objeto criado
comparaComThis(obj);

//Neste caso, a função arrow está definida dentro do módulo de um arquivo. Portanto, o this não apontará para o escopo global
let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);