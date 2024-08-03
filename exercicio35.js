// ⦁	Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha. 


const homens = []
const mulheres = [];

function sorte(a,b){
    return a-b
}

function leIdades(homemA, homemB,mulherA, mulherB){
    homens.push(homemA,homemB);
    mulheres.push(mulherA,mulherB);

    homens.sort(function(a,b){
        return a-b
    })
    mulheres.sort(function(a,b){
        return a-b
    })
    console.log(homens[1] + mulheres[0])
    console.log(homens[0] + mulheres[1])
}

leIdades(10,15,20,30)