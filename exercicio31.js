// ⦁	Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 

function vencedor(timeA, golsA, timeB, golsB){
    if(golsA>golsB){
        return `${timeA} vencedor`
    }
    if(golsA<golsB){
        return `${timeB} vencedor`
    }
    if(golsA===golsB){
        return `Empate`
    }
}

console.log(vencedor('A', 30, 'B', 30))