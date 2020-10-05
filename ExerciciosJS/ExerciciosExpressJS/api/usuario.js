function save(req, res){
    res.send('Usuário > salvar')
}

function get(req, res){
    res.send('Usuário > obter')
}

module.exports = {save, get}