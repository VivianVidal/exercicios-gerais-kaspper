// ⦁	Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo: 
// 	 	N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios 
// 	Média_de_Aproveitamento  = 	--------------------------------------------------------- 
// 	 	7 


// > =  9,0  	A 
// > =  7,5  e  <  9,0 	B 
// > =  6,0  e  <  7,5 	C 
// <  6,0 	D 

function calculaConceito(n1,n2,n3,mediaExercicio){
    let mediaAproveitamento = (n1 +(n2*2)+(n3*3) + mediaExercicio)/7
    if(mediaAproveitamento >=9){
        return 'A'
    }else if(mediaAproveitamento >=7.5 && mediaAproveitamento <9){
        return 'B'
    }else if(mediaAproveitamento >= 6 && mediaAproveitamento < 7.5){
        return 'C'
    }else{
        return 'D'
    }
}

console.log(calculaConceito(7,8,5,6))
console.log(calculaConceito(7,4,5,5))
console.log(calculaConceito(10,8,10,9))
console.log(calculaConceito(4,10,8,6))