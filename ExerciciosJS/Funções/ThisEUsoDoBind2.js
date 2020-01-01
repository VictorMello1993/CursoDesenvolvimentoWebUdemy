function pessoa(){
    this.idade = 0;
    const self = this;

    setInterval(function(){ //setInterval dispara uma função a partir de um intervalo definido. No caso, a cada 1000ms a função anônima será executada
        // this.idade++;
        self.idade++;
        console.log(self.idade)
    }/*.bind(this)*/, 1000);
}

new pessoa();

/*Com relação ao uso do this, este não aponta para o objeto pessoa, pois quem invocou a função anônima a partir do setInterval foi o temporizador,
  2º parâmetro do setInterval(). Porém, com o uso do bind passando o objeto pessoa (o 'this') resolveria este problema*/

  /*Existe uma gambiarra de burlar a mudança de contexto do this criando uma constante (geralmente chamado self). Passando o this para
  essa constante determina que, independentemente do contexto de execução, sempre irá apontar para o objeto que foi definido, desde que 
  esteja executando diretamente no seu escopo*/