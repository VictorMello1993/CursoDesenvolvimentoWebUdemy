//Criando um objeto literal
const produto1 = {} //Objeto vazio

//Propriedades criadas dinamicamente
produto1.nome = 'Processador Intel i5 7500';
produto1.preco = 855.00;

//Outra forma de definir nomes das propriedades: através de um índice que representa um texto
produto1['Desconto'] = 0.40;

console.log(produto1);


const produto2 = {
    nome : 'Monitor Benq 144Hz',
    preco:  1765.00,
    Desconto:  0.15
}

console.log(produto2);
console.log('\n');


const produto3 = {
    nome: 'Computador gamer',
    pecas: {
        processador: 'Intel i7 7700k',
        placaVideo: 'Geforce GTX 1060 6 GB',
        memoriaRAM: '16 GB RAM (4x 4GB) DDR4 2100 MHz',
        fonte: '700 W',
        armazenamento: {
            hd: '1 TB',
            ssd: '120 GB'
        },
        placaMae: 'Asus Prime B250 PLUS BR',
        gabinete: 'Versa C21 Thermaltake'
    },
    total: 5500.00
}

console.log(produto3);

//Definindo JSON
'{"Nome": "Victor Santos de Mello", "Idade": "24", "Cargo": "Programador Jr", "Salario": 1900.00}';