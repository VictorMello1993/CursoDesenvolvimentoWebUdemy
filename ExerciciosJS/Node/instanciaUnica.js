//Importando o módulo trantando como uma instância única (singleton), pois o Node realiza o cache dos módulos
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}