function validaStringParaNumero(str) {
    resultado = +str

    if(chuteForInvalido(resultado)) {
        return -1
    }

    if(numeroForMaiorOuMenorQueValorPermitido(resultado)) {
        // console.log(`valor invalido: o numero secreto precisa estar entre ${resposta_minima} e ${resposta_maxima}`)
        return -2
    }

    return resultado
}

function validaResposta(resposta) {

    if(resposta < resposta_secreta) {
        return -1
    } else if(resposta > resposta_secreta) {
        return 1
    } else {
        return 0
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueValorPermitido(numero) {
    return numero > resposta_maxima || numero < resposta_minima
}