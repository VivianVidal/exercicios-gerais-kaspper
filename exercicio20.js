// ⦁	Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. 

function calculaHora(inicio, fim) {
    const horaInicio = inicio
    const horaFinal = fim

    return horaInicio - horaFinal
}

console.log(calculaHora(12, 5))
