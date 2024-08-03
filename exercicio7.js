// ⦁	Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 

const readline = require('readline-sync');

const totalEleitores = readline.question('Digite o total de eleitores da cidade: ');
const votosBrancos = readline.question('Digite o total de votos brancos: ');
const votosNulos = readline.question('Digite o total de votos nulos: ');
const votosValidos = readline.question('Digite o total de votos válidos: ');

function calculaPercentual(percentual){
    return `A porcentagem de ${percentual} é ${(percentual / totalEleitores) * 100}%`
}

console.log(calculaPercentual(Number(votosBrancos)))
console.log(calculaPercentual(Number(votosNulos)))
console.log(calculaPercentual(Number(votosValidos)))