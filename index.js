const prompt = require('prompt-sync')({sigint: true})
var funcao = require('./funcao.js')
while(true){
console.log(`
        Menu de ferias
        1 - Adicionar dia e atividade
        2 - Imprimir lista do que Fiz
        3 - Excluir lista
        4 - Editar lista/ Adicionar ativadade
        9 - Sair
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
    funcao.remove()
    break;
    case 4:
    funcao.edit()
    break;
    case 9:
    process.exit()
    break;
    default:
        console.log('Entrada invalida. Digite um valor valido!');
}
}