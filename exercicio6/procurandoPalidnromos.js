const palavraDesejada = window.prompt( "Qual a palavra deseja saber se é um palíndromo?")
let palavraInvertida = ""

for( let i = palavraDesejada.length - 1 ; i >= 0; i-- ) {
  palavraInvertida += palavraDesejada[i]
}

if(palavraDesejada === palavraInvertida) {
  alert( palavraDesejada + " é um palíndromo.")
} else {
  alert( palavraDesejada + " não é um palíndromo.\n\n" + palavraDesejada + " é diferente de " + palavraInvertida)
}
