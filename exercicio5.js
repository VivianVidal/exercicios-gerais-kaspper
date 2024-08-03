// ⦁	Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo. 
 const readline = require('readline-sync')

const base = readline.question('Digite a base a ser calculada: ')
const altura = readline.question('Digite a altura a ser calculada: ')

console.log(`A área corresponde ao valor de: ${Number(base) * Number(altura)} `)