// ⦁	Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 

const readline = require('readline-sync')

const valor = readline.question('Digite o valor para saber se é positivo ou negativo: ')
console.log(Number(valor)>=0? 'Positivo':'Negativo')