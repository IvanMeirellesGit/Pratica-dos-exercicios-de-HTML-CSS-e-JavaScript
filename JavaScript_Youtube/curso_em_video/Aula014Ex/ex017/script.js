function gerarTabuada() {
    let num = document.querySelector(`input#txtnum`)
    let tab = document.querySelector(`select#seltab`)

    let res = document.querySelector(`div#res`)

    if (num.value.length == 0) {
        alert(`Por favor, digite um número!`)
    } else {
        let n = Number(num.value)

        let c = 1
        tab.innerHTML = ``
        while (c <= 10) {
            let item = document.createElement(`option`)
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

    }
}