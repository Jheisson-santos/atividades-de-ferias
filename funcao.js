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
        }
    }
    add()
    lista.push({dia, atividade})
    
}
module.exports.ferias = ferias

let imprimir = function imprimir(){
    let qualLista = prompt('Escolha uma lista: ')
    console.log(`Você escolheu a lista do dia ${lista[qualLista - 1].dia}`);
    console.log('Nesse dia eu fiz: ');
    lista[qualLista - 1].atividade.forEach(element => {
        console.log(`${element}`);
 
});

}
module.exports.imprimir = imprimir
