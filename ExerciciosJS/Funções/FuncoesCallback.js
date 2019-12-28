const videogames = ['PlayStation4', 'XboxONE', 'NintendoSwitch']

function imprimir(nome, indice){
    console.log(`${indice + 1} - ${nome}`);
}

videogames.forEach(imprimir);
videogames.forEach(function(marca){
    console.log(marca);
})

//Função de callback usando a função arrow
videogames.forEach(marca => console.log(marca));

/*Função de callback: é uma função que é disparada por outras funções quando algum evento ocorrer na execução de um código.
                       Um bom exemplo disso é requisição AJAX, quando um cliente realiza várias 
                       requisições para o servidor que irá tratar os dados através de uma chamada de callback
                       de sucesso, ou de erro caso a requisição falhe. Considerando o exemplo acima, o evento que 
                       está ocorrendo é o looping da função forEach para percorrer cada elemento
                       do array e utilizá-lo como parâmetro da função de callback imprimir*/
