
// ⦁	Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados. 

function triangulo(a,b,c){
    const ladoA = b + c
    const ladoB = a + c
    const ladoC = a + b

    if(a < ladoA && b < ladoB && c <ladoC){
        return 'Triangulo'
    }
    return 'Não é '
}

console.log(triangulo(20,30,40))
