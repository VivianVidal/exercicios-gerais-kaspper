// ⦁	Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total. 

class Vendedor {
    constructor(salario){
        this.salario = salario
        this.venda = []
    };

    adicionarVenda(valor){
        this.venda.push(valor)
    }

    numeroVendas(){
        return this.venda.length
    }

    valorSalario(){
        let valor = this.salario;
        let comissao = 0

        for(let venda of this.venda){
            if(venda<=1500){
                let calculo = venda*0.03
                comissao+=calculo
            }else{
                let calculo = venda*0.05
                comissao+=calculo
            }
        }
        return valor+=comissao
    }
}

const vendedor1 = new Vendedor(2000)
vendedor1.adicionarVenda(1300)
vendedor1.adicionarVenda(2000)
vendedor1.adicionarVenda(1000)
vendedor1.adicionarVenda(3000)
console.log(vendedor1.numeroVendas())
console.log(vendedor1.valorSalario())