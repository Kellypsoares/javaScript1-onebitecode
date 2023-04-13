let numb1 = window.prompt("Insira um numero:")
let numb2 = window.prompt("Insira um segundo numero:")

let soma = parseFloat(numb1) + parseFloat (numb2)
let subtração = parseFloat(numb1)  - parseFloat (numb2)
let divisão = parseFloat(numb1) / parseFloat (numb2)
let mult = parseFloat(numb1)  * parseFloat (numb2)

alert (
  "Resultados:\n"+
  "Soma:"+soma  +
  "\nSubtração:"+subtração +
  "\nDivisão:"+divisão+
  "\nMultiplicação:"+mult
)