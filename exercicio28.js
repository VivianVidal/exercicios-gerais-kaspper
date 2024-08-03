// ⦁	Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores. 


let valores = []

function somaMaiores(um, dois, tres){
    valores.push(um, dois, tres)
    valores.sort(function(a,b){
        return b-a
    })
    console.log(valores[0] + valores[1])
}

somaMaiores(200,42,900)