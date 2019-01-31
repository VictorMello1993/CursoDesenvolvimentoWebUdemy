//Adicionando as cores para cada tag identificada
const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '9f6581',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}


document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    // //Verificando se dentro de uma lista das classes da tag identificada contenha a classe nolabel
    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label') //Adicionando um elemento dentra da tag identificada
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0]) /*Inserindo o label antes do 
                                                            primeiro elemento filho do elemento pai 
                                                            (o que foi passado como parâmero)*/                                                          
    }
})