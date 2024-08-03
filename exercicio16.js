// ⦁	Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada. 

const readline = require('readline-sync')

const notaA = readline.question('Digite a nota da primeira avaliação do aluno: ')
const notaB = readline.question('Digite a nota da segunda avaliação do aluno: ')

const media = (Number(notaA) + Number(notaB))/2;

console.log(media>7?'Aprovado':'Reprovado', 'a média foi de: ' + media)