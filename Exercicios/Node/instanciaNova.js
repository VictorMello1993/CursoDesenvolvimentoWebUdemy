/*Uma função factory trata módulos como objetos diferentes, ou seja, cada exportação de um módulo com a
função factory representa uma instância nova*/
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}