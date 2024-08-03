// ⦁	Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. 

const readline = require('readline-sync');

const salario = readline.question('Digite o salário mensal a ser calculado: ');
const percentual = readline.question('Digite o percentual de reajuste sem símbolos');
const porcentagem = (Number(percentual) / 100) * Number(salario);

console.log(`O seu novo salário é ${Number(salario) + porcentagem}`);