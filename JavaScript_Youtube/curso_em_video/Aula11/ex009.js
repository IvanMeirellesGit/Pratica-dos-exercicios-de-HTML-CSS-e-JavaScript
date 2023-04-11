function Verificar() {
    var txtP = window.document.querySelector('input#txtpais')
    var res = window.document.querySelector('div#res')
    res.innerHTML = `<p>Vivendo em: <strong>${txtP.value}</strong></p>`

    if (txtP.value == "Brasil") {
        res.innerHTML += `<p><strong>Brasileiro!</strong></p>`
    } else {
        res.innerHTML += `<p><strong>Estrangeiro!</strong></p>`
    }
}