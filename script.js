
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var titulo = window.document.getElementById('titulo')
    var rodape = window.document.getElementById('rodape')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são exatamente <strong>${hora}:${minuto}</strong>.`
    
    if (hora <= 5) {
        // Madrugada
        img.src = 'madrugada.png'
        window.document.body.style.backgroundColor = '#08141A'
        titulo.style.color = '#F5F5FA'
        rodape.style.color = '#F5F5FA'
        msg.innerHTML += '<strong><p>Boa madrugada! Mas está na hora de você dormir, não?</p></strong>'


    } else if (hora < 12) {
        // Dia
        img.src = 'manha.png'
        window.document.body.style.backgroundColor = '#F5D8B1'
        msg.innerHTML += '<strong><p>Bom dia!</p></strong>'
    } else if (hora <= 18) {
        // Tarde
        img.src = 'tarde.png'
        window.document.body.style.backgroundColor = '#B27C4F'
        msg.innerHTML += '<strong><p>Boa tarde!</p></strong>'
    } else  {
        // Noite
        img.src = 'noite.png'
        window.document.body.style.backgroundColor = '#291D1D'
        msg.innerHTML += '<strong><p>Boa noite!</p></strong>'
        titulo.style.color = '#F5F5FA'
        rodape.style.color = '#F5F5FA'
    }
}
