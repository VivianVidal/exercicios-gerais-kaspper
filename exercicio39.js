// ⦁	Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que: 
// ⦁	Se quantidade  <= 5  o desconto será de 2% 
// ⦁	Se quantidade  > 5  e  quantidade  <=10  o desconto será de 3% 
// ⦁	Se quantidade  >  10 o desconto será de 5% 

let total = 0;
let precoFinal = 0;

function calculaTotal(nome, quantidade, preco){
    total = quantidade*preco
    if(quantidade <=5){
        precoFinal =total- (total * 0.02) 
    }else if(quantidade > 5 && quantidade <=10){
        precoFinal = total-(total * 0.03) 
    }else{
        precoFinal = total-(total *0.05) 
    }
    return precoFinal
}


console.log(calculaTotal('Maça', 21, 1))
console.log(calculaTotal('Maça', 5, 5))
console.log(calculaTotal('Maça', 9, 2))