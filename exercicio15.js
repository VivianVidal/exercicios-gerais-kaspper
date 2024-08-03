// ⦁	As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra. 

const readline = require('readline-sync')

const quantidade = readline.question('Digite a quantidade de maças a serem compradas: ')

function calculaPreco(){
    if(Number(quantidade)<12){
    return quantidade*1.3
}
return quantidade*1.00
}

console.log(calculaPreco())