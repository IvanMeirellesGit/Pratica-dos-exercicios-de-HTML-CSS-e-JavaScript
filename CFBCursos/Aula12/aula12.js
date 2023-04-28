/*
let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [...n1, ...n2]

console.log(`n1: ${n1}`)
console.log(`n2: ${n2}`)
console.log(`n3: ${n3}`)
console.log(typeof (n3))*/

/*
const jogador1 = {
    nome: `Bruno`,
    energia: 100,
    vidas: 3,
    magia: 150
}
const jogador2 = {
    nome: `Ivan`,
    energia: 100,
    vidas: 5,
    velocidade: 80
}
const jogador3 = {...jogador1,...jogador2}

console.log(jogador1)
console.log(jogador2)
console.log(jogador3)
*/

/*
//Uso do spred para ESPALHAR os cada elemento de valores

//funçao recebendo spred de valores e alocando em cada espaço dos parametos. 1=v1 5=v2 4=v3.
const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}

let valores = [1, 5, 4, 10] //Array de valores

console.log(soma(...valores)) //chamada da funçao soma passando array de valores
*/

const objs1 = document.getElementsByTagName(`div`)
const objs2 = [...document.getElementsByTagName(`div`)]

objs2.forEach(element => {
    element.innerHTML = `Susto`
})

console.log(objs1)
console.log(objs2)