function carregar() {
    var msg = document.getElementById('msg')
    var img = document.querySelector('img#imagem')
    var style = window.document.body.style
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    var msgPadrao = msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        msg.innerHTML = `${msgPadrao} Bom Dia!`
        img.src = 'manha.png'
        document.body.style.background = '#C6A883'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        msg.innerHTML = `${msgPadrao} Bom Tarde!`
        img.src = 'tarde.png'
        style.background = '#BF7D6C'

    } else {
        //Boa Noite!
        msg.innerHTML = `${msgPadrao} Boa Noite!`
        img.src = 'noite.png'
        document.body.style.background = '#242E30'
    }
}

