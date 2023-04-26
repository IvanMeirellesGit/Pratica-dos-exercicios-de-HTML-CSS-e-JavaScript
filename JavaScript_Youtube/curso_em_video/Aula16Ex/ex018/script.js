let num = document.querySelector(`input#txtnum`)
let list = document.querySelector(`select#listnum`)
let res = document.querySelector(`div#res`)
let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionarNumero() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement(`option`)
        item.text = `Valor ${num.value} foi adicionado.`
        item.value = `V${num.value}`
        res.innerHTML = ``
        list.appendChild(item)
    } else {
        window.alert(`Valor Inválido ou já encontrado na lista.`)
    }
    num.focus()
    num.value = ``
}

function mostrarResult() {

    let total = valores.length
    let maior = 0
    let menor = 0
    let soma = 0
    let media = 0

    for (let pos in valores) {
        soma += valores[pos]
        if (valores[pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
            menor = valores[pos]
    }
    media = soma / total

    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi o: ${maior}</p>`
    res.innerHTML += `<p>O menos valor informado foi o: ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

}
