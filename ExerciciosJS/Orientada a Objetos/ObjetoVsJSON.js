const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c}};

//Convertendo um objeto para o formato JSON
console.log(JSON.stringify(obj)); /*Note que o retorn de uma função não foi mostrado em JSON, 
                                    pois trata-se de formato de dados, que não pode ser processado*/

//Criando um JSON
const pessoa = '{"Nome": "Victor", "Sobrenome": "Mello", "Idade": 24}';
console.log(pessoa);

//Convertendo JSON para objeto
console.log(JSON.parse(pessoa));

const pessoa1 = '{"Nome": "Victor", "Sobrenome": "Mello", "Idade": 24, \
"Endereco": {"Logradouro": "Avenida Miguel Antônio Fernandes", "Numero": 31, \
"Complemento": "Casa 62", "Cidade": "Rio de Janeiro", "Bairro": "Recreio", "CEP": "22790-682"}, \
"possuiIrmaos": false,\
 "email": ["victorsmello93@gmail.com", "vitinho.mello@gmail.com", "santos-victor@outlook.com"]}';

console.log(JSON.parse(pessoa1));

/*OBS: em objetos JSON, todos os identificadores dos atributos devem ser acompanhados de aspas duplas,
assim como valores de atributos que são do tipo String*/

