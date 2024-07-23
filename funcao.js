const prompt = require('prompt-sync')({sigint: true})
let lista = []

let ferias = function ferias(){
    let dia = +prompt('Escolha um dia entre 15 e 19 de julho: ')
    if(dia < 15 || dia >19){
        console.log('Dia escolhido fora de periodo de ferias.');
        ferias()
    }   
    let atividade = []
    
    function add(){
        let inp = prompt('O que fez nesse dia? ')
        atividade.push(inp)
        let escolha = prompt('Quer adicionar outra atividade?(s/n): ')
        if(escolha == 's'){
            add()
        } else if(escolha == 'n'){
            return
        } else {console.log('Dado invalido');}
    }
    add()
    lista.push({dia, atividade})
    console.log('Dia adicionado com sucesso');
}
module.exports.ferias = ferias

let imprimir = function imprimir(){
    lista.forEach((element, index) => {
        console.log(`Lista -${index +1}- \nDia: ${element.dia}`);
        element.atividade.forEach(dado => {
        console.log(`${dado}`);
        });
   });
}
module.exports.imprimir = imprimir

let remove = function remove(){
    let input = prompt('Qual lista você deseja excluir? ')
    console.log(`A lista escolhida é do dia ${lista[input - 1].dia}`);
    let opc = prompt('Confirmar?(s/n): ')
    if(opc == 'n'){remove()} else if(opc == 's'){
    lista.splice(input -1, 1)
    console.log('Excluido com sucesso');
    }
}
module.exports.remove = remove

let edit = function edit() {
   lista.forEach((element, index) => {
        console.log(`Lista -${index +1}- \nDia: ${element.dia}`);
        element.atividade.forEach(dado => {
        console.log(`${dado}`);
        });
   });
    let atvEdit = prompt('Deseja editar ou adicionar uma atividade? ')
    if(atvEdit == 'editar'){
    let editar = +prompt('Qual lista deseja mudar? ')
    let escolha = prompt('Deseja mudar o dia ou atividade? ').toLowerCase().trim()
    if(escolha == 'dia'){
        let dia = prompt('Atualize o dia: ')
        lista[editar -1].dia = dia
    } else if(escolha == 'atividade'){
        let atv = +prompt('qual lista deseja mudar? ')
        let mud = prompt('Digite a nova atividade: ')
        lista[editar -1].atividade.splice(atv-1, 1, mud)
        console.log(`Lista atualizada com sucesso.`);
    }
} else if(atvEdit == 'adicionar'){
    let opc = +prompt('Qual lista deseja adicionar uma tarefa? ')
    let add = prompt('Digite a ativadade que deseja adicionar: ')
    lista[opc -1].atividade.push(add)
}
}
module.exports.edit = edit