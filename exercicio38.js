// ⦁	Para  A = V,  B = V  e  C = F,  qual o resultado da avaliação das seguintes expressões: 
 
// ⦁	(A  e  B)  ou  (A  xou  B) 
// ⦁	(A  ou  B) e (A  e  C) 
// ⦁	A  ou  C  e  B  xou  A  e  não  B 


const a = 'v'
const b ='v'
const c ='f'

console.log((a&&b)||(a||b))
console.log((a||b)&&(a&&c))
console.log(a||c&&b||a&&!b)