var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = 'pt-br'

recognition.start()

recognition.onresult = (event) => { onSpeak(event) }
recognition.onend = () => { recognition.start() }

const elemento_chute = document.querySelector("#chute")
const area_principal = document.querySelector(".principal__area")

function onSpeak(e) {
    transcript = e.results[0][0].transcript
    processaTranscript(transcript)
}

function processaTranscript(transcript) {
    if(checaGameOver(transcript)) {
        mostraTelaGameOver()
    }else {
        chute = validaStringParaNumero(transcript)
        atualizaHTML(chute, transcript)
    }
}

function mostraTelaGameOver() {
    document.body.classList.toggle("game-over")
    
    area_principal.innerHTML = `
        <h2>GAME OVER</h2>
        <h3>O número secreto era ${resposta_secreta}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente!</button>
    `

    removeInfo()
    document.querySelector("#jogar-novamente").addEventListener("click", () => {
        window.location.reload()
    })
}

function atualizaHTML(valor, original){

    switch(valor) {
        case -1: //Mensagem não contem numero algum ou tem algum formato invalido
            elemento_chute.innerHTML = `
                <div>Você disse:</div>
                <span class="principal__area__mensagem__resposta">${original}</span>
                <div class="principal__area__mensagem__feedback" id="feedback">Valor Inválido</div> 
            `
            break;
        case -2: //Mensagem com numero acima ou abaixo do intervalo permitido
            elemento_chute.innerHTML = `
                <div>Você disse:</div>
                <span class="principal__area__mensagem__resposta">${original}</span>
                <div class="principal__area__mensagem__feedback" id="feedback">O número secreto precisa estar entre ${resposta_minima} e ${resposta_maxima}</div> 
            `
            break;
        default: //Numero esta ok, agora precisa do feedback caso o usuario acertou ou  o numero esta acima ou abaixo do valor secreto

            resultado = validaResposta(valor)

            switch(resultado) {
                case -1: //valor menor que a resposta secreta
                    elemento_chute.innerHTML = `
                        <div>Você disse:</div>
                        <span class="principal__area__mensagem__resposta">${valor}</span>
                        <div class="principal__area__mensagem__feedback" id="feedback">O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>  
                    `
                    break;
                case 0: //valor igual a resposta secreta
                    area_principal.innerHTML = `
                            <h2>Parabéns! Você acertou!</h2>
                            <h3>O número secreto era ${valor}</h3>
                            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente!</button>
                        `

                    removeInfo()
                    document.querySelector("#jogar-novamente").addEventListener("click", () => {
                        window.location.reload()
                    })
                    break;
                case 1: //valor maior que a resposta secreta
                elemento_chute.innerHTML = `
                        <div>Você disse:</div>
                        <span class="principal__area__mensagem__resposta">${valor}</span>
                        <div class="principal__area__mensagem__feedback" id="feedback">O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
                    `
                    break;
            }
            break;
    }
}

function removeInfo() {
    document.querySelector(".info").innerHTML = ""
}