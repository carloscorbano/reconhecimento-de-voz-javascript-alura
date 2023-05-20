const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

const elemento_chute = document.querySelector("#chute")

function onSpeak(e) {
    chute = e.results[0][0].transcript
    atualizaChute(chute)
    verificaChute(chute)
}

function atualizaChute(valor){
    elemento_chute.innerHTML = `
        <div>Você disse:</div>
        <span class="principal__area__mensagem__resposta">${valor}</span>
    `
}