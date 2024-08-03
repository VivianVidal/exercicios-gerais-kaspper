// ⦁	Ler dois valores e imprimir uma das três mensagens a seguir: 
// ‘Números iguais’, caso os números sejam iguais 
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo seja maior que o primeiro.  


function seila(m,n){
    if(m === n){
        return 'Iguais'
    }
    if(m<n){
        return 'Primeiro é menor'
    }
    if(m>n){
        return 'Primeiro é maior'
    }
}

console.log(seila(200,200))