let númeroDesejado = parseFloat( window.prompt("Qual o número desejado?") )
let resultado = ""

for (let indice = 1; indice <= 20; indice++) {
  let multiplicação = númeroDesejado * indice
  resultado +=  " \n" + númeroDesejado +  " x " + indice + "=" + multiplicação 
}

alert ("Resultado da multiplicação de " + númeroDesejado + ":\n\n" + resultado )