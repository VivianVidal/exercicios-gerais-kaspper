// ⦁	Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius.

const readline = require('readline-sync');

const fahrenheit = readline.question('Digite o valor a ser calculado:')
console.log((fahrenheit-32)/1.8)


