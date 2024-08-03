// ⦁	Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. 

class Revendedora {
    constructor(){
        this.carro = []
        this.valorCarro = []
    };

    adicionarVenda(modelo, valor){
        this.carro.push(modelo)
        this.valorCarro.push(valor)
    }

    numeroVendas(){
        return this.carro.length
    }

    valorTotal(){
        let valor = 0;

        for(let custo of this.valorCarro){
            valor+=custo
        }
        return valor
    }

    valorPorCarro(){
        for(let i =0; i < this.valorCarro.length; i++){
            console.log(this.valorCarro[i] * 0.02)
            }
        }

    salarioVendedor(){
        let salarioFinal = 1000 + (this.valorTotal()*0.05)
        for(let i =0; i < this.valorCarro.length; i++){
            salarioFinal+=this.valorCarro[i] * 0.02
            }
        return salarioFinal
        }
    } 


const loja = new Revendedora()
loja.adicionarVenda('Ford', 1000)
loja.adicionarVenda('Uno', 10000)
loja.adicionarVenda('Logan', 10000)
loja.adicionarVenda('Seila', 100000)
console.log(loja.numeroVendas())
console.log(loja.valorTotal())
loja.valorPorCarro()
console.log(loja.salarioVendedor())

