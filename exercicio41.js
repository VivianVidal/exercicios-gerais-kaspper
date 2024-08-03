// ⦁	Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para estar em condições, um dos seguintes requisitos deve ser satisfeito: 
// ⦁	Ter no mínimo 65 anos de idade. 
// ⦁	Ter trabalhado no mínimo 30 anos. 
// ⦁	Ter no mínimo 60 anos  e  ter trabalhado no mínimo 25 anos. 
// Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria'  ou  'Não requerer'. 


const readline = require('readline-sync')

function calculaAposentadoria(){
    const codigo = readline.question('Digite o código do empregado: ')
    const anoNasc = readline.question('Digite o ano do nascimento: ')
    const anoEmpresa = readline.question('Digite o ano de ingresso na empresa: ')

    const idade = 2024 - Number(anoNasc)
    const tempoTrabalho = 2024 - Number(anoEmpresa)
    let mensagem;

    if(idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >=25)){
        mensagem = `Idade: ${idade}\nTempo de trabalho: ${tempoTrabalho}\nRequerer Aposentadoria`
    }else {
        mensagem = `Idade: ${idade}\nTempo de trabalho: ${tempoTrabalho}\nNão requerer Aposentadoria`
    }
    return mensagem
}

console.log(calculaAposentadoria())