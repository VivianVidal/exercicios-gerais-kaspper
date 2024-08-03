// ⦁	Um posto está vendendo combustíveis com a seguinte tabela de descontos: 
// Álcool 	até 20 litros, desconto de 3% por litro 
//  	acima de 20 litros, desconto de 5% por litro 
// Gasolina 	até 20 litros, desconto de 4% por litro 
//  	acima de 20 litros, desconto de 6% por litro 
// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. 


const precoGasolina = 3.30
const precoAlcool = 2.90
let custo;
let porcentagem;

function posto(litros, tipo){
    if(tipo == 'A' && litros <= 20){
        custo = precoAlcool * litros
        porcentagem = custo * 0.03
        console.log(custo-=porcentagem)
    }else if(tipo == 'A' && litros > 20){
        custo = precoAlcool * litros
        porcentagem = custo * 0.05
        console.log(custo-=porcentagem)
    }
    else if(tipo == 'G' && litros <= 20){
        custo = precoGasolina * litros
        porcentagem = custo * 0.04
        console.log(custo-=porcentagem)
    }else if(tipo == 'G' && litros > 20){
        custo = precoGasolina * litros
        porcentagem = custo * 0.06
        console.log(custo-=porcentagem)
    }
}

posto(10, 'A')
posto(100, 'A')
posto(20, 'G')
posto(10, 'G')