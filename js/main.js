const resposta_minima = 0
const resposta_maxima = 1000
const resposta_valor = valorAleatorio()

const campo_resposta_usuario = document.querySelector("[data-resposta]")

atualizaCamposValores()

function atualizaCamposValores() {
    document.querySelector("[data-valor-menor]").innerHTML = resposta_minima
    document.querySelector("[data-valor-maior]").innerHTML = resposta_maxima
}

function valorAleatorio() {
    return Math.floor(Math.random() * (resposta_maxima - resposta_minima)) + resposta_minima;
}