function Checar_letra() {
    var letratxt = window.document.querySelector('input#letratxt')
    var res = document.querySelector('div#res')
    var letra = letratxt.value.toLowerCase()

    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        res.innerHTML = `<p>A letra digitada é ${letra}!</p>`
        res.innerHTML += `<p>Portanto é uma: Vogal!</p>`
    } else {
        res.innerHTML = `<p>A letra digitada é ${letra}!</p>`
        res.innerHTML += `<p>Portanto é uma: Consoante!</p>`
    }
}