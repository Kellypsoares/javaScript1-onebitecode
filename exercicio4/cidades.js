const nomeDoTurista = window.prompt("Qual é seu nome?")
let conheceuCidade =  window.prompt("Você já visitou alguma cidade? (Sim/Não)")
let nomeDasCidades = ""
let contagem = 0

while (conheceuCidade = "Sim") {
  let nomeDaCidade = " " + window.prompt("Qual o nome da cidade?") + " "
  nomeDasCidades += " - " + nomeDaCidade + "\n"
  contagem++
  conheceuCidade = window.prompt("Você já visitou alguma outra cidade? (Sim/Não)")

  if (conheceuCidade == "Não")
    break

}

alert( nomeDoTurista + " conheceu " + contagem + " cidades, que são: \n"+ nomeDasCidades )