const resposta_minima = 0
const resposta_maxima = 1000
const resposta_secreta = sortearNumero(resposta_minima, resposta_maxima)

atualizaCamposValores()

function atualizaCamposValores() {
    document.querySelector("[data-valor-menor]").innerHTML = resposta_minima
    document.querySelector("[data-valor-maior]").innerHTML = resposta_maxima
}

function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}