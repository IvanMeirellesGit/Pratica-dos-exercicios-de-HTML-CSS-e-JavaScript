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
        //pegar valor e add na lista e no select        
        valores.push(Number(num.value))
        let item = document.createElement(`option`)
        item.text = `Valor ${num.value} foi adcionado.`
        item.value = `V${num.value}`
        list.appendChild(item)
        res.innerHTML = ``
    } else {
        alert(`Valor Inválido ou já encontrado na lista.`)
    }
    num.value = ``
    num.focus()
}



function mostrarResult() {
    if (valores.length == 0) {
        alert(`Adicione valores antes de finalizar!`)
    } else {
        let total = valores.length
        let menor = valores[0]
        let maior = valores[0]
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
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi o: ${maior}</p>`
        res.innerHTML += `<p>O menos valor informado foi o: ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

    }
}