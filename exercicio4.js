// ⦁	Escreva um algoritmo para ler um valor (de uma variável) e escrever (na tela) o seu antecessor. 

const readline = require('readline-sync');

const valor = readline.question('Digite o valor: ');
console.log(`O seu antecessor é ${Number(valor) - 1}`);