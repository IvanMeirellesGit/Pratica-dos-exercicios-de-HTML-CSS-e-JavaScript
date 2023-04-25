let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)
num[5] = 6
num.push(7) //Acrescenta valor na ultima posição de um array

console.log(`Acrescentando mais um elemento no vetor fica assim: ${num}`)
console.log(`Tamanho do vetor: ${num.length}`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)
console.log(`Elementos do vetor em ordem crescente com método sort. ${num.sort()}`)
console.log(`O primeiro valor do vetor após ordenamento é: ${num[0]}`)

let pos = num.indexOf(8)

if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor esta na posição ${pos}`)
}
