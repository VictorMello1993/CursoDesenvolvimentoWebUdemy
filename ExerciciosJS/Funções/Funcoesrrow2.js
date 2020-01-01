
//Resolução do problema do uso do this através de funções arrow
function Pessoa(){
    this.idade = 0;
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

new Pessoa();