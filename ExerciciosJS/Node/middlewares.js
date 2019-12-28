//Funcionamento básico do padrão middleware na prática (chain of responsability)

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

//Terceira função da cadeia sem chamar mais nenhum próximo passo (função next suprimida)
const passo3 = ctx => ctx.valor3 = 'mid3'

/*OBS: O segundo parâmetro é um array de funções, cada uma dela representa por uma função
middleware*/
const exec = (ctx, ...midlewares) => {
    const execMidleware = indice => {
        midlewares && indice < midlewares.length &&
        midlewares[indice](ctx, () => execMidleware(indice + 1)) //Chamada recursiva da função next()
    }
    execMidleware(0)
}

const ctx = {}
exec(ctx, passo2, passo1, passo3)
console.log(ctx)