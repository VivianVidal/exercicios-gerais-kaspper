// ⦁	Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. 

const readline = require('readline-sync')


const nome = readline.question ("Digite o nome: ")
const dataNascimento = readline.question ("Digite a data de nascimento com dia, mes e ano: ")
let dias = 0;

const diaNasci = dataNascimento.substring(0,2) 
const dia = Number(dia)
const mesNasci = dataNascimento.substring(3,5)
const mes = Number(mes)
const anoNasci = dataNascimento.substring (6,10)
const ano = Number(ano)

for (let d = dia; d <= 30; d++ ){
            dias ++;
}

for(let m = mes + 1; m <= 12; m++){
            dias+=30
}

let idadeA= 2024 - ano -1 
dias += idadeA * 365

console.log (`${nome} ja viveu ${dias} dias `)