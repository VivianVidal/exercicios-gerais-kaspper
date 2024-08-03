// ⦁	Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é:

const notas = []
const peso = [2,3,5]
let soma = 0;

while(notas.length < 3){
    notas.push(Math.floor(Math.random() * 10))
}
console.log(notas)
for (let i =0; i<notas.length;i++){
    let calculo = notas[i] * peso[i]
    soma+=calculo
}

console.log(`A média corresponde a: ${soma / 10}`)
