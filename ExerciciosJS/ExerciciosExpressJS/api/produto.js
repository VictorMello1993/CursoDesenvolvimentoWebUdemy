module.exports = (app, text) => {
    function save(req, res){
        res.send('Produto > salvar > ' + text);
    }

    function get(req ,res){
        res.send('Produto > obter > ' + text);
    }

    app.post('/produto', save)
    app.get('/produto', get)

    return {save, get}
}