function verificaChute(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) {
        console.log('Valor invalido')
    }

    if(numeroForMaiorOuMenorQueValorPermitido(numero)) {
        console.log(`valor invalido: o numero secreto precisa estar entre ${resposta_minima} e ${resposta_maxima}`)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueValorPermitido(numero) {
    return numero > resposta_maxima || numero < resposta_minima
}