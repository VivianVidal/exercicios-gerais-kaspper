

function algoritmo(x ,y){
    const z = (x*y) +5 
    if(z<=0){
        return `${z}, a`
    }else if(z<=100){
        return `${z}, b`
    }else{
        return `${z}, c`
    }
}

console.log(algoritmo(3,2))
console.log(algoritmo(150,3))
console.log(algoritmo(7,-1))
console.log(algoritmo(-2,5))
console.log(algoritmo(50,3))
