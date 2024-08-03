// ⦁	A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). 

function calculaSalarioExtra(horasTrabalhadas, salarioHora){
    const trabalhou = horasTrabalhadas;
    const hora = salarioHora;
    const horaNormalMes = 160;
    const porcentagem = 0.50

    if(trabalhou> horaNormalMes){
        const horaExtra = trabalhou - horaNormalMes;
        const valorExtra = (horaExtra * porcentagem) * hora ;
        console.log(valorExtra)
        const salario = (trabalhou * hora) + valorExtra
        return salario
    }else {
        const salario = trabalhou * hora
        return salario
    }
}

console.log(calculaSalarioExtra(220, 10))