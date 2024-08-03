// ⦁	Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. 

let valores = []

function maior(um, dois, tres){
    valores.push(um, dois, tres)
    valores.sort(function(a,b){
        return b-a
    })
    console.log(valores[0])
}

maior(200,42,9)