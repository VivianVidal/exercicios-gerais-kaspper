// Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule e mostre seu peso ideal, utilizando as seguintes fórmulas: 
// ⦁	para sexo masculino:  peso ideal = (72.7 * altura) - 58 
// ⦁	para sexo feminino:  peso ideal = (62.1 * altura) - 44.7 
let pesoIdeal;

function calculaIMC(altura, sexo){
    if(sexo === 'M'){
        pesoIdeal = (72.7 * altura)-58
        return pesoIdeal.toFixed(2)
    }else{
        pesoIdeal = (62.1 * altura) - 44.7
    }
    return pesoIdeal.toFixed(2)
}

console.log(calculaIMC(1.78, 'M'))