// ⦁	Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. 

const numeroC = Math.floor(Math.random() * 20)
const numeroD = Math.floor(Math.random() * 20)

if(numeroC>numeroD){
    console.log(numeroD, numeroC)
}else{
    console.log(numeroC, numeroD)
}