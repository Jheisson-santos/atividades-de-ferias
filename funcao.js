const prompt = require('prompt-sync')({sigint: true})
let lista = []
lista = lista.sort()
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
        }
    }
    add()
    lista.push({dia, atividade})
    console.log(lista);
}
module.exports.ferias = ferias

let imprimir = function imprimir(){
    let qualLista = prompt('Qual dia você deseja imprimir? ')
    console.log(`No dia ${lista[qualLista - 1].dia} eu fiz: `);
    lista[qualLista - 1].atividade.forEach(element => {
        console.log(`${element}`);
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

