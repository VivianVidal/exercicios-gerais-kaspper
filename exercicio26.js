// ⦁	Ler um valor e escrever se é positivo, negativo ou zero. 

const numero = -10


function verNumero(){
    if(numero > 0){
        return 'POsitivo'
    }
    if(numero < 0){
        return'Negativo'
    }
    if(numero === 0){
        return('Zero')
    }
}

console.log(verNumero())