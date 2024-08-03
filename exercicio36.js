// ⦁	Uma fruteira está vendendo frutas com a seguinte tabela de preços: 
//  	Até 5 Kg 	Acima de 5 Kg 
// Morango 	R$ 2,50 por Kg 	R$ 2,20 por Kg 
// Maçã 	R$ 1,80 por Kg 	R$ 1,50 por Kg 
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. 

const porcentagem = 0.10;

function valorPagoMorango(kg){
    const precoAteCinco = 2.50;
    const precoAcimaCinco = 2.20;
    let total;

    if (kg <= 5) {
        total = kg * precoAteCinco;
    } else {
        total = kg * precoAcimaCinco;
    }

    return total;
}

function valorPagoMaca(kg){
    const precoAteCinco = 1.80;
    const precoAcimaCinco = 1.50;
    let total;

    if (kg <= 5) {
        total = kg * precoAteCinco;
    } else {
        total = kg * precoAcimaCinco;
    }

    return total;
}

function valorTotal(morangoKg, macaKg) {
    let totalMorango = valorPagoMorango(morangoKg);
    let totalMaca = valorPagoMaca(macaKg);
    let total = totalMorango + totalMaca;

    if (morangoKg + macaKg > 8 || total > 25) {
        total -= total * porcentagem;
    }

    return total.toFixed(2);
}

console.log(valorTotal(10, 0)); 
console.log(valorTotal(2, 0));  
console.log(valorTotal(7, 0));  
console.log(valorTotal(0, 10)); 
console.log(valorTotal(0, 7)); 
console.log(valorTotal(5, 5));  