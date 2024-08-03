// ⦁	Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10! 

const readline = require('readline-sync');

const numero = readline.question('Digite o valor e veja se e maior ou menor que 10: ');
const resultado = Number(numero)>10?'É maior que 10': 'Não é maior que 10'
console.log(resultado)