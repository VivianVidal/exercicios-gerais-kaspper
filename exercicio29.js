// ⦁	Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente. 

let array = []

function crescente(a,b,c){
    let maior ;
    let menor;
    array.push(a,b,c)
    for (let i=0; i<array.length;i++){
        for(let m =0; m<array.length; m++){
            if(array[i]<array[m]){
                maior = array[i]
                menor = array[m]
                array[i] = menor
                array[m] = maior
            }
        }
    }
    console.log(array)
}

crescente(2500, 260,650)
