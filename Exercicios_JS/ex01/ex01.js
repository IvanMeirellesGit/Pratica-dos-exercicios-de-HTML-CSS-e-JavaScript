function Checar_letra() {
    var letratxt = window.document.querySelector('input#letratxt')
    var res = document.querySelector('div#res')
    var letra = letratxt.value.toLowerCase()

    if (letra == Number(letra) || letra.length > 1) {
        res.innerHTML = `Você digitou : ${letra} e essa inserção é invalida`
    } else {
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
            res.innerHTML = `<p>A letra digitada é ${letra}!</p>`
            res.innerHTML += `<p>Portanto é uma: Vogal!</p>`
        } else {
            res.innerHTML = `<p>A letra digitada é ${letra}!</p>`
            res.innerHTML += `<p>Portanto é uma: Consoante!</p>`
        }
    }

}