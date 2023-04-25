const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)


//Adicionar Elementos
//Push (add no final da lista, bom pra quando não se sabe o indice aonde quer add, sabe que vai estar no final da lista )
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift (add no começo do array)
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// Remover elementos
//pop (remove no final)
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift (remove no começo)
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um elemento
// includes

const inclui = arr.includes("Gandalf")
console.log(inclui)

//indexoff (é utilizado para encontrar um valor dentro de uma string ou array, caso o valor não seja encontrado, ele retorna -1.)
const indice = arr.indexOf("Gandalf")
console.log(indice)

//Cortar e Concatenar
//Slice [[ (com  o - ele inverte a parte do corte, ou seja, parte do final)
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// Substituição do elementos
// splice (encontra o indice, quantos vai precisar excluir a partir do indice, substirui os elementos excluidos para o que for colocado aqui)
const elementosRemovidos = sociedade.splice[indice, 1, "Gandalf, o cinzento"]
console.log(elementosRemovidos)

// Iterar os arrays (como percorer os arrays)
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + "se encontra na posição" + indice)
}
