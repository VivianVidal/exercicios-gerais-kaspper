// ⦁	Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’. 

const readline = require('readline-sync')


function validaUsuario(){
    let mensagem;
    const codigo = 1234;
    const senha = 9999;

    const codigoUser = readline.question('Digite o código do usuário:')
    if(codigo === Number(codigoUser)){
        const senhaUser = readline.question('Digite a senha: ')
        mensagem = senha===Number(senhaUser)?'Acesso permitido':'Senha incorreta'
    }else{
        mensagem='Usuário inválido'
    }
    return mensagem
}

console.log(validaUsuario())