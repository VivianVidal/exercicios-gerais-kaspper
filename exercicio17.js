// ⦁	Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 

const readline = require('readline-sync')



const anoNasci = readline.question('Digite o ano que você nasceu: ')
const idade = 2024 - Number(anoNasci)
console.log(idade>=16?'Pode votar': 'Não pode votar')