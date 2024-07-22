const prompt = require('prompt-sync')({sigint: true})
var funcao = require('./funcao.js')
while(true){
console.log(`
        Menu de ferias
        1 - Adicionar dia e atividade
        2 - Imprimir lista do que Fiz
        3 - Sair
`); 
let input = +prompt('')
switch(input){
    case 1:
    funcao.ferias()
    break;
    case 2: 
    funcao.imprimir()
    break;
    case 3:
    process.exit()
    break;
}
}