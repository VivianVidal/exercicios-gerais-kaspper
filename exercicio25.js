// ⦁	Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'. 

function calculaPontoPedido(estoqueAtual, estoqueMax, estoqueMin){
    const estoqueMedio = (estoqueMax + estoqueMin) /2
    return estoqueAtual>=estoqueMedio?'Não efetuar Compra':'Efetuar Compra'
}

console.log(calculaPontoPedido(200, 300, 100))