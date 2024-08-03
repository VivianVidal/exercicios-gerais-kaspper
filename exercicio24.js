// ⦁	Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 

function contaCliente(numeroConta, saldo, debito, credito){
    const saldoAtual = (saldo - debito) + credito
    return saldoAtual>=0?'Saldo Positivo': 'Saldo Negativo'
}

console.log(contaCliente(12389 ,100, 1000, 500 ))