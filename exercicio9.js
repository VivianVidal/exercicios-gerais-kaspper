// ⦁	O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor. 

const readline = require('readline-sync');
const custoFabrica = readline.question('Digite o custo do carro:');

function calculaCusto(carro){
    const porcentagemDistribuidor = Number(custoFabrica) * 0.28
    const porcentagemImposto =  Number(custoFabrica) * 0.45
    return  (Number(custoFabrica) + porcentagemDistribuidor) + porcentagemImposto 
}

console.log(calculaCusto())