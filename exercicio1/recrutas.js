

let nome = window.prompt("Insira seu nome:")
let sobrenome = window.prompt("Insira seu sobrenome:")
let profissão = window.prompt("Insira sua profissão:")
let nascimento = window.prompt("Insira seu ano de nascimento:")

alert (
  "Recruta cadastrado com sucesso"/n + 
  nome + " "+
  sobrenome +" "+ 
  profissão +" "+ 
  "idade:" + (2023- parseFloat (nascimento))

)
