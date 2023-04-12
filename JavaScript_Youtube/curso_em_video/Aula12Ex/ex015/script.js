function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtidade')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') // captura 0 para M e 1 para F
        var idade = ano - Number(fano.value) // Calcula a idade
        var genero = ''
        var img = document.createElement('img') //Cria elemento img com js

        img.setAttribute('id', 'foto') // Atribui foto ao id da tag img. img id = 'foto'

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'img/f-bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/f-homem-j.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/f-homem-j.png')
            } else {
                //Idoso
                img.setAttribute('src', 'img/f-homem-i.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'img/f-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/f-mulher-j.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/f-mulher-j.png')
            } else {
                //Idoso
                img.setAttribute('src', 'img/f-mulher-i.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}