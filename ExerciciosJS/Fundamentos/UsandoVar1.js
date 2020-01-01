//Escopo de variáveis
{
    {
        {
            {
                var sera = 'Será?'; //Geralmente as variáveis são visíveis apenas em um único bloco em que foram definidas
                console.log(sera);
            }
        }
    }
}

console.log(sera); /*No entanto, variáveis definidas como var são visíveis em todo o código se 
                    não estiverem dentro de uma função, ou seja, estão definidas 
                    implicitamente dentro de um objeto window, que representa toda a janela do navegador. 
                    Logo, são variáveis globais.*/

function teste(){
    var local = 123;
    console.log(local);
}

teste();
console.log(local); //Erro! O escopo da variável 'local' é dentro da função teste(). Logo, não ficará visível fora da função.